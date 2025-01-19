// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidatorPlugin from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.lucie.gg/",
	server: {
		port: 3000,
	},
	devToolbar: {
		enabled: false,
	},
	integrations: [
		starlight({
			title: "Lucie Docs",
			logo: {
				src: "./src/assets/Lucie.png"
			},
			description: "Official Documentation for the Lucie Discord bot.",
			social: {
				github: "https://github.com/lucie-on-github/Lucie-Docs",
				patreon: "https://patreon.com/LucieOnPatreon",
				discord: "https://lucie.gg/server",
			},
			editLink: {
				baseUrl: "https://github.com/lucie-on-github/Lucie-Docs/edit/main/"
			},
			plugins: [
				starlightLinksValidatorPlugin(),
			],
			customCss: [
				"./src/fonts/ginto.css",
				"./src/fonts/whitney.css",
				"./src/styles/custom.css",
			],
			sidebar: [
				{ label: "Home", link: "/" },
				{
					label: "Info",
					items: [
						{ label: "Getting started", slug: "info/getting-started" },
						{ label: "FAQ", slug: "info/faq" },
						{ label: "Context menu", slug: "info/context-menu" },
					]
				},
				{
					label: "Commands",
					items: [
						{
							label: "Automation",
							items: [
								{ label: "Translation", slug: "commands/automation/translation" },
								{ label: "Trackers", slug: "commands/automation/trackers" },
								{ label: "Persistent roles", slug: "commands/automation/persistent-roles" },
								{ label: "Auto-reactions", slug: "commands/automation/auto-reactions" },
								{ label: "Reaction-roles", slug: "commands/automation/reaction-roles" },
								{ label: "Auto-roles", slug: "commands/automation/auto-roles" },
								{ label: "Auto-responses", slug: "commands/automation/auto-responses" },
							]
						},
						{
							label: "Moderation",
							items: [
								{ label: "Moderation", slug: "commands/moderation/moderation" },
								{ label: "Tickets", slug: "commands/moderation/tickets" },
								{ label: "Logs", slug: "commands/moderation/logs" },
							]
						},
						{
							label: "Fun",
							items: [
								{ label: "Chat points", slug: "commands/fun/chat-points" },
								{ label: "Games", slug: "commands/fun/games" },
								{ label: "Generators", slug: "commands/fun/generators" },
								{ label: "Media", slug: "commands/fun/media" },
								{ label: "Starboard", slug: "commands/fun/starboard" },
							]
						},
						{ label: "Misc", slug: "commands/misc" },
					],
				},
			],
		}),
	],
});
