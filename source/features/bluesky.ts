import { Blob } from "node:buffer";
import {
	type APIAttachment,
	type APIModalSubmitGuildInteraction,
	MessageFlags,
} from "@discordjs/core";
import sharp from "sharp";
import { request } from "undici";
import { atpAgent } from "../at-proto.js";
import { POST_ATTACHMENTS_CACHE } from "../caches/post-attachments.js";
import { client } from "../discord.js";
import { splitText } from "../utility/functions.js";
import { ModalResolver } from "../utility/modal-resolver.js";
import { ANNOUNCE_MODAL_CONTENT_CUSTOM_ID } from "../utility/string-store.js";

async function compress(arrayBuffer: ArrayBuffer, mediaType?: string | undefined) {
	const gif = mediaType === "image/gif";
	const image = sharp(arrayBuffer, { animated: gif });
	const metadata = await image.metadata();
	const lowestSize = Math.min(metadata.width!, metadata.height!);
	const buffer = gif ? image.gif({ colours: 128, dither: 0.8 }) : image.webp({ quality: 70 });

	return new Blob(
		[
			await buffer
				.resize({ height: lowestSize, width: lowestSize, fit: "inside", withoutEnlargement: true })
				.toBuffer(),
		],
		{ type: mediaType },
	);
}

interface PostOptions {
	createdAt: string;
	text: string;
	attachments: APIAttachment[];
}

export async function post({ createdAt, text, attachments }: PostOptions) {
	let embed = null;

	const video = attachments.find(
		(attachment) =>
			attachment.content_type === "video/mp4" || attachment.content_type === "video/quicktime",
	);

	// Prioritise videos.
	if (video) {
		const blobResponse = await atpAgent.uploadBlob(await (await request(video.url)).body.blob());

		embed = {
			$type: "app.bsky.embed.video",
			video: blobResponse.data.blob,
		};
	} else {
		embed = {
			$type: "app.bsky.embed.images",
			images: await Promise.all(
				attachments.slice(0, 4).map(async (attachment) => {
					const blobResponse = await atpAgent.uploadBlob(
						await compress(
							await (await request(attachment.url)).body.arrayBuffer(),
							attachment.content_type,
						),
					);

					return {
						image: blobResponse.data.blob,
						alt: attachment.description ?? "",
					};
				}),
			),
		};
	}

	const texts = splitText(text);
	const firstText = texts.shift();

	if (!firstText) {
		throw new Error("No text to post.");
	}

	const postData = await atpAgent.post({
		createdAt,
		embed,
		text: firstText,
	});

	let previousPostData = { ...postData };

	for (const textSegment of texts) {
		previousPostData = await atpAgent.post({
			createdAt,
			text: textSegment,
			reply: {
				root: postData,
				parent: previousPostData,
			},
		});
	}

	return postData;
}

interface ParseModalData {
	id: string;
	createdAt: string;
}

export async function parseModal(
	interaction: APIModalSubmitGuildInteraction,
	data: ParseModalData,
) {
	const components = new ModalResolver(interaction.data.components);

	const createdPost = await post({
		createdAt: data.createdAt,
		text: components.getTextInputValue(ANNOUNCE_MODAL_CONTENT_CUSTOM_ID),
		attachments: POST_ATTACHMENTS_CACHE.get(data.id) ?? [],
	});

	const did = createdPost.uri.slice(5, createdPost.uri.indexOf("/", 5));
	const rev = createdPost.uri.slice(createdPost.uri.lastIndexOf("/") + 1);

	await client.api.interactions.reply(interaction.id, interaction.token, {
		content: `https://bsky.app/profile/${did}/post/${rev}`,
		flags: MessageFlags.Ephemeral,
	});

	POST_ATTACHMENTS_CACHE.delete(data.id);
}
