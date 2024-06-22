"use client";

import Link from "next/link";
import Logo from "@/app/_shared/Logo";
import HomeViewDescription from "../components/HomeView/Description";
import SearchBar from "../components/HomeView/SearchBar";

export default function Home() {
	return (
		<main className="bg-white h-[1024px] w-[100%] sm:px-5 flex flex-col items-center">
			<div className="mt-[160px]">
				<Logo height={248.25} width={382.51} />
			</div>
			<div className="mt-5 flex flex-col items-center">
				<HomeViewDescription />
			</div>
			<div className="w-full px-6">
				<SearchBar />
			</div>
			<Link href="/pokemon" className="underline text-black mt-10">
				View all
			</Link>
		</main>
	);
}
