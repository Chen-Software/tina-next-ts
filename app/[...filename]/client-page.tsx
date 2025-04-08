"use client";
import { Button } from "app/components/Button/button.cms";
import { Dialog } from "app/components/Dialog/dialog.cms";
import { Heading } from "app/components/Heading/heading.cms";
import { Link } from "app/components/Link/link.cms";
import { Paragraph } from "app/components/Text/paragraph.cms";
import { Text } from "app/components/Text/text.cms";
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
					case "PageBodyLink":
						return <Link key={`${index}-${block?.__typename}`} {...block} />;
					case "PageBodyParagraph":
						return (
							<Paragraph key={`${index}-${block?.__typename}`} {...block} />
						);
					case "PageBodyButton":
						return <Button key={`${index}-${block?.__typename}`} {...block} />;
				}
			})}
		</Box>
	);
}
