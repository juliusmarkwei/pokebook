import React, { useState, useEffect, useRef } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import { useAppContext } from "@/app/_context";

const PageSizeSelector = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { pageSize, setPageSize, setSelectedPageNumber } = useAppContext();

	const handlePageSizeChange = (size: number) => {
		setPageSize(size);
		setShowDropDown(false);
		setSelectedPageNumber(0);
	};

	const handleShowDropDown = () => {
		setShowDropDown(!showDropDown);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setShowDropDown(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			className="w-[70px] h-[40px] lg:w-[95px] bg-[#E1E1E1] rounded-md py-1 lg:py-0 px-2 flex flex-row items-center gap-2 relative"
			ref={dropdownRef}
		>
			<h1
				className={`flex-grow ${clashDisplayVariable.className} lg:text-lg rounded-md bg-white lg:h-[80%] text-center pt-1`}
			>
				{pageSize}
			</h1>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="w-4 h-4 cursor-pointer"
				onClick={handleShowDropDown}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 8.25l-7.5 7.5-7.5-7.5"
				/>
			</svg>
			<div
				className={`absolute top-10 left-0 w-[95px] bg-white rounded-md flex flex-col items-center gap-2 transition-color duration-500 ${
					showDropDown
						? "opacity-100 transform translate-y-0"
						: "opacity-0 transform -translate-y-2 pointer-events-none"
				}`}
			>
				{[12, 16, 24].map((size) => (
					<h1
						key={size}
						className={`flex-grow ${clashDisplayVariable.className} text-lg rounded-md bg-white h-[90%] text-center hover:bg-[#E1E1E1] w-[99%] cursor-pointer`}
						onClick={() => handlePageSizeChange(size)}
					>
						{size}
					</h1>
				))}
			</div>
		</div>
	);
};

export default PageSizeSelector;
