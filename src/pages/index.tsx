import clsx from "clsx";
import { HackathonForm } from "components/form/HackathonForm";
import { Layout } from "components/Layout";
import Link from "next/link";

export default function Page(): React.ReactElement | null {
	return (
		<Layout>
			<div style={{ minHeight: "17vh", height: "17vh" }} />

			<h1 className="text-5xl sm:text-6xl self-start">
				Simonyi
				<br />
				<span className="text-primary">Szakmai</span> Hét
			</h1>
			<h2 className="text-xl self-start">November 13 - 18</h2>

			<Link href="#jelentkezes">
				<a
					className={clsx(
						"font-bold border-primary border-2 p-4 self-start m-4 lg:ml-48 text-2xl",
						"w-minContent sm:w-fitContent",
					)}
					/* style={{ width: "min-content" }} */
				>
					Hackathon jelentkezés
				</a>
			</Link>

			<div style={{ minHeight: "17vh", height: "17vh" }} />

			<div className="w-full relative h-16" style={{ marginBottom: "-1px" }}>
				<div
					className=" bg-primary h-16 fullWidthCenter"
					style={{ clipPath: "polygon(0 1%, 0 100%, 100% 100%)" }}
				/>
			</div>
			<div
				className="w-full h-16 sticky top-0"
				style={{ zIndex: 5, marginTop: "-1px" }}
			>
				<div className="w-full h-16 relative">
					<div className="bg-primary h-16 fullWidthCenter" />
				</div>
			</div>
			<div
				id="rolunk"
				className="w-full relative h-16"
				style={{ marginTop: "-1px" }}
			>
				<div
					className="bg-secondary h-16 fullWidthCenter"
					style={{ clipPath: "polygon(0 1%, 100% 100%, 100% 0)" }}
				/>
			</div>

			<h2 className="font-bold text-primary text-4xl border-b-8 border-primary self-start">
				Rólunk
			</h2>

			<p className="border-l-8 border-primary self-start p-4 pb-16 mb-16 text-lg">
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

			<div className="w-full relative h-16" style={{ marginBottom: "-1px" }}>
				<div
					className=" bg-primary h-16 fullWidthCenter"
					style={{ clipPath: "polygon(0 1%, 0 100%, 100% 100%)" }}
				/>
			</div>
			<div className="w-full h-16">
				<div className="w-full h-16 relative">
					<div className="bg-primary h-16 fullWidthCenter" />
				</div>
			</div>
			<div
				id="rolunk"
				className="w-full relative h-16"
				style={{ marginTop: "-1px" }}
			>
				<div
					className="bg-secondary h-16 fullWidthCenter"
					style={{ clipPath: "polygon(0 1%, 100% 100%, 100% 0)" }}
				/>
			</div>
			<div id="jelentkezes" className="grid w-full">
				<div />
				<HackathonForm />
			</div>
		</Layout>
	);
}
