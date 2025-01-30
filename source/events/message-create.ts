import { GatewayDispatchEvents, MessageFlags } from "@discordjs/core";
import { DiscordSnowflake } from "@sapphire/snowflake";
import { post } from "../services/bluesky.js";
import {
	RECEIVED_ANNOUNCEMENTS_CHANNEL_ID,
	SKY_CHILDREN_OF_THE_LIGHT_GUILD_ID,
} from "../utility/configuration.js";
import type { Event } from "./index.js";

const name = GatewayDispatchEvents.MessageCreate;

export default {
	name,
	async fire({ data }) {
		if (
			data.message_reference?.guild_id === SKY_CHILDREN_OF_THE_LIGHT_GUILD_ID &&
			data.channel_id === RECEIVED_ANNOUNCEMENTS_CHANNEL_ID &&
			data.flags &&
			(data.flags & MessageFlags.IsCrosspost) === MessageFlags.IsCrosspost &&
			data.message_reference.message_id
		) {
			await post({
				createdAt: new Date(
					DiscordSnowflake.timestampFrom(data.message_reference.message_id),
				).toISOString(),
				text: data.content,
				attachments: data.attachments,
			});
		}
	},
} satisfies Event<typeof name>;
