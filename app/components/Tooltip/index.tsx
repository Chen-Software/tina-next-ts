import { Tooltip as TooltipBase } from "./tooltip";

export const Tooltip = ({ trigger, content, props }: TooltipBase.RootProps) => (
	<TooltipBase.Root {...props}>
		<TooltipBase.Trigger>{trigger}</TooltipBase.Trigger>
		<TooltipBase.Positioner>
			<TooltipBase.Arrow>
				<TooltipBase.ArrowTip />
			</TooltipBase.Arrow>
			<TooltipBase.Content>{content}</TooltipBase.Content>
		</TooltipBase.Positioner>
	</TooltipBase.Root>
);

export * from "./tooltip";
