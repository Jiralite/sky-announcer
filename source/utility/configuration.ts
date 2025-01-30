import process from "node:process";

if (
	!(
		process.env.DISCORD_TOKEN &&
		process.env.APPLICATION_ID &&
		process.env.RECEIVED_ANNOUNCEMENTS_CHANNEL_ID &&
		process.env.SKY_CHILDREN_OF_THE_LIGHT_GUILD_ID &&
		process.env.AT_PROTO_IDENTIFIER &&
		process.env.AT_PROTO_PASSWORD
	)
) {
	throw new Error("Missing environment variables.");
}

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
export const APPLICATION_ID = process.env.APPLICATION_ID;
export const RECEIVED_ANNOUNCEMENTS_CHANNEL_ID = process.env.RECEIVED_ANNOUNCEMENTS_CHANNEL_ID;
export const SKY_CHILDREN_OF_THE_LIGHT_GUILD_ID = process.env.SKY_CHILDREN_OF_THE_LIGHT_GUILD_ID;
export const AT_PROTO_IDENTIFIER = process.env.AT_PROTO_IDENTIFIER;
export const AT_PROTO_PASSWORD = process.env.AT_PROTO_PASSWORD;
