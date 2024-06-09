import Link from "next/link";
import Logo from "@/app/_shared/Logo";
import HomeViewDescription from "./components/HomeView/Description";
import SearchBar from "./components/HomeView/SearchBar";

export default function Home() {
	return (
		<main className="bg-white h-dvh w-[100%] flex flex-col items-center">
			<div className="mt-10">
				<Logo height={220} width={300} />
			</div>
			<div className="mt-5 flex flex-col items-center">
				<HomeViewDescription />
			</div>
			<SearchBar />
			<Link href="/pokemon" className="underline text-black mt-5">
				View all
			</Link>
		</main>
	);
}
