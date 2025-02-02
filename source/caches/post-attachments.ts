import type { APIAttachment, Snowflake } from "@discordjs/core";

export const POST_ATTACHMENTS_CACHE = new Map<Snowflake, APIAttachment[]>();
