import type { Template } from "tinacms";

export const heading: Template = {
	name: "heading",
	label: "Heading",
	fields: [
		{
			type: "string",
			label: "Type",
			name: "type",
			options: [
				{
					value: "h1",
					label: "Heading1",
				},
				{
					value: "h2",
					label: "Heading2",
				},
				{
					value: "h3",
					label: "Heading3",
				},
				{
					value: "h4",
					label: "Heading4",
				},
				{
					value: "h5",
					label: "Heading5",
				},
				{
					value: "h6",
					label: "Heading6",
				},
			],
		},
		{
			type: "string",
			label: "Content",
			name: "content",
			description: "Main content.",
		},
	],
};
