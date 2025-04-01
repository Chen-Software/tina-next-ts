import { Text as TextBase } from "./text";

export const Paragraph = (props) => (
	<TextBase as="p" {...props}>
		{props?.children}
	</TextBase>
);

export const Text = (props) => (
	<TextBase {...props}>{props?.children}</TextBase>
);

export * from "./text";
