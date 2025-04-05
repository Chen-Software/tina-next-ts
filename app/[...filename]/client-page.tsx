"use client";
import { Button } from "app/components/Button";
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
						return (
							<Dialog
								key={`${index}-${block?.__typename}`}
								variant={block.variant}
								title={block.title}
								description={block.description}
								trigger={
									block.trigger && (
										<Button
											variant={block.trigger.variant}
											tooltip={block.trigger.tooltip}
										>
											{block.trigger.label}
										</Button>
									)
								}
							/>
						);
					}
					case "PageBodyButton":
						return (
							<Button
								key={`${index}-${block?.__typename}`}
								variant={block.variant}
								tooltip={block.tooltip}
							>
								{block.label}
							</Button>
						);
				}
			})}
		</Box>
	);
}
