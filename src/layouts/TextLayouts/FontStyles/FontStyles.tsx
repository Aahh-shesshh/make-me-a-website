import { SmallFieldLayout } from "../../../components/SmallFieldInput";
import { heightUnits } from "../../../constants/unitDimensions";
import UnitBtn from "../../../components/DimensionBtn/UnitBtn";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { BsJustify } from "react-icons/bs";
import { Select } from "@mantine/core";
import { TextProps } from "../TextComponent";



export default function FontStyles({
  onChange,
  value,
}: {
  onChange: (val: number | string, type: string) => void;
  value: TextProps;
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-row items-center gap-1 relative">
        <SmallFieldLayout
          type="number"
          label="font size: "
          value={value.fontSize}
          onChange={(e) => {
            onChange(e, "font-size");
          }}
        />
        <UnitBtn
          options={heightUnits}
          onChange={(e) => {
            onChange(e, "fontSizeUnit");
          }}
        />
      </div>
      <div className="flex flex-row items-center gap-1 relative">
        <SmallFieldLayout
          type="number"
          label="font weight: "
          value={value.fontWeight}
          onChange={(e) => {
            onChange(e, "font-weight");
          }}
        />
      </div>
      <div className="flex flex-row gap-4 items-center">
        <p className="text-xs">Text-align: </p>
        <div className="flex flex-row gap-2 text-base items-center">
          <AiOutlineAlignCenter
            className={`hover:bg-[#CCC7C7] p-1 border ${
              value.textAlign === "center" && "bg-[#CCC7C7]"
            } rounded-md`}
            size={25}
            onClick={() => {
              onChange("center", "text-align");
            }}
          />
          <AiOutlineAlignLeft
            className={`hover:bg-[#CCC7C7] p-1 border ${
              value.textAlign === "left" && "bg-[#CCC7C7]"
            } rounded-md`}
            size={25}
            onClick={() => {
              onChange("left", "text-align");
            }}
          />
          <AiOutlineAlignRight
            className={`hover:bg-[#CCC7C7] p-1 border ${
              value.textAlign === "right" && "bg-[#CCC7C7]"
            } rounded-md`}
            size={25}
            onClick={() => {
              onChange("right", "text-align");
            }}
          />
          <BsJustify
            className={`hover:bg-[#CCC7C7] p-1 border ${
              value.textAlign === "justify" && "bg-[#CCC7C7]"
            } rounded-md`}
            size={25}
            onClick={() => {
              onChange("justify", "text-align");
            }}
          />
        </div>
      </div>
      <p className="text-sm">Text Decoration</p>
      <Select
        placeholder="Text Decoration"
        onChange={(e) => {
          onChange(e, "text-decoration");
        }}
        type="string"
        value={value.textDecoration}
        allowDeselect
        data={[
          { value: "dotted", label: "Dotted" },
          { value: "none", label: "None" },
          { value: "dashed", label: "Dashed" },
          { value: "solid", label: "Solid" },
          { value: "double", label: "Double" },
          { value: "wavy", label: "wavy" },
          { value: "underline", label: "Underline" },
          { value: "line-through", label: "Line-through" },
          { value: "overline", label: "Overline" },
        ]}
      />
    </div>
  );
}
