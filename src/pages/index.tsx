import { Divider } from "components/divider/Divider";
import { Hero } from "components/Hero";
import { Layout } from "components/Layout";
import { About } from "components/sections/About";
import React from "react";

export default function Page(): JSX.Element {
	return (
		<Layout>
			<Hero />

			<Divider hasSticky />

			<About />
		</Layout>
	);
}
