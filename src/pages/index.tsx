import clsx from "clsx";
import { Divider } from "components/divider/Divider";
import { HackathonForm } from "components/form/HackathonForm";
import { Hero } from "components/Hero";
import { Layout } from "components/Layout";
import Link from "next/link";

export default function Page(): React.ReactElement | null {
	return (
		<Layout>
			<Hero />

			{/* <Divider hasSticky /> */}

			<h2
				id="rolunk"
				className="font-bold text-primary text-4xl border-b-8 border-primary mt-8"
				style={{ lineHeight: "1.5rem" }}
			>
				Rólunk
			</h2>

			<p className="border-l-8 border-primary p-4 pb-16 mb-16 text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur.
				<br />
				<br />
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est laborum.
			</p>

			{/* <Divider /> */}

			<div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
				<div>
					<h2
						className="font-bold text-primary text-4xl"
						style={{ lineHeight: "1.5rem" }}
					>
						Hackathon
					</h2>
					<p className="border-l-8 border-b-8 border-primary p-4 pb-16 text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut
						aliquip ex ea commodo consequat.
						<br />
						<br />
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
				<HackathonForm />
			</div>
		</Layout>
	);
}
