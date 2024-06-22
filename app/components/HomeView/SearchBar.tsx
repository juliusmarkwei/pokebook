import Link from "next/link";
import { useAppContext } from "@/app/_context";

const SearchBar = () => {
	const { theme } = useAppContext();

	return (
		<>
			<div
				className={`flex gap-5 items-center border-[8px] rounded-[60px] border-[#${theme}] md:w-[536px] h-[81px] w-full text-[24px] p-3 md:py-[8px] md:pl-[20px] md:pr-[9px] mt-[80px]`}
			>
				<input
					type="text"
					placeholder="Enter pokemon name"
					className="focus:outline-none text-[#7B7B7B] text-base md:text-[24px] bg-transparent w-full h-[100%]"
				/>
				<Link
					href="/pokemon"
					className={`h-[40px] w-[40px] p-[10px] bg-[#${theme}] rounded-[50%]`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-6 text-white cursor-pointer"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				</Link>
			</div>
		</>
	);
};

export default SearchBar;
