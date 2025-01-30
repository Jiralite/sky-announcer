import { type APIMessageApplicationCommandInteraction, MessageFlags } from "@discordjs/core";
import { client } from "../../discord.js";
import { post } from "../../services/bluesky.js";
import { APPLICATION_ID } from "../../utility/configuration.js";

export default {
	name: "Announce",
	async messageContextMenu(interaction: APIMessageApplicationCommandInteraction) {
		await client.api.interactions.defer(interaction.id, interaction.token, {
			flags: MessageFlags.Ephemeral,
		});

		const message = interaction.data.resolved.messages[interaction.data.target_id]!;

		const createdPost = await post({
			createdAt: new Date(message.timestamp).toISOString(),
			text: message.content,
			attachments: message.attachments,
		});

		const did = createdPost.uri.slice(5, createdPost.uri.indexOf("/", 5));
		const rev = createdPost.uri.slice(createdPost.uri.lastIndexOf("/") + 1);

		await client.api.interactions.editReply(APPLICATION_ID, interaction.token, {
			content: `https://bsky.app/profile/${did}/post/${rev}`,
			flags: MessageFlags.Ephemeral,
		});
	},
} as const;
