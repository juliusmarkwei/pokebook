import { useAppContext } from "@/app/_context";
import React, { useEffect } from "react";

const ColorTheme = () => {
  const { showColorTheme, setShowColorTheme, setTheme, theme } =
    useAppContext();

  useEffect(() => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (showColorTheme) {
      modal?.showModal();
    } else {
      modal?.close();
    }

    const handleClose = () => {
      setShowColorTheme(false);
    };

    // Attach an event listener to handle modal close events
    modal?.addEventListener("close", handleClose);

    // Cleanup the event listener when the component unmounts or the dependency changes
    return () => {
      modal?.removeEventListener("close", handleClose);
    };
  }, [showColorTheme, setShowColorTheme]);

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box p-0 w-[400px] h-[250px] rounded-[32px] bg-[#EBEBEB] flex flex-col">
        <div className="w-full h-[67px] font-[600] text-[24px] bg-white flex justify-center items-center">
          Choose Theme
        </div>
        <div className="flex flex-row justify-center items-center h-full gap-5">
          <span
            onClick={() => setTheme("#E85382")}
            className="h-[64px] w-[64px] bg-[#E85382] rounded-full cursor-pointer hover:border hover:ring-2 hover:ring-slate-400 hover:h-[60px] hover:w-[60px] transition-all duration-300 ease-in"
          ></span>
          <span
            onClick={() => setTheme("#39BADF")}
            className="h-[64px] w-[64px] bg-[#39BADF] rounded-full cursor-pointer hover:border hover:ring-2 hover:ring-slate-400 hover:h-[60px] hover:w-[60px] transition-all duration-300 ease-in"
          ></span>
          <span
            onClick={() => setTheme("#E1A725")}
            className="h-[64px] w-[64px] bg-[#E1A725] rounded-full cursor-pointer hover:border hover:ring-2 hover:ring-slate-400 hover:h-[60px] hover:w-[60px] transition-all duration-300 ease-in"
          ></span>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ColorTheme;
