import { client, gateway } from "./discord.js";
import events, { type Event } from "./events/index.js";

for (const event of events) {
	const { name, once, fire }: Event = event;
	client[once ? "once" : "on"](name, fire);
}

void gateway.connect();
