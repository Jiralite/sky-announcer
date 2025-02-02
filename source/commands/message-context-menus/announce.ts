import {
	type APIMessageApplicationCommandInteraction,
	ComponentType,
	TextInputStyle,
} from "@discordjs/core";
import { POST_ATTACHMENTS_CACHE } from "../../caches/post-attachments.js";
import { client } from "../../discord.js";
import { cleanDiscordContent } from "../../utility/functions.js";
import {
	ANNOUNCE_MODAL_CONTENT_CUSTOM_ID,
	CustomIdType,
	schemaStore,
} from "../../utility/string-store.js";

export default {
	name: "Announce",
	async messageContextMenu(interaction: APIMessageApplicationCommandInteraction) {
		const message = interaction.data.resolved.messages[interaction.data.target_id]!;
		POST_ATTACHMENTS_CACHE.set(message.id, message.attachments);

		await client.api.interactions.createModal(interaction.id, interaction.token, {
			title: "Announce",
			custom_id: schemaStore.serialize(CustomIdType.AnnounceModal, {
				id: message.id,
				createdAt: new Date(message.timestamp).toISOString(),
			}),
			components: [
				{
					type: ComponentType.ActionRow,
					components: [
						{
							type: ComponentType.TextInput,
							label: "Amend content if neccessary.",
							custom_id: ANNOUNCE_MODAL_CONTENT_CUSTOM_ID,
							style: TextInputStyle.Paragraph,
							max_length: 4000,
							min_length: 0,
							placeholder: "The content here will be posted.",
							value: cleanDiscordContent(message.content),
							required: false,
						},
					],
				},
			],
		});
	},
} as const;
