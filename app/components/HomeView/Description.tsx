import { clashDisplayVariable } from "@/app/_shared/Constants";
import { useAppContext } from "@/app/_context";

const HomeViewDescription = () => {
  const { theme } = useAppContext();

  return (
    <>
      <h1
        className={`text-[48px] text-black font-[600] leading-[59.04px] ${clashDisplayVariable.className} w-[246px] h-[59px`}
      >
        Poké<span className={`text-[#${theme}] ml-2`}>book</span>
      </h1>
      <p className="text-black leading-[24.3px]">
        Largest Pokémon index with information <br /> about every Pokemon you
        can think of.
      </p>
    </>
  );
};

export default HomeViewDescription;
