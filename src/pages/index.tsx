import clsx from "clsx";
import { Divider } from "components/divider/Divider";
import { Hero } from "components/Hero";
import { Layout } from "components/Layout";
import { About } from "components/sections/About";
import { Hackathon } from "components/sections/Hackathon";
import { MiniKonf } from "components/sections/MiniKonf";
import { SzakmaiEst } from "components/sections/SzakmaiEst";
import Link from "next/link";
import React from "react";

export default function Page(): React.ReactElement | null {
	return (
		<Layout>
			<Hero />

			<Divider hasSticky />

			<About />

			<Hackathon />

			<SzakmaiEst />

			<MiniKonf />
		</Layout>
	);
}
