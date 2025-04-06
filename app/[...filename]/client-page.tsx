"use client";
import { Button } from "app/components/Button/button.cms";
import { Dialog } from "app/components/Dialog";
import React, { createElement as h } from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { Box } from "../../styled-system/jsx";
import type { PageQuery } from "../../tina/__generated__/types";

interface ClientPageProps {
	query: string;
	variables: {
		relativePath: string;
	};
	data: { page: PageQuery["page"] };
}

export default function ClientPage(props: ClientPageProps) {
	// data passes though in production mode and data is updated to the sidebar data in edit-mode
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	const content = data.page.body;
	return (
		<Box data-tina-field={tinaField(data.page, "body")}>
			{content?.map((block, index) => {
				switch (block?.__typename) {
					case "PageBodyDialog": {
						const confirmButton = block.confirmButton && (
							<Button {...block.confirmButton} />
						);
						const cancelButton = block.cancelButton && (
							<Button {...block.cancelButton} />
						);
						const closeButton = block.closeButton && (
							<Button {...block.closeButton} />
						);
						const trigger = block.trigger && <Button {...block.trigger} />;

						return (
							<Dialog
								key={`${index}-${block?.__typename}`}
								title={block.title}
								description={block.description}
								lazyMount={block.lazyMount}
								confirmButton={confirmButton}
								cancelButton={cancelButton}
								closeButton={closeButton}
								trigger={trigger}
							/>
						);
					}

					case "PageBodyButton":
						return <Button key={`${index}-${block?.__typename}`} {...block} />;
				}
			})}
		</Box>
	);
}
