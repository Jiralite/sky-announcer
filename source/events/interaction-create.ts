import { GatewayDispatchEvents } from "@discordjs/core";
import { MESSAGE_CONTEXT_MENU_COMMANDS } from "../commands/index.js";
import { client } from "../discord.js";
import { parseModal } from "../features/bluesky.js";
import { APPLICATION_ID } from "../utility/configuration.js";
import { ERROR_RESPONSE } from "../utility/constants.js";
import { isGuildModalSubmit, isMessageContextMenuCommand } from "../utility/functions.js";
import { CustomIdType, schemaStore } from "../utility/string-store.js";
import type { Event } from "./index.js";

const name = GatewayDispatchEvents.InteractionCreate;

export default {
	name,
	async fire({ data }) {
		if (isMessageContextMenuCommand(data)) {
			const command = MESSAGE_CONTEXT_MENU_COMMANDS.find(({ name }) => name === data.data.name);

			if (!command) {
				console.log("Received an unknown user context menu command interaction.", data);
				await client.api.interactions.reply(data.id, data.token, ERROR_RESPONSE);
				return;
			}

			try {
				await command.messageContextMenu(data);
			} catch (error) {
				console.log(error);
				await client.api.interactions.followUp(APPLICATION_ID, data.token, ERROR_RESPONSE);
			}

			return;
		}

		if (isGuildModalSubmit(data)) {
			const customId = data.data.custom_id;

			try {
				const schema = schemaStore.deserialize(customId);

				if (schema.id === CustomIdType.AnnounceModal) {
					await parseModal(data, schema.data);
					return;
				}
			} catch (error) {
				console.log(error);
				await client.api.interactions.followUp(APPLICATION_ID, data.token, ERROR_RESPONSE);
			}

			console.log("Received an unknown modal interaction.", data);
			await client.api.interactions.reply(data.id, data.token, ERROR_RESPONSE);
		}
	},
} satisfies Event<typeof name>;
