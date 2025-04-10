import { ark } from "@ark-ui/react/factory";
import { styled } from "@chen/design-system/jsx";
import { link } from "@chen/design-system/recipes";
import type { ComponentProps } from "@chen/design-system/types";

export type LinkProps = ComponentProps<typeof Link>;
export const Link = styled(ark.a, link);
