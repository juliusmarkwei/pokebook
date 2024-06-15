import { useAppContext } from "@/app/_context/pokemonContext";
import React, { useEffect } from "react";

const ColorTheme = () => {
  const { showColorTheme, setShowColorTheme } = useAppContext();

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
      <div className="modal-box m-0 w-[427px] h-[263px] rounded-[32px] bg-[#EBEBEB] flex flex-col">
        <div className="w-full h-[57px] font-[600] text-[24px] bg-white flex justify-center items-center">
          Choose Theme
        </div>
        <div className="flex flex-row justify-center items-center gap-x-3">
          <span className="h-[74px] w-[74px] bg-[#E85382] rounded-full"></span>
          <span className="h-[74px] w-[74px] bg-[#39BADF] rounded-full"></span>
          <span className="h-[74px] w-[74px] bg-[#E1A725] rounded-full"></span>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ColorTheme;
