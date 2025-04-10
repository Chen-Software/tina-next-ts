import { styled } from "@chen/design-system/jsx";
import { type TextVariantProps, text } from "@chen/design-system/recipes";
import type {
	ComponentProps,
	StyledComponent,
} from "@chen/design-system/types";

type TextProps = TextVariantProps & { as?: React.ElementType };

export type HeadingProps = ComponentProps<typeof Heading>;
export const Heading = styled("h2", text, {
	defaultProps: { variant: "heading" },
}) as StyledComponent<"h2", TextProps>;
