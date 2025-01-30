import type { MappedEvents } from "@discordjs/core";
import interactionCreate from "./interaction-create.js";
import messageCreate from "./message-create.js";

export interface Event<T extends keyof MappedEvents = keyof MappedEvents> {
	name: T;
	once?: boolean;
	fire(this: void, ...parameters: MappedEvents[T]): Promise<void> | void;
}

export default [interactionCreate, messageCreate] as const;
