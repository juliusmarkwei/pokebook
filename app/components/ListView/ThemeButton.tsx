import { useAppContext } from "@/app/_context/pokemonContext";

const ThemeButton = () => {
  const { setShowColorTheme } = useAppContext();
  return (
    <canvas
      onClick={() => setShowColorTheme(true)}
      className="bg-[#E85382] h-[34.81px] w-[34.81px] rounded-[50px]"
    >
      Circle
    </canvas>
  );
};

export default ThemeButton;
