import { Hero } from "components/Hero";
import { Layout } from "components/Layout";
import { About } from "components/sections/About";
import React from "react";

import Sicontact from "../assets/logos/sicontact.svg";

export default function Page(): JSX.Element {
	return (
		<Layout>
			<Hero />

			<About />
			<div className="w-full">
				<h2
					className="font-bold text-primary text-4xl sm:leading-6"
					style={{ marginLeft: "-1px" }}
				>
					Támogató
				</h2>
				<p
					className="border-l-8 border-primary p-4 pb-16 text-lg relative"
					style={{
						borderLeftWidth: "7px",
					}}
				>
					<img src={Sicontact} alt="Sicontact logo" className="h-12 m-auto" />
				</p>
			</div>
		</Layout>
	);
}
