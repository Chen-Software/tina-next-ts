import { createElement as h } from "react";
import { Text as TextBase } from ".";
import { Base, type BaseProps } from "../Base/base.cms";

export type TextProps = {
	__typename: string;
	key?: string;
	type?: string | null;
	content?: string | null;
} & BaseProps;

export const Text = ({ __typename, type, ...props }: TextProps) => {
	return h(Base, {
		as: ({ ...p }) =>
			h(TextBase, {
				...(type && {
					as: {
						inline: "span",
						block: "div",
						label: "label",
					}[type],
				}),
				...p,
			}),
		...props,
	});
};
