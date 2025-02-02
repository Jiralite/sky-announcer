import { expect, test } from "vitest";
import { CHARACTER_LIMIT } from "../source/utility/constants.js";
import { splitText } from "../source/utility/functions.js";

const textLimit = "a".repeat(CHARACTER_LIMIT);
const doubleTextLimit = textLimit + textLimit;

test("No text returns an empty array.", () => {
	expect(splitText("")).toStrictEqual([]);
});

test("Trimmed text to nothing returns an empty array.", () => {
	expect(splitText(" ".repeat(CHARACTER_LIMIT))).toStrictEqual([]);
});

test("Limit is exactly one post.", () => {
	expect(splitText(textLimit)).toStrictEqual([textLimit]);
});

test("String of characters over the limit should split up.", () => {
	expect(splitText(doubleTextLimit)).toStrictEqual([textLimit, textLimit]);
});

test("Handles multiple spaces correctly.", () => {
	expect(splitText("text    with    spaces")).toStrictEqual(["text    with    spaces"]);
});

test("Preserves newlines.", () => {
	expect(splitText("line1\nline2\nline3")).toStrictEqual(["line1\nline2\nline3"]);
});

test("Splits at word boundaries when possible.", () => {
	const longWord = "a".repeat(CHARACTER_LIMIT);
	const text = `word ${longWord}`;
	expect(splitText(text)).toStrictEqual(["word", longWord]);
});

test("Handles mixed content near limit boundary.", () => {
	const almostLimit = "a".repeat(CHARACTER_LIMIT - 10);
	const text = `${almostLimit} word that pushes over`;
	expect(splitText(text)).toStrictEqual([`${almostLimit} word that`, "pushes over"]);
});

test("Preserves special characters.", () => {
	expect(splitText("Special chars: !@#$%^&*()")).toStrictEqual(["Special chars: !@#$%^&*()"]);
});

test("Handles emoji correctly.", () => {
	expect(splitText("Text with emoji 😀 and more")).toStrictEqual(["Text with emoji 😀 and more"]);
});

test("Leading and trailing spaces are truncated if no words.", () => {
	expect(splitText("     text    ")).toStrictEqual(["text"]);
});
