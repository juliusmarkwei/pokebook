/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import Logo from "@/app/_shared/Logo";
import HomeViewDescription from "../components/HomeView/Description";
import SearchBar from "../components/HomeView/SearchBar";
import { useAppContext } from "../_context";
import { useEffect } from "react";

export default function Home() {
	const { showNotFuncMessage, setShowNotFuncMessage } = useAppContext();

	useEffect(() => {
		setTimeout(() => {
			setShowNotFuncMessage(false);
		}, 6000);
	}, [showNotFuncMessage]);

	return (
		<main className="bg-white h-[1024px] w-[100%] sm:px-5 flex flex-col items-center">
			<div className="mt-[160px]">
				<Logo height={248.25} width={382.51} />
			</div>
			<div className="mt-5 flex flex-col items-center">
				<HomeViewDescription />
			</div>
			{showNotFuncMessage && (
				<p className="hidden lg:text-red-500 lg:text-[13px] lg:z-50 lg:absolute lg:top-[600px] lg:left-[550px] lg:flex justify-center items-center">
					Search functionality is not implemented yet 😅
				</p>
			)}
			<div className="w-full px-6 flex justify-center items-center">
				<SearchBar />
			</div>
			<Link href="/pokemon" className="underline text-black mt-10">
				View all
			</Link>
		</main>
	);
}
