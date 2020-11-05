import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Logo from "../../assets/logos/simonyi_szakmai_het_feher.png";

export function Navbar(): JSX.Element {
	const [isOpen, toggleIsOpen] = React.useState(false);
	const router = useRouter();
	console.log(router.pathname);

	return (
		<header
			className={clsx(
				"sm:flex sm:justify-between sm:items-center sticky top-0 text-xl z-20",
				isOpen ? "bg-backgroundBlue" : "bg-transparent",
			)}
		>
			<div className="flex items-center justify-between p-0 h-60px">
				<Link href="/">
					<a className="block my-auto p-2 h-full">
						<img className="max-h-full" src={Logo} alt="Logó" />
					</a>
				</Link>
				<div className="sm:hidden">
					<button
						onClick={() => toggleIsOpen(!isOpen)}
						type="button"
						className="block p-2 mr-2 text-gray-500 hover:text-white focus:text-white focus:outline-none"
					>
						<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
							<path
								visibility={isOpen ? "visible" : "hidden"}
								fillRule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
							/>
							<path
								visibility={isOpen ? "hidden" : "visible"}
								fillRule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<nav
				className={clsx(
					isOpen ? "block bg-backgroundBlue" : "hidden bg-transparent",
					"px-2 flex sm:flex sm:p-0 absolute flex-col sm:flex-row sm:relative w-full items-center justify-end sm:w-fitContent z-20",
				)}
			>
				<Link href="/hackathon">
					<a
						className={clsx(
							"p-4 py-2 sm:py-1 hover:text-text focus:text-text",
							router.pathname === "/hackathon" ? "text-white" : "text-gray-400",
							"border-b-2 sm:border-b-0 sm:border-r-2 border-text",
						)}
					>
						Hackathon
					</a>
				</Link>
				<Link href="/szakmaiest">
					<a
						className={clsx(
							"p-4 py-2 sm:py-1 hover:text-text focus:text-text",
							router.pathname === "/szakmaiest"
								? "text-white"
								: "text-gray-400",
							"border-b-2 sm:border-b-0 sm:border-r-2 border-text",
						)}
					>
						Szakmai e-Est
					</a>
				</Link>
				<Link href="/minikonf">
					<a
						className={clsx(
							"p-4 py-2 sm:py-1 hover:text-text focus:text-text",
							router.pathname === "/minikonf" ? "text-white" : "text-gray-400",
						)}
					>
						Minikonferencia
					</a>
				</Link>
			</nav>
		</header>
	);
}
