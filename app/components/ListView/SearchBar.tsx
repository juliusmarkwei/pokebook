import React from "react";

const SearchBar = () => {
	return (
		<div className="border rounded-[30px] border-[#E1E1E1] h-[48px] w-[440px] absolute top-[17px] left-[500px] pt-[12px] pr-[32px] pb-[12px] pl-[20px] flex flex-row gap-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="size-6 text-gray-500"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
				/>
			</svg>
			<input
				type="text"
				placeholder="Enter pokemon name"
				className="text-[#7B7B7B] focus:outline-none"
			/>
		</div>
	);
};

export default SearchBar;
