// import { ColorInput } from "@mantine/core";
// import { ColorInput } from "../DesignLayouts/SmallFieldInput";
import { useEffect, useState } from "react";
import { LinearGradient } from "./LinearGradient";
import { RadialGradient } from "./RadialGradient";
import { ConicGradient } from "./ConicGradient";

export const GradientLayout = ({
  element,
}: {
  onChange?: (val: string | number) => void;
  element: HTMLElement;
}) => {
  const [selectedGradient, setSelectedGradient] =
    useState<string>("linear-gradient");
  useEffect(() => {
    if (element !== null) {
      const selected = element.style.backgroundImage.split("(")[0];

      setSelectedGradient(selected);

      return;
    }
  }, [element.style, element]);

  return (
    <div className="flex flex-col gap-1 rounded-md p-1">
      <p className="underline">Gradient (Select Gradient) </p>
      <div className="flex flex-wrap gap-1 text-sm">
        <p
          className={`p-2 rounded-md ${
            selectedGradient === "linear-gradient"
              ? "bg-gray-200"
              : "bg-gray-100"
          } hover:bg-gray-200 cursor-pointer`}
          onClick={() => setSelectedGradient("linear-gradient")}
        >
          Linear Gradient
        </p>
        <p
          className={`p-2 rounded-md ${
            selectedGradient === "radial-gradient"
              ? "bg-gray-200"
              : "bg-gray-100"
          } hover:bg-gray-200 cursor-pointer`}
          onClick={() => setSelectedGradient("radial-gradient")}
        >
          Radial Gradient
        </p>
        <p
          className={`p-2 rounded-md ${
            selectedGradient === "conic-gradient"
              ? "bg-gray-200"
              : "bg-gray-100"
          } hover:bg-gray-200 cursor-pointer`}
          onClick={() => setSelectedGradient("conic-gradient")}
        >
          Conic Gradient
        </p>
      </div>
      <hr />

      {selectedGradient === "linear-gradient" && (
        <LinearGradient element={element} />
      )}
      {selectedGradient === "radial-gradient" && (
        <RadialGradient element={element} />
      )}
      {selectedGradient === "conic-gradient" && (
        <ConicGradient element={element} />
      )}
    </div>
  );
};
