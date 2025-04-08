import { createElement as h } from "react";
import { Link as LinkBase } from ".";
import { TextBase } from "../Text/text.cms";

export type LinkProps = {
	__typename: string;
	key?: string;
	type?: string | null;
	label?: string | null;
	content?: string | null;
};

export const Link = ({ __typename, type, label, ...props }: LinkProps) => {
	return h(TextBase, {
		as: ({ children, ...p }) => h(LinkBase, { as: type, ...p }, children),
		content: label,
		...props,
	});
};
