import { AtpAgent } from "@atproto/api";
import { AT_PROTO_IDENTIFIER, AT_PROTO_PASSWORD } from "./utility/configuration.js";

export const atpAgent = new AtpAgent({ service: "https://bsky.social" });

await atpAgent.login({
	identifier: AT_PROTO_IDENTIFIER,
	password: AT_PROTO_PASSWORD,
});
