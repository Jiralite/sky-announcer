import { MessageFlags } from "@discordjs/core";

export const CHARACTER_LIMIT = 300 as const;

export const CUSTOM_EMOJI_REGULAR_EXPRESSION =
	/<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/g;

export const ERROR_RESPONSE = {
	content: "There was an error! Best report this.",
	components: [],
	embeds: [],
	flags: MessageFlags.SuppressEmbeds | MessageFlags.Ephemeral,
};
