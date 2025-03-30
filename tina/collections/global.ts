import { TextField } from "app/components/Field";
import { createElement as h } from "react";
import type { Collection } from "tinacms";

const Global: Collection = {
	label: "Global",
	name: "global",
	path: "content/global",
	format: "json",
	ui: {
		global: true,
	},
	fields: [
		{
			type: "object",
			label: "Header",
			name: "header",
			fields: [
				{
					type: "string",
					label: "Name",
					name: "name",
					ui: {
						component: (props) =>
							h(TextField, {
								placeholder: "App Name",
								...props,
							}),
					},
				},
				{
					type: "object",
					label: "Nav Links",
					name: "nav",
					list: true,
					ui: {
						itemProps: (item) => {
							return { label: item?.label };
						},
						defaultItem: {
							href: "home",
							label: "Home",
						},
					},
					fields: [
						{
							type: "string",
							label: "Link",
							name: "href",
						},
						{
							type: "string",
							label: "Label",
							name: "label",
						},
					],
				},
			],
		},
	],
};

export default Global;
