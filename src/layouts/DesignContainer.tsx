import { useContext } from "react";
import ColorLayout from "./ColorDesign/ColorLayout";
import { LayoutDesign } from "./LayoutDesign/LayoutDesign";
import { Display } from "./LayoutDesign/Position/Display";
import { PositionLayout } from "./LayoutDesign/Position/PositionLayout";
import { AppContext } from "../context/AppContext";

export const DesignContainer = () => {
  const { elementId } = useContext(AppContext);
  const element = document.getElementById(elementId);
  const tag = element?.tagName ?? "";

  const tagsNotAllowedForDisplay = ["INPUT", "IMG", "RADIO"];
  return (
    <div>
      <hr className="flex  bg-[#cfcfcf] rounded-full mb-3" />

      <LayoutDesign />
      <hr className="flex  bg-[#cfcfcf] rounded-full mb-3" />
      <PositionLayout />
      <hr className="flex  bg-[#cfcfcf] rounded-full mb-3" />
      {tagsNotAllowedForDisplay.includes(tag) ? null : (
        <>
          <Display />
          <hr className="flex  bg-[#cfcfcf] rounded-full mb-3" />
        </>
      )}

      <ColorLayout />
    </div>
  );
};
