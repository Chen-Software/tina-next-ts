import { button } from "@chen/ui-components/templates";
import { dialog } from "@chen/ui-components/templates";
import { heading } from "@chen/ui-components/templates";
import { stack } from "@chen/ui-components/templates";
import { paragraph } from "@chen/ui-components/templates";
import { text } from "@chen/ui-components/templates";
import { toggleGroup } from "@chen/ui-components/templates";

/**
 * @type {import('tinacms').Collection}
 */
export default {
	label: "Page Content",
	name: "page",
	path: "content/page",
	format: "mdx",
	fields: [
		{
			name: "body",
			label: "Main Content",
			type: "object",
			list: true,
			isBody: true,
			templates: [button, heading, text, paragraph, toggleGroup, dialog, stack],
		},
	],
	ui: {
		router: ({ document }) => {
			if (document._sys.filename === "home") {
				return "/";
			}
			return undefined;
		},
	},
};
