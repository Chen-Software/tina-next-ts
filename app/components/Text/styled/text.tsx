import { styled } from "@chen/design-system/jsx";
import { type TextVariantProps, text } from "@chen/design-system/recipes";
import type {
	ComponentProps,
	StyledComponent,
} from "@chen/design-system/types";

type ParagraphProps = TextVariantProps & { as?: React.ElementType };

export type TextProps = ComponentProps<typeof Text>;
export const Text = styled("p", text) as StyledComponent<"p", ParagraphProps>;
