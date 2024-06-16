// import React, { FC, useState } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";
// import { PaginationProps } from "@/app/_types/propTypes";
import { useAppContext } from "@/app/_context";

const Pagination = () => {
  const { selectedPageNumber, setSelectedPageNumber, theme } = useAppContext();

  const handleSelectPage = (index: number) => {
    setSelectedPageNumber(index);
  };

  return (
    <div className="h-[40px] w-[366px] flex flex-row gap-2 justify-between">
      <button
        className={`h-full w-[13%] text-lg font-extrabold bg-[#E1E1E1] rounded-md`}
        onClick={() => handleSelectPage(Math.max(selectedPageNumber - 1, 0))}
      >
        &lt;
      </button>
      {[1, 2, 3, 4].map((page, index) => (
        <button
          key={page}
          onClick={() => handleSelectPage(index)}
          className={`h-full w-[13%] ${clashDisplayVariable.className} ${
            selectedPageNumber === index
              ? `bg-[#${theme}] text-white`
              : "bg-[#E1E1E1]"
          } rounded-md`}
        >
          {page}
        </button>
      ))}
      <span className="h-full w-[13%] text-2xl text-center">...</span>
      <button
        onClick={() => handleSelectPage(11)} // Assuming 11th page is the last page you have
        className={`h-full w-[13%] ${clashDisplayVariable.className} bg-[#E1E1E1] rounded-md`}
      >
        12
      </button>
      <button
        className={`h-full w-[13%] text-lg font-extrabold bg-[#E1E1E1] rounded-md`}
        onClick={() => handleSelectPage(Math.min(selectedPageNumber + 1, 11))}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
