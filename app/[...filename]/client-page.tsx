"use client";
import { Button } from "@chen/ui-components/cms";
import { Dialog } from "@chen/ui-components/cms";
import { Heading } from "@chen/ui-components/cms";
import { Stack } from "@chen/ui-components/cms";
import { Paragraph } from "@chen/ui-components/cms";
import { Text } from "@chen/ui-components/cms";
import { ToggleGroup } from "@chen/ui-components/cms";
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
					case "PageBodyDialog":
						return <Dialog key={`${index}-${block?.__typename}`} {...block} />;
					case "PageBodyHeading":
						return <Heading key={`${index}-${block?.__typename}`} {...block} />;
					case "PageBodyText":
						return <Text key={`${index}-${block?.__typename}`} {...block} />;
					case "PageBodyParagraph":
						return (
							<Paragraph key={`${index}-${block?.__typename}`} {...block} />
						);
					case "PageBodyButton":
						return <Button key={`${index}-${block?.__typename}`} {...block} />;
					case "PageBodyToggleGroup":
						return (
							<ToggleGroup key={`${index}-${block?.__typename}`} {...block} />
						);
					case "PageBodyStack":
						return <Stack key={`${index}-${block?.__typename}`} {...block} />;
				}
			})}
		</Box>
	);
}
