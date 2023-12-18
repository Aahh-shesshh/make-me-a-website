import { useEffect, useState } from "react";
// import { ColorInput } from "@mantine/core";
// import { ColorInput } from "../DesignLayouts/SmallFieldInput";
import { ColorInput, Select } from "@mantine/core";
import { SmallFieldLayout } from "../../../components/SmallFieldInput";

export const LinearGradient = ({
  element,
}: {
  onChange?: (val: string | number) => void;
  element: HTMLElement;
}) => {
  const [gradientColorCount, setGradientColorCount] = useState<number>(2);

  const [gradients, setGradients] = useState<string[]>(
    Array(gradientColorCount).fill("#000000")
  );

  const val = {
    backgroundImage: element.style.backgroundImage,
    position: "to bottom",
  };

  const [value, setValue] = useState(val);
  useEffect(() => {
    if (element !== null) {
      const tempVal = {
        backgroundImage: element.style.backgroundImage,
        position: "to bottom",
      };

      setValue({ ...tempVal });
      return;
    }
  }, [element.style, element]);
  const onChange = (val: number | string, type: string, index?: number) => {
    if (type === "gradientColor" && index !== undefined) {
      const tempGradients = [...gradients];
      tempGradients[index] = String(val);
      setGradients(tempGradients);

      element.style.backgroundImage = `linear-gradient(${
        value.position
      }, ${gradients.join(", ")})`;
    }
    if (type === "gradientColorPercentage" && index !== undefined) {
      const tempGradients = [...gradients];

      const temp = tempGradients[index].split(" ");

      temp[1] = `${val}%`;
      tempGradients[index] = temp.join(" ");

      setGradients(tempGradients);

      element.style.backgroundImage = `linear-gradient(${
        value.position
      }, ${gradients.join(", ")})`;
    }
    if (type === "position") {
      setValue((prevState) => ({ ...prevState, position: String(val) }));
    }
  };

  return (
    <div>
      <p className="underline">Linear Gradient</p>
      <div className="flex  flex-row gap-2 items-center">
        <p className="text-sm">To: </p>
        <Select
          placeholder="Pick one"
          onChange={(e) => {
            onChange(e, "position");
          }}
          size="xs"
          type={"string"}
          allowDeselect
          data={[
            {
              value: "to-top",
              label: "to top",
            },
            {
              value: "to top right",
              label: "to top right",
            },
            {
              value: "to right",
              label: "to right",
            },
            {
              value: "to bottom right",
              label: "to bottom right",
            },
            {
              value: "to bottom",
              label: "to bottom",
            },
            {
              value: "to-bottom left",
              label: "to bottom left",
            },
            {
              value: "to left",
              label: "to left",
            },
            {
              value: "to top left",
              label: "to top left",
            },
          ]}
        />
      </div>
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
  );
};
