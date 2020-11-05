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
				<meta
					property="og:image"
					content="https://simonyi.bme.hu/szakmaihet/static/images/preview.png"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://simonyi.bme.hu/szakmaihet/" />
				<meta property="og:title" content="Simonyi Szakmai Hét" />
				<meta
					property="og:description"
					content="A Simonyi Szakmai Hét egy több napos online verseny és konferencia."
				/>
			</Head>

			<Navbar />

			<main className="container flex flex-col flex-1 px-4 mx-auto mb-16">
				{children}
			</main>

			<Footer />
		</>
	);
}
