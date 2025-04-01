import { createElement as h } from "react";
import { H1, H2, H3, H4, H5, H6, Heading as HeadingBase } from ".";

export type HeadingProps = {
	__typename: "PageBodyHeading";
	type?: string | null;
	key?: string;
	content?: string | null;
	advancedConfigs?: {
		defaultOpen?: boolean | null;
		lazyMount?: boolean | null;
		unmountOnExit?: boolean | null;
		accessibility?: {
			ariaLabel?: string | null;
		} | null;
	} | null;
};

export const Heading = ({
	__typename,
	type,
	content,
	advancedConfigs,
	...props
}: HeadingProps) => {
	const { accessibility, ...advancedConfigurations } = advancedConfigs || {};

	return h(
		HeadingBase,
		{
			as: {
				h1: H1,
				h2: H2,
				h3: H3,
				h4: H4,
				h5: H5,
				h6: H6,
			}[type || "h1"],
			...accessibility,
			...advancedConfigurations,
			...props,
		},
		content,
	);
};
