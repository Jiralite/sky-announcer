import {
	type APIInteraction,
	type APIMessageApplicationCommandInteraction,
	type APIModalSubmitGuildInteraction,
	ApplicationCommandType,
	InteractionType,
	Locale,
	type Snowflake,
} from "@discordjs/core";
import {
	CHANNEL_REGULAR_EXPRESSION,
	CHARACTER_LIMIT,
	CUSTOM_EMOJI_REGULAR_EXPRESSION,
	FALLBACK_CHANNEL_MENTION,
	FALLBACK_ROLE_MENTION,
	ROLE_REGULAR_EXPRESSION,
	SKY_CHANNELS_MAP,
	SKY_ROLES_MAP,
	TIMESTAMP_REGULAR_EXPRESSION,
	TIME_ZONE,
} from "./constants.js";

export function isMessageContextMenuCommand(
	interaction: APIInteraction,
): interaction is APIMessageApplicationCommandInteraction {
	return (
		interaction.type === InteractionType.ApplicationCommand &&
		interaction.data.type === ApplicationCommandType.Message
	);
}

export function isGuildModalSubmit(
	interaction: APIInteraction,
): interaction is APIModalSubmitGuildInteraction {
	return interaction.type === InteractionType.ModalSubmit && "guild_id" in interaction;
}

export function cleanDiscordContent(content: string) {
	return (
		content
			// Extract names of custom emojis.
			.replaceAll(CUSTOM_EMOJI_REGULAR_EXPRESSION, ":$2:")
			// Replace channel mentions with their names.
			.replaceAll(CHANNEL_REGULAR_EXPRESSION, (_, id: Snowflake) => {
				const channel = SKY_CHANNELS_MAP.get(id);
				return channel ? `#${channel}` : FALLBACK_CHANNEL_MENTION;
			})
			// Replace role mentions with their names.
			.replaceAll(ROLE_REGULAR_EXPRESSION, (_, id: Snowflake) => {
				const role = SKY_ROLES_MAP.get(id);
				return role ? `@${role}` : FALLBACK_ROLE_MENTION;
			})
			// Replace timestamp markdown.
			.replaceAll(
				TIMESTAMP_REGULAR_EXPRESSION,
				(_, timestampSeconds: string, style: "t" | "T" | "d" | "D" | "f" | "F" | "R" = "f") => {
					const timestamp = Number(timestampSeconds) * 1000;

					if (style === "t") {
						return Intl.DateTimeFormat(Locale.EnglishUS, {
							timeZone: TIME_ZONE,
							timeStyle: "short",
						}).format(timestamp);
					}

					if (style === "T") {
						return Intl.DateTimeFormat(Locale.EnglishUS, {
							timeZone: TIME_ZONE,
							timeStyle: "medium",
						}).format(timestamp);
					}

					if (style === "d") {
						return Intl.DateTimeFormat(Locale.EnglishUS, {
							timeZone: TIME_ZONE,
							dateStyle: "short",
						}).format(timestamp);
					}

					if (style === "D") {
						return Intl.DateTimeFormat(Locale.EnglishUS, {
							timeZone: TIME_ZONE,
							dateStyle: "long",
						}).format(timestamp);
					}

					if (style === "f") {
						return Intl.DateTimeFormat(Locale.EnglishUS, {
							timeZone: TIME_ZONE,
							dateStyle: "long",
							timeStyle: "short",
						}).format(timestamp);
					}

					if (style === "F") {
						return Intl.DateTimeFormat(Locale.EnglishUS, {
							timeZone: TIME_ZONE,
							dateStyle: "full",
							timeStyle: "short",
						}).format(timestamp);
					}

					// There is no relative time on Bluesky.
					return Intl.DateTimeFormat(Locale.EnglishUS, {
						timeZone: TIME_ZONE,
						dateStyle: "short",
						timeStyle: "short",
					}).format(timestamp);
				},
			)
	);
}

export function splitText(text: string): string[] {
	if (!text) {
		return [];
	}

	if (!/\s/.test(text)) {
		const chunks: string[] = [];

		for (let i = 0; i < text.length; i += CHARACTER_LIMIT) {
			chunks.push(text.slice(i, i + CHARACTER_LIMIT));
		}

		return chunks;
	}

	const trimmed = text.trim();

	if (trimmed === "") {
		return [];
	}

	if (text.split(/\s+/).filter(Boolean).length === 1) {
		return [trimmed];
	}

	const chunks: string[] = [];
	let remainingText = text;

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
