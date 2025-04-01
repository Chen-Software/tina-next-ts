import { dialog } from "app/components/Dialog/dialog.template";
import { heading } from "app/components/Heading/heading.template";
import { text } from "app/components/Text/text.template";
import { button } from "../../app/components/Button/button.template";

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
			templates: [button, heading, text, dialog],
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
