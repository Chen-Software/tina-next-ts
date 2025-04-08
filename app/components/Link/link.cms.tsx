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

export const Link = ({
	__typename,
	type,
	label,
	href,
	...props
}: LinkProps) => {
	const as = ({ children, ...p }) =>
		h(LinkBase, { as: type, href: href || "", ...p }, children);
	return h(TextBase, { as, content: label, ...props });
};
