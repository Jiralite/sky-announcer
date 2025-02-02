import { expect, test } from "vitest";
import { cleanDiscordContent } from "../source/utility/functions.js";

const CUSTOM_EMOJI = "<:emoji:123456789012345678>";
const ANIMATED_CUSTOM_EMOJI = "<a:emoji:123456789012345678>";
const CHANNEL_MENTION = "<#575768778789617674>";
const ROLE_MENTION = "<@&575764424304885760>";

test("Custom emojis are replaced with their names.", () => {
	expect(cleanDiscordContent(CUSTOM_EMOJI)).toBe(":emoji:");
	expect(cleanDiscordContent(ANIMATED_CUSTOM_EMOJI)).toBe(":emoji:");
});

test("Channel mentions are replaced with their names.", () => {
	expect(cleanDiscordContent(CHANNEL_MENTION)).toBe("#news");
	expect(cleanDiscordContent("<#123456789012345678>")).toBe("#channel");
});

test("Role mentions are replaced with their names.", () => {
	expect(cleanDiscordContent(ROLE_MENTION)).toBe("@TGC Community Dev");
	expect(cleanDiscordContent("<@&123456789012345678>")).toBe("@role");
});

test("Timestamp markdown is replaced.", () => {
	expect(cleanDiscordContent("<t:11:t>")).toBe("<t:11:t>");

	expect(cleanDiscordContent("<t:144444444444444444444444444444444444444441:t>")).toBe(
		"<t:144444444444444444444444444444444444444441:t>",
	);

	expect(cleanDiscordContent("<t:1738505848>")).toBe("February 2, 2025 at 6:17 AM");
	expect(cleanDiscordContent("<t:1738505848:t>")).toBe("6:17 AM");
	expect(cleanDiscordContent("<t:1738505848:T>")).toBe("6:17:28 AM");
	expect(cleanDiscordContent("<t:1738505848:d>")).toBe("2/2/25");
	expect(cleanDiscordContent("<t:1738505848:D>")).toBe("February 2, 2025");
	expect(cleanDiscordContent("<t:1738505848:f>")).toBe("February 2, 2025 at 6:17 AM");
	expect(cleanDiscordContent("<t:1738505848:F>")).toBe("Sunday, February 2, 2025 at 6:17 AM");
	expect(cleanDiscordContent("<t:1738505848:R>")).toBe("2/2/25, 6:17 AM");
});
