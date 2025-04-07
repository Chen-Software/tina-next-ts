import { createElement as h } from "react";
import { Heading as HeadingBase, type HeadingProps } from "./heading";

export const Heading = ({ ariaLevel, ...props }: HeadingProps) => {
	return h(
		HeadingBase,
		{
			role: "heading",
			"aria-level": ariaLevel,
			...props,
		},
		props?.children,
	);
};

export const H1 = (props) => (
	<Heading as="h1" size="5xl" {...props}>
		{props?.children}
	</Heading>
);

export const H2 = (props) => (
	<Heading as="h2" size="4xl" {...props}>
		{props?.children}
	</Heading>
);

export const H3 = (props) => (
	<Heading as="h3" size="3xl" {...props}>
		{props?.children}
	</Heading>
);

export const H4 = (props) => (
	<Heading as="h4" size="2xl" {...props}>
		{props?.children}
	</Heading>
);

export const H5 = (props) => (
	<Heading as="h5" size="xl" {...props}>
		{props?.children}
	</Heading>
);

export const H6 = (props) => (
	<Heading as="h6" size="lg" {...props}>
		{props?.children}
	</Heading>
);

export * from "./heading";
