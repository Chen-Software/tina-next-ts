import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import React, { createElement as h } from "react";
import { Link as LinkBase, type LinkProps as LinkBaseProps } from "./link";

const Link = React.forwardRef<LinkProps>(({ ...props }, ref) => {
	return h(
		LinkBase,
		{
			...props,
			asChild: true,
			ref,
		},
		h(NextLink, { ref, ...props }, props.children),
	);
});
Link.displayName = "Link";

export type LinkProps = LinkBaseProps | NextLinkProps;
export default Link;
