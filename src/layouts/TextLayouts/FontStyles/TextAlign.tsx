import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { BsJustify } from "react-icons/bs";
import { TextProps } from "../TextComponent";

export default function TextAlign({
  onChange,
  label,
  value,
}: {
  onChange: (val: number | string, type: string) => void;
  label: string;

  value: TextProps;
}) {
  return (
    <div>
      <div className="flex flex-row gap-4 items-center">
        <p className="text-xs">{label}: </p>
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
    </div>
  );
}
