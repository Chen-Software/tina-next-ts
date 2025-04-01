"use client";
import { Button } from "app/components/Button";
import { H1, H2, H3, H4, H5, H6, Heading } from "app/components/Heading";
import { Stack } from "app/components/Stack";
import { Paragraph, Text } from "app/components/Text";
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
					case "PageBodyStack": {
						const pageBlockChildren = block?.children?.map((child, i) => {
							switch (child?.__typename) {
								case "PageBodyStackChildrenHeading": {
									const headingComponent = {
										h1: H1,
										h2: H2,
										h3: H3,
										h4: H4,
										h5: H5,
										h6: H6,
									}[child.type || "h1"];
									return h(
										headingComponent,
										{
											key: `${index}-${i}-${block?.__typename}`,
										},
										child.content,
									);
								}
								case "PageBodyStackChildrenText":
									return (
										<Text
											size={child.size || "md"}
											fontWeight={child.fontWeight}
										>
											{child.content}
										</Text>
									);
								case "PageBodyStackChildrenParagraph":
									return (
										<Paragraph
											size={child.size || "md"}
											fontWeight={child.fontWeight}
										>
											{child.content}
										</Paragraph>
									);
								case "PageBodyStackChildrenButton":
									return (
										<Button
											key={`${index}-${i}-${block?.__typename}`}
											variant={child.variant}
											tooltip={child.tooltip}
										>
											{child.label}
										</Button>
									);
							}
						});
						return (
							<Stack
								key={`${index}-${block?.__typename}`}
								direction={block.direction}
								gap={block.gap}
								backgroundColor="var(--background-color)"
								backgroundImage="var(--background-image)"
								style={{
									"--background-color": block.backgroundColor,
									"--background-image":
										block.backgroundImage && `url(${block.backgroundImage})`,
								}}
							>
								{pageBlockChildren}
							</Stack>
						);
					}
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
					case "PageBodyParagraph":
						return (
							<Paragraph
								size={block.size || "md"}
								fontWeight={block.fontWeight}
							>
								{block.content}
							</Paragraph>
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
