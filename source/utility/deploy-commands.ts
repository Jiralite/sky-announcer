import {
	API,
	ApplicationCommandType,
	ApplicationIntegrationType,
	InteractionContextType,
	type RESTPutAPIApplicationCommandsJSONBody,
} from "@discordjs/core";
import { REST } from "@discordjs/rest";
import { APPLICATION_ID, DISCORD_TOKEN } from "./configuration.js";

const COMMANDS: RESTPutAPIApplicationCommandsJSONBody = [
	{
		name: "Announce",
		type: ApplicationCommandType.Message,
		integration_types: [ApplicationIntegrationType.UserInstall],
		contexts: [InteractionContextType.Guild],
	},
] as const;

const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);
const api = new API(rest);
console.log("Setting application commands...");

try {
	await api.applicationCommands.bulkOverwriteGlobalCommands(APPLICATION_ID, COMMANDS);
	console.log("Successfully set application commands.");
} catch (error) {
	console.log("Error setting commands.");
	console.log(error);
}
