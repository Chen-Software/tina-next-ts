"use client";
import { Button } from "packages/ui-components/components/Button/button.cms";
import { Dialog } from "packages/ui-components/components/Dialog/dialog.cms";
import { Heading } from "packages/ui-components/components/Heading/heading.cms";
import { Stack } from "packages/ui-components/components/Stack/stack.cms";
import { Paragraph } from "packages/ui-components/components/Text/paragraph.cms";
import { Text } from "packages/ui-components/components/Text/text.cms";
import { ToggleGroup } from "packages/ui-components/components/ToggleGroup/toggle-group.cms";
import React, { createElement as h } from "react";
import {
  tinaField,
  useTina,
} from "packages/tinacms/packages/tinacms/dist/react";
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
