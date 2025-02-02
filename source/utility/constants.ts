import { MessageFlags, type Snowflake } from "@discordjs/core";

export const CHARACTER_LIMIT = 300 as const;
export const CHANNEL_REGULAR_EXPRESSION = /<#(?<id>\d{17,20})>/g;
export const ROLE_REGULAR_EXPRESSION = /<@&(?<id>\d{17,20})>/g;

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

const SKY_ROLES = [
	{
		name: "@everyone",
		id: "575762611111592007",
	},
	{
		name: "TGC Community Dev",
		id: "575764424304885760",
	},
	{
		name: "thatgamecompany Staff",
		id: "575764806481477633",
	},
	{
		name: "Community Shepherds",
		id: "575765523682426901",
	},
	{
		name: "Child of Light",
		id: "575766801779130368",
	},
	{
		name: "Bots",
		id: "575856817092034561",
	},
	{
		name: "Ascended Child of Light",
		id: "585576447469551620",
	},
	{
		name: "YAGPDB.xyz",
		id: "586301298765201428",
	},
	{
		name: "GearBot",
		id: "598835763244957719",
	},
	{
		name: "Community Moderators",
		id: "600489743716712458",
	},
	{
		name: "Muted",
		id: "600490107472052244",
	},
	{
		name: "Beta Invites (Ping)",
		id: "614235013873139752",
	},
	{
		name: "Winged Moderator",
		id: "621081972533493784",
	},
	{
		name: "thatSkybot",
		id: "624930970398621696",
	},
	{
		name: "🍁",
		id: "647181587401670686",
	},
	{
		name: "🎨 Fan Artist",
		id: "651955991415357440",
	},
	{
		name: "🎵 Sky Musician",
		id: "651956322698526720",
	},
	{
		name: "✏️ Fanfiction Writer",
		id: "651956422447333417",
	},
	{
		name: "🔴 YouTuber",
		id: "651956510615797792",
	},
	{
		name: "🎙️ Streamer",
		id: "651956614374621205",
	},
	{
		name: "🎥 TikToker",
		id: "651956710193496084",
	},
	{
		name: "📸 Instagrammer",
		id: "651956778032168973",
	},
	{
		name: "🐦 Twitter Squad",
		id: "651956903341195300",
	},
	{
		name: "🍍🍕Meme Gang",
		id: "651956962174566400",
	},
	{
		name: "🖼️ Screenshot Connoisseur",
		id: "651957058828238858",
	},
	{
		name: "💡Buff Moth",
		id: "651957101454950401",
	},
	{
		name: "📖 Story & Lore Aficionado",
		id: "651957167858909205",
	},
	{
		name: "👥 Social Butterfly",
		id: "651957243272626177",
	},
	{
		name: "👤 Solo Wanderer",
		id: "651957312260538399",
	},
	{
		name: "👖Cosmetic Collector",
		id: "651957413502648320",
	},
	{
		name: "☁️ Aerial Explorer",
		id: "651957502052925441",
	},
	{
		name: "🦐 Dark Creature Fan",
		id: "651957560936497173",
	},
	{
		name: "👶 Chibi",
		id: "651957664334479380",
	},
	{
		name: "📚 Sky Roleplayer",
		id: "651957734664699929",
	},
	{
		name: "☂️ Season of Lightseekers",
		id: "651957899727339556",
	},
	{
		name: "🙏 Season of Gratitude",
		id: "651957901828685824",
	},
	{
		name: "🎀  Season of Belonging",
		id: "651958220038078504",
	},
	{
		name: "Pink Cape",
		id: "651972409875759125",
	},
	{
		name: "Cyan Cape",
		id: "651972511721848883",
	},
	{
		name: "Navy Cape",
		id: "651972519875575808",
	},
	{
		name: "Purple Cape",
		id: "651972799447040010",
	},
	{
		name: "Red Cape",
		id: "651972870980894720",
	},
	{
		name: "Green Cape",
		id: "651972940488900618",
	},
	{
		name: "Black Cape",
		id: "651973018993557515",
	},
	{
		name: "White Cape",
		id: "651973026375532554",
	},
	{
		name: "Orange Cape",
		id: "651973157258788874",
	},
	{
		name: "Teal Cape",
		id: "651973287437664278",
	},
	{
		name: "Brown Cape",
		id: "651973492065173515",
	},
	{
		name: "Yellow Cape",
		id: "652600663565664267",
	},
	{
		name: "🤖 Android",
		id: "653349351929806869",
	},
	{
		name: "🍎 iOS",
		id: "653349532519628821",
	},
	{
		name: "🛠️ Bug Hunter",
		id: "653349539662659666",
	},
	{
		name: "✨ Tall",
		id: "653350301029629952",
	},
	{
		name: "🐶 Oreo Fan Club",
		id: "653351827038928916",
	},
	{
		name: "Shadow",
		id: "653385349246222343",
	},
	{
		name: "🎨 TGC Artist",
		id: "669374614832676885",
	},
	{
		name: "❄️ Season of Rhythm",
		id: "670415937538752533",
	},
	{
		name: "🛠️ TGC Quality Assurance",
		id: "670417336871682051",
	},
	{
		name: "🎮 TGC Designer",
		id: "670417528702631936",
	},
	{
		name: "💻 TGC Engineer",
		id: "670417891623174184",
	},
	{
		name: "TGC Player Support",
		id: "674424163481419791",
	},
	{
		name: "✨ Season of Enchantment",
		id: "705505358868906015",
	},
	{
		name: "Beta Updates (Ping)",
		id: "718595283113476188",
	},
	{
		name: "🏝️ Season of Sanctuary",
		id: "733499963816018063",
	},
	{
		name: "💠 Season of Prophecy",
		id: "763594069556723732",
	},
	{
		name: "Child of the Bot",
		id: "765989653949579304",
	},
	{
		name: "⛸️ Season of Dreams",
		id: "797203175110213644",
	},
	{
		name: "Not a Krill",
		id: "818924325633654824",
	},
	{
		name: "Totally A Krill",
		id: "818978303243190302",
	},
	{
		name: "A crab",
		id: "819720424992145458",
	},
	{
		name: "Tuna King",
		id: "827341301833531422",
	},
	{
		name: "🎺 Season of Assembly",
		id: "828795829657534474",
	},
	{
		name: "🎮 Nintendo Switch",
		id: "867546215481999400",
	},
	{
		name: "👑 Season of The Little Prince",
		id: "867550456708071424",
	},
	{
		name: "3 Krill in a Trenchcoat",
		id: "872381648421945354",
	},
	{
		name: "A manta",
		id: "901959573974425640",
	},
	{
		name: "A jellyfish",
		id: "901960274754555924",
	},
	{
		name: "A butterfly",
		id: "901960358267326494",
	},
	{
		name: "A shadow",
		id: "901960767119704064",
	},
	{
		name: "A bird",
		id: "901960866226913340",
	},
	{
		name: "A cosmic manta",
		id: "901964236396314645",
	},
	{
		name: "🕊️ Season of Flight",
		id: "902073129248116776",
	},
	{
		name: "A spirit",
		id: "902293337028055111",
	},
	{
		name: "A moth",
		id: "902294230679048222",
	},
	{
		name: "Oreo",
		id: "902295610454069378",
	},
	{
		name: "A buff moth",
		id: "902297335743279174",
	},
	{
		name: "An elder bird",
		id: "902307770815119370",
	},
	{
		name: "A weasel",
		id: "902311536125673503",
	},
	{
		name: "A koi fish",
		id: "902321584159723560",
	},
	{
		name: "A candle",
		id: "902327931680989285",
	},
	{
		name: "A Rhythm Guide",
		id: "902330765352783912",
	},
	{
		name: "A krilled skykid",
		id: "902346221665005629",
	},
	{
		name: "A Flight Guide",
		id: "902369136468959242",
	},
	{
		name: "A Prophecy Guide",
		id: "902418537832906752",
	},
	{
		name: "A thatskybot",
		id: "902434147916709928",
	},
	{
		name: "A pair of pants",
		id: "902446961414770728",
	},
	{
		name: "A Gratitude Guide",
		id: "902455240404647948",
	},
	{
		name: "A bean",
		id: "902462040596164619",
	},
	{
		name: "Just a fish",
		id: "902616235005583400",
	},
	{
		name: "A Dreams Skater",
		id: "902648539014893680",
	},
	{
		name: "A bunny",
		id: "903083512951869530",
	},
	{
		name: "A frog",
		id: "903157404957548564",
	},
	{
		name: "⚓ Season of Abyss",
		id: "931453857240870932",
	},
	{
		name: "🎭 Season of Performance",
		id: "959509376257912934",
	},
	{
		name: "A Performance Guide",
		id: "965759873935609916",
	},
	{
		name: "🌋Season of Shattering",
		id: "998670730155786330",
	},
	{
		name: "🐟 Sardine",
		id: "1007107528074743889",
	},
	{
		name: "🎤 Season of AURORA",
		id: "1030621699579854910",
	},
	{
		name: "thatskybotid",
		id: "1039326614955249828",
	},
	{
		name: "🕹️ Playstation",
		id: "1051014910143889458",
	},
	{
		name: "oh wow",
		id: "1055204648966951012",
	},
	{
		name: "love",
		id: "1055204680101281834",
	},
	{
		name: "star",
		id: "1055345826962100294",
	},
	{
		name: "Child of Burger",
		id: "1080281570600030239",
	},
	{
		name: "🧸 Season of Remembrance",
		id: "1080324371115163648",
	},
	{
		name: "🐻 Season of Passage",
		id: "1102709780952383629",
	},
	{
		name: "Steam PC Beta Updates (Ping)",
		id: "1130675053508435968",
	},
	{
		name: "📷 Season of Moments",
		id: "1135672699163783330",
	},
	{
		name: "✨",
		id: "1159675290793033818",
	},
	{
		name: "⛲ Season of Revival",
		id: "1170145821250048021",
	},
	{
		name: "🦌 Season of the Nine-Colored Deer",
		id: "1198051921982914662",
	},
	{
		name: "🚙 Sky Uber",
		id: "1199511353812078732",
	},
	{
		name: "💻 PC",
		id: "1199541712905846844",
	},
	{
		name: "#2 Peas Fan",
		id: "1224763627027042485",
	},
	{
		name: "SKYBOTS RIDDLE CHAMPION",
		id: "1229304111783219240",
	},
	{
		name: "Team Daylight Prairie",
		id: "1267337444270018632",
	},
	{
		name: "Team Hidden Forest",
		id: "1267337682741100577",
	},
	{
		name: "Team Valley of Triumph",
		id: "1267337894910234736",
	},
	{
		name: "Team Golden Wasteland",
		id: "1267338016083546112",
	},
	{
		name: "🏠 Season of Nesting",
		id: "1276686264048947210",
	},
	{
		name: "🎶 Season of Duets",
		id: "1276687455830937723",
	},
	{
		name: "📖 Season of Moomin",
		id: "1276689114963513347",
	},
	{
		name: "Sky Creator Troupe",
		id: "1285784018763386910",
	},
	{
		name: "Quoth the Raven!",
		id: "1299231901659299882",
	},
	{
		name: "SkyAffogata",
		id: "1300572225501528079",
	},
	{
		name: "🧣Season of Radiance",
		id: "1313937131873501205",
	},
	{
		name: "#1 Pickle Lover",
		id: "1334982433916977326",
	},
];

export const SKY_ROLES_MAP = new Map<Snowflake, string>(
	SKY_ROLES.map((role) => [role.id, role.name]),
);

export const FALLBACK_ROLE_MENTION = "@role" as const;
