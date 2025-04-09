import { dialog } from "app/components/Dialog/dialog.template";
import { heading } from "app/components/Heading/heading.template";
import { stack } from "app/components/Stack/stack.template";
import { paragraph } from "app/components/Text/paragraph.template";
import { text } from "app/components/Text/text.template";
import { toggleGroup } from "app/components/ToggleGroup/toggle-group.template";
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
