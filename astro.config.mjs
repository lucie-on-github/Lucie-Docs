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
					autogenerate: {
						directory: "info",
					},
				},
				{
					label: "Modules",
					items: [
						{
							label: "Automation",
							autogenerate: {
								directory: "modules/automation",
							},
						},
						{
							label: "Moderation",
							autogenerate: {
								directory: "modules/moderation",
							},
						},
						{
							label: "Fun",
							autogenerate: {
								directory: "modules/fun",
							},
						},
						{
							label: "Misc",
							slug: "modules/misc"
						}
					],
				},
			],
		}),
	],
});
