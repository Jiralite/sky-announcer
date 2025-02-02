import { MessageFlags, type Snowflake } from "@discordjs/core";

export const CHARACTER_LIMIT = 300 as const;
export const CHANNEL_REGULAR_EXPRESSION = /<#(?<id>\d{17,20})>/g;

export const CUSTOM_EMOJI_REGULAR_EXPRESSION =
	/<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/g;

export const ERROR_RESPONSE = {
	content: "There was an error! Best report this.",
	components: [],
	embeds: [],
	flags: MessageFlags.SuppressEmbeds | MessageFlags.Ephemeral,
};

// Accurate as of 02/02/2025.
const SKY_CHANNELS = [
	{
		name: "old-𝚛ules",
		id: "575762612147453959",
	},
	{
		name: "news",
		id: "575768778789617674",
	},
	{
		name: "report-a-live-bug",
		id: "575818186440572938",
	},
	{
		name: "screenshots-and-videos",
		id: "575818672476782634",
	},
	{
		name: "completed-sky-fanart-and-creations",
		id: "575819064698470417",
	},
	{
		name: "welcome-center",
		id: "575822274062581790",
	},
	{
		name: "general-sky-discussion",
		id: "575827782144098304",
	},
	{
		name: "seasons-events-chat",
		id: "575827924343848960",
	},
	{
		name: "other-tgc-games",
		id: "575829982526570517",
	},
	{
		name: "old-shep-gen-chat",
		id: "575830785693581322",
	},
	{
		name: "beta-bugs-ios",
		id: "583370511694823424",
	},
	{
		name: "beta-event-testing-discussion",
		id: "583370574449999880",
	},
	{
		name: "sky-music",
		id: "585330441905635341",
	},
	{
		name: "questions-and-help",
		id: "585339436322259003",
	},
	{
		name: "beta-updates",
		id: "585611536358440960",
	},
	{
		name: "beta-looking-for-group",
		id: "587794151408402534",
	},
	{
		name: "wishlist-and-ideas-archived",
		id: "591084195233660959",
	},
	{
		name: "looking-for-group-live",
		id: "591777850726547477",
	},
	{
		name: "sky-memes",
		id: "593565781166391316",
	},
	{
		name: "mod-discussion",
		id: "595354938608189441",
	},
	{
		name: "mod-log",
		id: "595703081426223117",
	},
	{
		name: "eden-spoilers",
		id: "602914067044368405",
	},
	{
		name: "mod-log-2",
		id: "603661530734788618",
	},
	{
		name: "syncs-with-tgc",
		id: "612366840739659816",
	},
	{
		name: "🤖bot-spam",
		id: "618885583330082836",
	},
	{
		name: "beta-screenshots-videos",
		id: "618891214527266846",
	},
	{
		name: "beta-discussion-android",
		id: "620756512117096458",
	},
	{
		name: "beta-bugs-android",
		id: "620772242883739678",
	},
	{
		name: "old-shep-offtopic",
		id: "621847283272515584",
	},
	{
		name: "bug-report-maintenance",
		id: "624265009400250399",
	},
	{
		name: "bug-reports-android",
		id: "624664517946769424",
	},
	{
		name: "known-issues",
		id: "628684058414678026",
	},
	{
		name: "lore-discussion-spoilers",
		id: "632004389137154048",
	},
	{
		name: "promote-your-sky-content",
		id: "632005270393978900",
	},
	{
		name: "skybot-log",
		id: "633299734060204064",
	},
	{
		name: "introductions-archived",
		id: "633390033700913173",
	},
	{
		name: "poll-of-the-week",
		id: "633413765278203944",
	},
	{
		name: "divination-station",
		id: "639617017594511395",
	},
	{
		name: "beta-feedback",
		id: "642982751812845579",
	},
	{
		name: "roles",
		id: "651964305289248778",
	},
	{
		name: "letters-from-the-devs",
		id: "652259556965220383",
	},
	{
		name: "art-museum",
		id: "652749591372103680",
	},
	{
		name: "sky-fanart-sketches-and-art-chat",
		id: "663820121604620359",
	},
	{
		name: "rules",
		id: "670144123088666667",
	},
	{
		name: "swing-screenshot-challenge",
		id: "677253430003367966",
	},
	{
		name: "japanese-bot-testing",
		id: "691302412065177620",
	},
	{
		name: "comms-team-only",
		id: "692110049643855922",
	},
	{
		name: "bot-logs",
		id: "692110117545443349",
	},
	{
		name: "live-feedback",
		id: "692181372969943081",
	},
	{
		name: "beta-known-issues",
		id: "692185451670536202",
	},
	{
		name: "live-feebdack-drobpox",
		id: "693901346600124417",
	},
	{
		name: "beta-feebdack-dropbox",
		id: "693902123213258762",
	},
	{
		name: "android-questions",
		id: "696838813506470013",
	},
	{
		name: "shepherd-candidate-talk",
		id: "717875875760308285",
	},
	{
		name: "beta-faq",
		id: "718595027990741022",
	},
	{
		name: "beta-invites",
		id: "718642521542098974",
	},
	{
		name: "mod-dropbox",
		id: "723200395521818635",
	},
	{
		name: "contact-the-mods",
		id: "723202526802870322",
	},
	{
		name: "tgc-coloring-pages",
		id: "723367597017530509",
	},
	{
		name: "inf-deets",
		id: "761576425504374824",
	},
	{
		name: "skybot-social",
		id: "761580807876902912",
	},
	{
		name: "bug-report-chat",
		id: "766021957812486164",
	},
	{
		name: "cozy-sky-discussion",
		id: "771100831977832448",
	},
	{
		name: "mod-log-3",
		id: "791155832661868574",
	},
	{
		name: "honking-into-the-void",
		id: "850488054979624980",
	},
	{
		name: "🍄switch-faq🍄",
		id: "859182836161314816",
	},
	{
		name: "bug-reports-switch",
		id: "859542532916248576",
	},
	{
		name: "faq",
		id: "898708345916116992",
	},
	{
		name: "rules-draft",
		id: "907765376597770332",
	},
	{
		name: "beta-season-test-chat",
		id: "913093906286125160",
	},
	{
		name: "shepherd-general-chat",
		id: "929165701606944819",
	},
	{
		name: "shepherd-offtopic",
		id: "929174309392510977",
	},
	{
		name: "outfit-requests",
		id: "930875989867761706",
	},
	{
		name: "skycrafting-challenge",
		id: "960613013914808370",
	},
	{
		name: "introductions",
		id: "963877220647051276",
	},
	{
		name: "content-mod-log",
		id: "976279909968273448",
	},
	{
		name: "sky-music-challenge",
		id: "981333620906135602",
	},
	{
		name: "vault-of-socials",
		id: "996895769128882277",
	},
	{
		name: "sky3anniv-emoji-contest",
		id: "998652953265184908",
	},
	{
		name: "skymusic-challenge2",
		id: "1008794178085466202",
	},
	{
		name: "sky-craftingchallenge",
		id: "1018944933941497978",
	},
	{
		name: "sky-stickerchallenge",
		id: "1024437764151845024",
	},
	{
		name: "sky-concert-challenge",
		id: "1045100499155816548",
	},
	{
		name: "bug-reports-playstation",
		id: "1049809802915745882",
	},
	{
		name: "thatskyconcert-challenge",
		id: "1053073223882919976",
	},
	{
		name: "faq-and-rules-drafts",
		id: "1068412593993170964",
	},
	{
		name: "skydaysoflove23",
		id: "1074771274749968484",
	},
	{
		name: "quick-dev-updates",
		id: "1077716001493356574",
	},
	{
		name: "sky-bloompostcard",
		id: "1087448713045225512",
	},
	{
		name: "skynature-scavengerhunt",
		id: "1098048719754109029",
	},
	{
		name: "passage-sticker-challenge",
		id: "1106648070315315372",
	},
	{
		name: "sky-daysofcolor23",
		id: "1113538905271193760",
	},
	{
		name: "beta-memorychallenge",
		id: "1118692261971112006",
	},
	{
		name: "skylandscape-photography",
		id: "1128838974769746023",
	},
	{
		name: "4thanniversary-sticker",
		id: "1128846522453336094",
	},
	{
		name: "skywildlife-photography",
		id: "1134277811377553528",
	},
	{
		name: "beta-bugs-windows-pc",
		id: "1135647548158263437",
	},
	{
		name: "beta-pc-windows-faq",
		id: "1136426175405752320",
	},
	{
		name: "skyphotostill-life",
		id: "1139605160163811419",
	},
	{
		name: "skyphoto-portrait",
		id: "1145845483969974395",
	},
	{
		name: "skyphoto-masterpiece",
		id: "1152381350939209850",
	},
	{
		name: "pc-feebdack-bropdox",
		id: "1158850462284513310",
	},
	{
		name: "pc-feedback",
		id: "1158850655495127130",
	},
	{
		name: "bug-reports-pc",
		id: "1161043024042786918",
	},
	{
		name: "pc-questions",
		id: "1161306187124449392",
	},
	{
		name: "sky-trick-or-treat",
		id: "1166063239646433371",
	},
	{
		name: "misc-drafts",
		id: "1198053520591552664",
	},
	{
		name: "2024-fortunepostcard",
		id: "1200161606315819149",
	},
	{
		name: "sky-drumline-event",
		id: "1204525876515966987",
	},
	{
		name: "2024-daysoflove",
		id: "1206650280716935178",
	},
	{
		name: "sky-deerchallenge",
		id: "1212814219087585300",
	},
	{
		name: "bloom-scavengerhunt",
		id: "1222326138257276989",
	},
	{
		name: "sky-nestchallenge",
		id: "1232449275368308876",
	},
	{
		name: "sky-cinnamorollchallenge",
		id: "1233122604441669682",
	},
	{
		name: "sky-daysofnature24",
		id: "1247255965120725144",
	},
	{
		name: "sky-tournament",
		id: "1270445924245569608",
	},
	{
		name: "sky-duets",
		id: "1283830734771191821",
	},
	{
		name: "sky-darkcreature",
		id: "1298730011267829922",
	},
	{
		name: "skymoomin-scavengerhunt",
		id: "1306337354486648943",
	},
	{
		name: "test-automod-spam-log",
		id: "1309755854165381180",
	},
	{
		name: "skyxalice-wonderland",
		id: "1319438557877895268",
	},
	{
		name: "🐍sky-fortune2025",
		id: "1334577074198937631",
	},
] as const;

export const SKY_CHANNELS_MAP = new Map<Snowflake, string>(
	SKY_CHANNELS.map((channel) => [channel.id, channel.name]),
);

export const FALLBACK_CHANNEL_MENTION = "#channel" as const;
