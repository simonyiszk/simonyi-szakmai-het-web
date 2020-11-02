import Head from "next/head";

import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

export type LayoutProps = {
	children: React.ReactNode;
};

export function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Simonyi Szakmai Hét</title>
				<meta name="color-scheme" content="dark light" />
			</Head>

			<Navbar />

			<main className="container flex flex-col flex-1 px-4 mx-auto mb-16">
				{children}
			</main>

			<Footer />
		</>
	);
}
