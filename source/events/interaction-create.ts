import { GatewayDispatchEvents } from "@discordjs/core";
import { MESSAGE_CONTEXT_MENU_COMMANDS } from "../commands/index.js";
import { client } from "../discord.js";
import { APPLICATION_ID } from "../utility/configuration.js";
import { ERROR_RESPONSE } from "../utility/constants.js";
import { isMessageContextMenuCommand } from "../utility/functions.js";
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
	},
} satisfies Event<typeof name>;
