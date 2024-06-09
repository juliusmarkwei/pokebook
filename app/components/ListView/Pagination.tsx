import React, { FC } from "react";

interface PaginationProps {
	selected?: boolean[];
}

const Pagination: FC<PaginationProps> = ({ selected }) => {
	return (
		<div className="h-[40px] w-[366px] border flex flex-row gap-2 justify-between">
			<button
				className={`h-full w-[13%] text-lg bg-[#E1E1E1] rounded-md`}
			>
				&lt;
			</button>
			<button
				className={`h-full w-[13%] text-lg bg-[#E85382] text-white rounded-md`}
			>
				1
			</button>
			<button
				className={`h-full w-[13%] text-lg bg-[#E1E1E1] rounded-md`}
			>
				2
			</button>
			<button
				className={`h-full w-[13%] text-lg bg-[#E1E1E1] rounded-md`}
			>
				3
			</button>
			<button
				className={`h-full w-[13%] text-lg bg-[#E1E1E1] rounded-md`}
			>
				4
			</button>
			<span className="h-full w-[13%] text-2xl text-center">...</span>
			<button
				className={`h-full w-[13%] text-lg bg-[#E1E1E1] rounded-md`}
			>
				12
			</button>
			<button
				className={`h-full w-[13%] text-lg bg-[#E1E1E1] rounded-md`}
			>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
