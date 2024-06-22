import Image from "next/image";
import _Logo from "@/public/pokemon-3.svg";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import SearchBar from "@/app/components/ListView/SearchBar";
import ThemeButton from "@/app/components/ListView/ThemeButton";
import ColorTheme from "./ColorTheme";
import Link from "next/link";
import { useAppContext } from "@/app/_context";
import { useEffect } from "react";

const TopBar = () => {
	const { theme, showNotFuncMessage, setShowNotFuncMessage } =
		useAppContext();
	const _theme = `${theme}`;

	useEffect(() => {
		setTimeout(() => {
			setShowNotFuncMessage(false);
		}, 6000);
	}, [showNotFuncMessage]);

	return (
		<nav className="h-[80px] w-[100%] bg-white flex flex-row items-center relative">
			<Link href="/" className="cursor-pointer">
				<Image
					src={_Logo}
					alt="pokemon"
					width={129.43}
					height={84}
					priority
					className={`absolute top-[12px] md:left-[39px] left-[15px]`}
				/>
				<h1
					className={`${clashDisplayVariable.className} text-black text-[24px] font-[600] relative left-44 leading-[29.52px] h-[30px] w-[120px]`}
				>
					Poke
					<span className={`text-[#${_theme}]`}>book</span>
				</h1>
			</Link>
			{showNotFuncMessage && (
				<p className="hidden lg:text-red-500 lg:text-[13px] lg:z-50 lg:absolute lg:top-0 lg:left-[610px] lg:flex justify-center items-center">
					Search functionality is not implemented yet 😅
				</p>
			)}
			<div className="hidden border rounded-[30px] border-[#E1E1E1] h-[48px] w-[440px] pt-[12px] pr-[32px] pb-[12px] pl-[20px] ml-[30%] lg:flex flex-row gap-3">
				<SearchBar />
			</div>
			<div className="border w-[45px] h-[45px] rounded-[50px] border-[#868686] cursor-pointer flex flex-col justify-center items-center absolute right-4">
				<ThemeButton />
			</div>
			<ColorTheme />
		</nav>
	);
};

export default TopBar;
