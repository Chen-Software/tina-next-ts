"use client";
import type { Assign } from "@ark-ui/react";
import { ToggleGroup } from "@ark-ui/react/toggle-group";
import {
	type ToggleGroupVariantProps,
	toggleGroup,
} from "@chen/design-system/recipes";
import type {
	ComponentProps,
	HTMLStyledProps,
} from "@chen/design-system/types";
import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(toggleGroup);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
	HTMLDivElement,
	Assign<
		Assign<HTMLStyledProps<"div">, ToggleGroup.RootProviderBaseProps>,
		ToggleGroupVariantProps & { className?: string }
	>
>(ToggleGroup.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
	HTMLDivElement,
	Assign<
		Assign<HTMLStyledProps<"div">, ToggleGroup.RootBaseProps>,
		ToggleGroupVariantProps & { className?: string }
	>
>(ToggleGroup.Root, "root");

export const Item = withContext<
	HTMLButtonElement,
	Assign<HTMLStyledProps<"button">, ToggleGroup.ItemBaseProps>
>(ToggleGroup.Item, "item");

export { ToggleGroupContext as Context } from "@ark-ui/react/toggle-group";
