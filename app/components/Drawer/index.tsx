import { Button } from "../Button";
import { Drawer as DrawerBase } from "./drawer";

const defaultCloseTrigger = <Button variant="ghost">✖️</Button>;
const defaultCancelButton = <Button variant="outline">Cancel</Button>;

export const Drawer = ({
	trigger,
	title,
	description,
	content,
	footer = true,
	footerCancelButton = defaultCancelButton,
	closeTrigger = defaultCloseTrigger,
	...props
}: DrawerBase.RootProps) => {
	return (
		<DrawerBase.Root {...props}>
			<DrawerBase.Trigger asChild>{trigger}</DrawerBase.Trigger>
			<DrawerBase.Backdrop />
			<DrawerBase.Positioner>
				<DrawerBase.Content>
					<DrawerBase.Header>
						<DrawerBase.Title>{title}</DrawerBase.Title>
						{description && (
							<DrawerBase.Description>{description}</DrawerBase.Description>
						)}
						<DrawerBase.CloseTrigger
							asChild
							position="absolute"
							top="3"
							right="4"
						>
							{closeTrigger}
						</DrawerBase.CloseTrigger>
					</DrawerBase.Header>
					<DrawerBase.Body>{content}</DrawerBase.Body>
					{footer && (
						<DrawerBase.Footer gap="3">
							{footer}
							<DrawerBase.CloseTrigger asChild>
								{footerCancelButton}
							</DrawerBase.CloseTrigger>
						</DrawerBase.Footer>
					)}
				</DrawerBase.Content>
			</DrawerBase.Positioner>
		</DrawerBase.Root>
	);
};

export * from "./drawer";
