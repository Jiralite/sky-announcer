import { MessageFlags } from "@discordjs/core";

export const CHARACTER_LIMIT = 300 as const;

export const ERROR_RESPONSE = {
	content: "There was an error! Best report this.",
	components: [],
	embeds: [],
	flags: MessageFlags.SuppressEmbeds | MessageFlags.Ephemeral,
};
