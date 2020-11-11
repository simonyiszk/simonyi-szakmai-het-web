import clsx from "clsx";
import Link from "next/link";

export function Hero(): JSX.Element {
	return (
		<>
			<div className="relative w-full -z-1">
				<div
					className="fullWidthCenter transform rotate-180 bg-hero-mobile md:bg-hero-pc h-1334px md:h-1080px bg-cover"
					style={{
						backgroundPosition: "center",
						top: "-62px",
					}}
				>
					<img src="static/images/mobile.png" alt="" className="hidden" />
					<img src="static/images/pc.png" alt="" className="hidden" />
				</div>
			</div>

			<div className="h-mobileSpacer md:h-desktopSpacer max-h-280px" />

			<div className="relative block md:hidden w-0">
				<h1
					className="text-5xl uppercase transform -rotate-90 block absolute top-0 left-0 origin-top-left"
					style={{ marginTop: "12.75rem" }}
				>
					Simonyi
				</h1>
			</div>
			<h1 className="text-5xl md:text-7xl uppercase">
				<span className="hidden md:inline">
					Simonyi
					<br />
				</span>
				<div className="pl-12 md:pl-0">
					<span className="text-primary">Szakmai</span>
					<span className="md:hidden">
						<br />
					</span>{" "}
					Hét
				</div>
			</h1>
			<h2 className="pl-12 md:pl-0 text-2xl mb-32 md:mb-8">November 16 - 18</h2>

			<div className="flex flex-col lg:flex-row">
				{/* <Link href="/hackathon">
					<a
						className={clsx(
							"border-primary border-2 p-1 m-4 block mx-auto",
							"w-minContent sm:w-fitContent",
							"animatedButton",
						)}
					>
						<div
							className={clsx(
								"font-bold p-4 text-2xl bg-secondary",
								"w-minContent sm:w-fitContent",
							)}
						>
							Hackathon
						</div>
					</a>
							</Link> */}

				<Link href="/szakmaiest">
					<a
						className={clsx(
							"border-primary border-2 p-1 m-4 block mx-auto",
							"w-minContent sm:w-fitContent",
							"animatedButton",
						)}
					>
						<div
							className={clsx(
								"font-bold p-4 text-2xl bg-secondary",
								"w-minContent sm:w-fitContent",
							)}
						>
							Szakmai e&#8209;Est
						</div>
					</a>
				</Link>

				<Link href="/minikonf">
					<a
						className={clsx(
							"border-primary border-2 p-1 m-4 block mx-auto",
							"w-minContent sm:w-fitContent",
							"animatedButton",
						)}
					>
						<div
							className={clsx(
								"font-bold p-4 text-2xl bg-secondary",
								"w-minContent sm:w-fitContent",
							)}
						>
							Minikonferencia
						</div>
					</a>
				</Link>
			</div>

			<div className="h-desktopSpacer max-h-280px" />
		</>
	);
}
