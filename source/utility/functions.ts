import {
	type APIInteraction,
	type APIMessageApplicationCommandInteraction,
	ApplicationCommandType,
	InteractionType,
} from "@discordjs/core";
import { CHARACTER_LIMIT, CUSTOM_EMOJI_REGULAR_EXPRESSION } from "./constants.js";

export function isMessageContextMenuCommand(
	interaction: APIInteraction,
): interaction is APIMessageApplicationCommandInteraction {
	return (
		interaction.type === InteractionType.ApplicationCommand &&
		interaction.data.type === ApplicationCommandType.Message
	);
}

export function splitText(text: string): string[] {
	const parsedText = text.replaceAll(CUSTOM_EMOJI_REGULAR_EXPRESSION, ":$2:");

	if (!parsedText) {
		return [];
	}

	if (!/\s/.test(parsedText)) {
		const chunks: string[] = [];

		for (let i = 0; i < parsedText.length; i += CHARACTER_LIMIT) {
			chunks.push(parsedText.slice(i, i + CHARACTER_LIMIT));
		}

		return chunks;
	}

	const trimmed = parsedText.trim();

	if (trimmed === "") {
		return [];
	}

	if (parsedText.split(/\s+/).filter(Boolean).length === 1) {
		return [trimmed];
	}

	const chunks: string[] = [];
	let remainingText = parsedText;

	while (remainingText.length > 0) {
		if (remainingText.length <= CHARACTER_LIMIT) {
			chunks.push(remainingText);
			break;
		}

		let splitIndex: number = CHARACTER_LIMIT;
		const lastSpace = remainingText.lastIndexOf(" ", CHARACTER_LIMIT);

		if (lastSpace !== -1) {
			splitIndex = lastSpace;

			while (splitIndex > 0 && /\s/.test(remainingText[splitIndex - 1]!)) {
				splitIndex--;
			}
		}

		const chunk = remainingText.slice(0, splitIndex).trimEnd();
		chunks.push(chunk);
		remainingText = remainingText.slice(splitIndex).trimStart();
	}

	if (chunks.length === 1 && chunks[0]!.includes("\n")) {
		const result = chunks[0]!;

		if (result.endsWith("\n")) {
			return [result.trimEnd()];
		}
	}

	return chunks;
}
