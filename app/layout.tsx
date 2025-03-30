import type React from "react";
import { createElement as h } from "react";
import Link from "./components/Link";
import "./styles/globals.css";
import global from "../content/global/index.json";
import { Box } from "../styled-system/jsx";
import { Menu } from "./components/Menu";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return h(
		"html",
		{ lang: "en" },
		<Box
			as="body"
			margin="3rem"
			color={{ base: "token(colors.neutral.950)", _osDark: "white" }}
			backgroundColor={{
				base: "white",
				_osDark: "token(colors.neutral.950)",
			}}
		>
			<Box as="header" fontSize="lg" marginBottom={4}>
				<Link href="/">{global.header.name}</Link>
				<Box
					as="span"
					float="right"
					css={{
						"& > a": {
							textDecoration: "none",
							marginX: 4,
							"&:first-of-type": { marginLeft: 0 },
							"&:last-of-type": { marginRight: 0 },
						},
					}}
				>
					{global.header.nav.map(({ href, label }, i) => [
						h(Link, { key: href, href }, label),
						i === global.header.nav.length - 1 ? "" : " | ",
					])}
				</Box>
			</Box>
			<Menu
				trigger="Trigger Name"
				indicator="->"
				options={[
					{ value: "option1", label: "Option 1" },
					{ value: "option2", label: "Option 2" },
					{ value: "option3", label: "Option 3" },
				]}
			/>
			<main>{children}</main>
		</Box>,
	);
}
