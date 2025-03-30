import { Menu as MenuBase } from "./menu";

export const Menu = ({ trigger, indicator, options }) => (
	<MenuBase.Root>
		<MenuBase.Trigger>
			{trigger} <MenuBase.Indicator>{indicator}</MenuBase.Indicator>
		</MenuBase.Trigger>
		<MenuBase.Positioner>
			<MenuBase.Content border="1px solid black">
				{options.map((option) => (
					<MenuBase.Item key={option.value} value={option.value}>
						{option.label}
					</MenuBase.Item>
				))}
			</MenuBase.Content>
		</MenuBase.Positioner>
	</MenuBase.Root>
);

export * from "./menu";
