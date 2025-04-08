import { createElement as h } from "react";
import { Link as LinkBase } from ".";
import { TextBase } from "../Text/text.cms";

export type LinkProps = {
	__typename: string;
	key?: string;
	type?: string | null;
	label?: string | null;
	href?: string | null;
	content?: string | null;
};

export const Link = ({ __typename, type, label, ...props }: LinkProps) => {
	return h(TextBase, {
		as: ({ children, href, ...p }) =>
			h(LinkBase, { as: type, href: href || "", ...p }, children),
		content: label,
		...props,
	});
};
