import { Schema, SchemaStore } from "@sapphire/string-store";

export const ANNOUNCE_MODAL_CONTENT_CUSTOM_ID = "ANNOUNCE_MODAL_CONTENT" as const;

export enum CustomIdType {
	AnnounceModal = 0,
}

export const schemaStore = new SchemaStore().add(
	new Schema(CustomIdType.AnnounceModal).string("id").string("createdAt"),
);
