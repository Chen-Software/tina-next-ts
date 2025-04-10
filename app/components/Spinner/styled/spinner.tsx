import { ark } from "@ark-ui/react/factory";
import { styled } from "@chen/design-system/jsx";
import { spinner } from "@chen/design-system/recipes";
import type { ComponentProps } from "@chen/design-system/types";

export type SpinnerProps = ComponentProps<typeof Spinner>;
export const Spinner = styled(ark.div, spinner);
