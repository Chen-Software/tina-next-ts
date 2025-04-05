import { Stack } from "styled-system/jsx";
import { Button } from "../Button";
import { Dialog as DialogBase } from "./dialog";

const defaultConfirmButton = <Button>Confirm</Button>;
const defaultCancelButton = <Button variant="outline">Cancel</Button>;

export const Dialog = ({
	trigger,
	title,
	description,
	confirmButton = defaultConfirmButton,
	cancelButton = defaultCancelButton,
	lazyMount = true,
	...props
}: DialogBase.RootProps) => {
	return (
		<DialogBase.Root {...props} lazyMount>
			{trigger && <DialogBase.Trigger asChild>{trigger}</DialogBase.Trigger>}
			<DialogBase.Backdrop />
			<DialogBase.Positioner>
				<DialogBase.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<DialogBase.Title>{title}</DialogBase.Title>
							<DialogBase.Description>{description}</DialogBase.Description>
						</Stack>
						<Stack
							gap="3"
							direction="row"
							width="full"
							justifyContent="flex-end"
						>
							{confirmButton}
							{cancelButton && (
								<DialogBase.CloseTrigger asChild>
									{defaultCancelButton}
								</DialogBase.CloseTrigger>
							)}
						</Stack>
					</Stack>
					<DialogBase.CloseTrigger
						asChild
						position="absolute"
						top="2"
						right="2"
					>
						<Button aria-label="Close" variant="ghost" size="sm">
							{"×"}
						</Button>
					</DialogBase.CloseTrigger>
				</DialogBase.Content>
			</DialogBase.Positioner>
		</DialogBase.Root>
	);
};

export * from "./dialog";
