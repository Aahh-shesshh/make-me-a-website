import { ColorInput, Select } from "@mantine/core";
import { textDecorationOptions } from "../../../constants/text-decoration";
import { useEffect, useState } from "react";

export default function TextDecoration({ element }: { element: HTMLElement }) {
  const [decorationMixedValues, setDecorationMixedValues] = useState<string[]>(
    Array(3).fill(" ")
  );

  useEffect(() => {
    if (element !== null) {
      const tempVal = {
        textDecoration: element.style.textDecoration,
      };
      setDecorationMixedValues(tempVal.textDecoration.split(" "));
    }
  }, [element]);

  const onChange = (val: number | string, type: string, index: number) => {
    if (type === "text_decoration" && index !== undefined) {
      setDecorationMixedValues((prevValues) => {
        const temp = [...prevValues];
        temp[index] = String(val);
        element.style.textDecoration = `${temp.join(" ")}`;
        return temp;
      });
    } else if (type === "line_style") {
      setDecorationMixedValues((prevValues) => {
        const temp = [...prevValues];
        temp[index] = String(val);
        element.style.textDecoration = `${temp.join(" ")}`;
        return temp;
      });
    } else if (type === "line_color") {
      setDecorationMixedValues((prevValues) => {
        const temp = [...prevValues];
        temp[index] = String(val);
        element.style.textDecoration = `${temp.join(" ")}`;
        return temp;
      });
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-xs whitespace-nowrap">Text Decorartion :</p>
      <div className="flex flex-row gap-1  border border-transparent border-box">
        <Select
          label="Decoration"
          placeholder="Pick one"
          onChange={(e) => {
            onChange(e, "text_decoration", 0);
          }}
          type={"string"}
          size="xs"
          value={decorationMixedValues[0]}
          allowDeselect
          data={textDecorationOptions?.map((d) => ({
            value: d.value,
            label: d.label,
          }))}
        />
        <Select
          label="Line Style"
          placeholder="Pick one"
          onChange={(e) => {
            onChange(e, "line_style", 1);
          }}
          type={"string"}
          size="xs"
          value={decorationMixedValues[1]}
          allowDeselect
          data={[
            { value: "dotted", label: "Dotted" },
            { value: "", label: "None" },
            { value: "dashed", label: "Dashed" },
            { value: "solid", label: "Solid" },
            { value: "double", label: "Double" },
            { value: "groove", label: "Groove" },
            { value: "inset", label: "Inset" },
            { value: "outset", label: "Outset" },
          ]}
        />
      </div>
      <ColorInput
        type="string"
        onChange={(e) => {
          onChange(e, "line_color", 2);
        }}
        placeholder={"Line color"}
        value={decorationMixedValues[2]}
      />
    </div>
  );
}
