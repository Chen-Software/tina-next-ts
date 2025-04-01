"use client";
import { Button } from "app/components/Button";
import { H1, H2, H3, H4, H5, H6, Heading } from "app/components/Heading";
import { Text } from "app/components/Text";
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
					case "PageBodyHeading": {
						const headingComponent = {
							h1: H1,
							h2: H2,
							h3: H3,
							h4: H4,
							h5: H5,
							h6: H6,
						}[block.type || "h1"];
						return (
							<Heading
								as={headingComponent}
								key={`${index}-${block?.__typename}`}
							>
								{block.content}
							</Heading>
						);
					}
					case "PageBodyText":
						return (
							<Text size={block.size || "md"} fontWeight={block.fontWeight}>
								{block.content}
							</Text>
						);
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
