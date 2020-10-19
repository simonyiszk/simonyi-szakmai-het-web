import "../styles.css";

import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase/app";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";

import { firebaseConfig } from "../../firebase.config";

export default function MyApp({
	Component,
	pageProps,
}: AppProps): React.ReactElement | null {
	const firebaseSecretConfig = {
		apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
		appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
		messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		...firebaseConfig,
	};
	return (
		<FirebaseDatabaseProvider firebase={firebase} {...firebaseSecretConfig}>
			<ToastProvider placement="top-center" autoDismiss>
				<Component {...pageProps} />
			</ToastProvider>
		</FirebaseDatabaseProvider>
	);
}
