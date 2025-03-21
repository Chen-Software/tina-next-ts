"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
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
			<TinaMarkdown content={content} />
		</Box>
	);
}
