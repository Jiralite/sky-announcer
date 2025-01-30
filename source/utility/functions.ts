import {
	type APIInteraction,
	type APIMessageApplicationCommandInteraction,
	ApplicationCommandType,
	InteractionType,
} from "@discordjs/core";
import { CHARACTER_LIMIT } from "./constants.js";

export function isMessageContextMenuCommand(
	interaction: APIInteraction,
): interaction is APIMessageApplicationCommandInteraction {
	return (
		interaction.type === InteractionType.ApplicationCommand &&
		interaction.data.type === ApplicationCommandType.Message
	);
}

export function splitTextInto300(text: string) {
	const segments = [];
	const length = text.length;

	for (let index = 0; index < length; index += CHARACTER_LIMIT) {
		segments.push(text.slice(index, index + CHARACTER_LIMIT));
	}

	return segments;
}
