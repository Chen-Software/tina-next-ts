import { Accordion } from "./accordion";

export const Demo = (props: Accordion.RootProps) => {
	const items = ["React", "Solid", "Svelte", "Vue"];
	return (
		<Accordion.Root defaultValue={["React"]} multiple {...props}>
			{items.map((item, id) => (
				<Accordion.Item
					key={`${id}-${item}`}
					value={item}
					disabled={item === "Svelte"}
				>
					<Accordion.ItemTrigger>
						{item}
						<Accordion.ItemIndicator>{"V"}</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
					<Accordion.ItemContent>
						Pudding donut gummies chupa chups oat cake marzipan biscuit tart.
						Dessert macaroon ice cream bonbon jelly. Jelly topping tiramisu
						halvah lollipop.
					</Accordion.ItemContent>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);
};

export * from "./accordion";
