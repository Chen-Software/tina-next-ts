import { ark } from "@ark-ui/react/factory";
import { styled } from "@chen/design-system/jsx";
import { code } from "@chen/design-system/recipes";
import type { ComponentProps } from "@chen/design-system/types";

export type CodeProps = ComponentProps<typeof Code>;
export const Code = styled(ark.code, code);
