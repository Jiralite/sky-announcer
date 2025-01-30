import { Blob } from "node:buffer";
import type { APIAttachment } from "@discordjs/core";
import sharp from "sharp";
import { request } from "undici";
import { atpAgent } from "../at-proto.js";
import { splitTextInto300 } from "../utility/functions.js";

interface PostOptions {
	createdAt: string;
	text: string;
	attachments: APIAttachment[];
}

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

	const texts = splitTextInto300(text);
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
