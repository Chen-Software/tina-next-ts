/**
 * @type {import('tinacms').Collection}
 */
export default {
	label: "Docs",
	name: "documentation",
	path: "content/documentation",
	fields: [
		{
			type: "string",
			label: "Title",
			name: "title",
		},
		{
			type: "rich-text",
			label: "Documentation Body",
			name: "body",
			isBody: true,
		},
	],
	ui: {
		router: ({ document }) => {
			return `/docs/${document._sys.filename}`;
		},
	},
};
