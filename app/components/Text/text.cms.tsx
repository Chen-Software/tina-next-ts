import { createElement as h } from "react";
import { Text as TextBase } from ".";

export type TextProps = {
	__typename: string;
	key?: string;
	type?: string | null;
	content?: string | null;
	advancedConfigs?: {
		accessibility?: {
			ariaLevel?: number | null;
		} | null;
	} | null;
};

export const Text = ({
	__typename,
	type,
	content,
	advancedConfigs,
	...props
}: TextProps) => {
	const { accessibility, ...advancedConfigurations } = advancedConfigs || {};

	return h(
		TextBase,
		{
			as: {
				inline: "span",
				block: "div",
			}[type || "inline"],
			...(accessibility?.ariaLevel && { role: "heading" }),
			...accessibility,
			...advancedConfigurations,
			...props,
		},
		content,
	);
};
