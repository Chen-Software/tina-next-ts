import { ark } from "@ark-ui/react/factory";
import { styled } from "@chen/design-system/jsx";
import { button } from "@chen/design-system/recipes";
import type { ComponentProps } from "@chen/design-system/types";

export type ButtonProps = ComponentProps<typeof Button>;
export const Button = styled(ark.button, button);
