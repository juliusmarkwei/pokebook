import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { ContextProvider } from "./_context/pokemonContext";
import "./globals.css";

const kanit = Kanit({
	subsets: ["latin"],
	weight: ["200"],
});

export const metadata: Metadata = {
	title: "Pokebook App",
	description: "Check out any Pokemon you want!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={kanit.className}>{children}</body>
		</html>
	);
}
