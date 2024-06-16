import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { ContextProvider } from "./_context";
import "./globals.css";

const sans = Fira_Sans({
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
      <body className={sans.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
