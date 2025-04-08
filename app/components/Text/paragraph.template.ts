import type { Template } from "tinacms";
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";
import { fontWeight } from "./templates/text.fontWeight.field";
import { fontSize } from "./templates/text.size.field";

export const paragraph: Template = {
	name: "paragraph",
	label: "Paragraph",
	fields: [
		{
			type: "string",
			label: "Content",
			name: "content",
			description: "Main content.",
			ui: {
				component: "textarea",
			},
		},
		fontSize,
		fontWeight,
		{
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the text.",
			ui: {
				component: "group",
			},
			fields: [textEfects, accessibility],
		},
	],
	ui: {
		defaultItem: () => ({
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		}),
	},
};

export const paragraphDefaultItem =
	typeof paragraph.ui?.defaultItem === "function" &&
	paragraph.ui?.defaultItem();
