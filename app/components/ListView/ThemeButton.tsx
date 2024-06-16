import { useAppContext } from "@/app/_context";

const ThemeButton = () => {
  const { setShowColorTheme, theme } = useAppContext();
  return (
    <canvas
      onClick={() => setShowColorTheme(true)}
      className={`bg-[${theme}] h-[34.81px] w-[34.81px] rounded-[50px]`}
    >
      Circle
    </canvas>
  );
};

export default ThemeButton;
