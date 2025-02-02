import { expect, test } from "vitest";
import { cleanDiscordContent } from "../source/utility/functions.js";

const CUSTOM_EMOJI = "<:emoji:123456789012345678>";
const ANIMATED_CUSTOM_EMOJI = "<a:emoji:123456789012345678>";
const CHANNEL_MENTION = "<#575768778789617674>";
const ROLE_MENTION = "<@&575764424304885760>";

test("Custom emojis are replaced with their names.", () => {
	expect(cleanDiscordContent(CUSTOM_EMOJI)).toStrictEqual(":emoji:");
	expect(cleanDiscordContent(ANIMATED_CUSTOM_EMOJI)).toStrictEqual(":emoji:");
});

test("Channel mentions are replaced with their names.", () => {
	expect(cleanDiscordContent(CHANNEL_MENTION)).toStrictEqual("#news");
	expect(cleanDiscordContent("<#123456789012345678>")).toStrictEqual("#channel");
});

test("Role mentions are replaced with their names.", () => {
	expect(cleanDiscordContent(ROLE_MENTION)).toStrictEqual("@TGC Community Dev");
	expect(cleanDiscordContent("<@&123456789012345678>")).toStrictEqual("@role");
});
