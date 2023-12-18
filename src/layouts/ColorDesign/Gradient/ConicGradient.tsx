import { useState } from "react";
import { ColorInput } from "@mantine/core";
import { SmallFieldLayout } from "../../../components/SmallFieldInput";

export const ConicGradient = ({
  element,
}: {
  onChange?: (val: string | number) => void;
  element: HTMLElement;
}) => {
  const [gradientColorCount, setGradientColorCount] = useState<number>(2);

  const [gradients, setGradients] = useState<string[]>(
    Array(gradientColorCount).fill("#000000")
  );

  const onChange = (val: number | string, type: string, index?: number) => {
    if (type === "gradientColor" && index !== undefined) {
      const tempGradients = [...gradients];
      tempGradients[index] = String(val);
      setGradients(tempGradients);

      element.style.backgroundImage = `conic-gradient(
       ${gradients.join(", ")})`;
    }
    if (type === "gradientColorPercentage" && index !== undefined) {
      const tempGradients = [...gradients];

      const temp = tempGradients[index].split(" ");

      temp[1] = `${val}%`;
      tempGradients[index] = temp.join(" ");

      setGradients(tempGradients);

      element.style.backgroundImage = `conic-gradient( ${gradients.join(
        ", "
      )})`;
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-1 rounded-md border border-transparent  p-1 border-box">
        <p>Conic Gradient</p>

        <p className="text-sm">Colors</p>
        <div className="flex flex-wrap gap-1 ">
          {[...Array(gradientColorCount)].map((_, index) => (
            <div key={index} className="flex flex-row gap-1 items-center">
              <ColorInput
                key={index}
                type="string"
                onChange={(e) => {
                  onChange(e, "gradientColor", index);
                }}
                placeholder={`gradient color ${index + 1}`}
              />
              <SmallFieldLayout
                label=""
                onChange={(e) => {
                  onChange(e, "gradientColorPercentage", index);
                }}
              />
              <p>%</p>
            </div>
          ))}
          <button
            className="font-bold text-sm bg-black text-white p-2 rounded-md"
            onClick={() => setGradientColorCount((prev) => prev + 1)}
          >
            +Add
          </button>
        </div>
      </div>
    </div>
  );
};
