import { Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { AppContext } from "../../../context/AppContext";
import { SmallFieldLayout } from "../../../components/SmallFieldInput";
import UnitBtn from "../../../components/DimensionBtn/UnitBtn";
import { heightUnits } from "../../../constants/unitDimensions";
import { displayOptions } from "../../../constants/displayOptions";
import { LayoutCollapse } from "../../../components/LayoutCollapse";

export const Display = () => {
  const { elementId } = useContext(AppContext);
  const element = document.getElementById(elementId);

  const [gapUnit, setGapUnit] = useState<string>("px");

  const val = {
    display: element.style.display,
    flexDirection: element.style.flexDirection,
    flexWrap: element.style.flexWrap,
    alignItems: element.style.alignItems,
    justifyContent: element.style.justifyContent,
    gap: parseFloat(element.style.gap),
  };

  const [value, setValue] = useState(val);

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        display: element.style.display,
        alignItems: element.style.alignItems,
        justifyContent: element.style.justifyContent,
        flexDirection: element.style.flexDirection,
        gap: parseFloat(element.style.gap),
        flexWrap: element.style.flexWrap,
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const onChange = (val: number | string, type: string) => {
    if (type === "display") {
      setValue((prevState) => ({ ...prevState, display: String(val) }));
      element.style.display = String(val);
    } else if (type === "flex-direction") {
      setValue((prevState) => ({ ...prevState, flexDirection: String(val) }));
      element.style.flexDirection = String(val);
    } else if (type === "flex-wrap") {
      setValue((prevState) => ({ ...prevState, flexWrap: String(val) }));
      element.style.flexWrap = String(val);
    }
    if (type === "gap") {
      setValue((prevState) => ({ ...prevState, gap: Number(val) }));
      element.style.gap = val + gapUnit;
    }
    if (type === "gapUnit") {
      const numericValue = parseFloat(element.style.gap);
      setValue((prevState) => ({ ...prevState, gap: Number(numericValue) }));
      setGapUnit(String(val));
      element.style.gap = numericValue + String(val);
    }
    if (type === "alignItems") {
      if (val === value.alignItems) {
        setValue((prevState) => ({ ...prevState, alignItems: "" }));
        element.style.alignItems = "";
      } else {
        setValue((prevState) => ({ ...prevState, alignItems: String(val) }));
        element.style.alignItems = String(val);
      }

      // }
    }
    if (type === "justifyContent") {
      if (val === value.justifyContent) {
        setValue((prevState) => ({ ...prevState, justifyContent: "" }));
        element.style.justifyContent = "";
      } else {
        setValue((prevState) => ({
          ...prevState,
          justifyContent: String(val),
        }));
        element.style.justifyContent = String(val);
      }
    }
  };

  return (
    <LayoutCollapse title={"Display"} initial={false}>
      <div className="space-y-2 p-2">
        <div className="flex  flex-row gap-2 items-center">
          <p className="text-sm">Display: </p>
          <Select
            placeholder="Pick one"
            onChange={(e) => {
              onChange(e, "display");
            }}
            size="xs"
            type={"string"}
            value={value.display}
            allowDeselect
            data={displayOptions?.map((d) => ({
              value: d.value,
              label: d.label,
            }))}
          />
        </div>
        {value.display === "flex" && (
          <>
            <div className="flex flex-row gap-2 items-center">
              <p className=" whitespace-nowrap text-sm">Flex-Wrap: </p>
              <Select
                placeholder="Pick one"
                onChange={(e) => {
                  onChange(e, "flex-wrap");
                }}
                type={"string"}
                value={value.flexWrap}
                size="xs"
                data={[
                  { value: "wrap", label: "wrap" },
                  { value: "", label: "Default" },
                  { value: "nowrap", label: "nowrap" },
                  { value: "wrap-reverse", label: "wrap-reverse" },
                  { value: "inherit", label: "inherit" },
                  { value: "initial", label: "initial" },
                ]}
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p className=" whitespace-nowrap text-sm">Flex-direction: </p>
              <Select
                placeholder="Pick one"
                onChange={(e) => {
                  onChange(e, "flex-direction");
                }}
                type={"string"}
                value={value.flexDirection}
                size="xs"
                data={[
                  { value: "row", label: "row" },
                  { value: "", label: "Default" },
                  { value: "row-reverse", label: "row-reverse" },
                  { value: "column", label: "column" },
                  { value: "column-reverse", label: "column-reverse" },
                  { value: "inherit", label: "inherit" },
                  { value: "initial", label: "initial" },
                ]}
              />
            </div>
          </>
        )}

        <div className="flex flex-row gap-1">
          <SmallFieldLayout
            type="number"
            label="Gap:"
            value={value.gap}
            onChange={(e) => {
              onChange(e, "gap");
            }}
          />
          <UnitBtn
            onChange={(e) => {
              onChange(e, "gapUnit");
            }}
            options={heightUnits}
          />
        </div>

        <div className="flex flex-row gap-4 items-center">
          <p className="lg:text-xs text-[11px]">Align-items: </p>
          <div className="flex flex-row gap-2 text-base items-center">
            <AiOutlineAlignCenter
              className={`hover:bg-[#CCC7C7] p-1 border ${
                value.alignItems === "center" && "bg-[#CCC7C7]"
              } rounded-md`}
              size={25}
              onClick={() => {
                onChange("center", "alignItems");
              }}
            />
            <AiOutlineAlignLeft
              className={`hover:bg-[#CCC7C7] p-1 border ${
                value.alignItems === "flex-start" && "bg-[#CCC7C7]"
              } rounded-md`}
              size={25}
              onClick={() => {
                onChange("flex-start", "alignItems");
              }}
            />
            <AiOutlineAlignRight
              className={`hover:bg-[#CCC7C7] p-1 border ${
                value.alignItems === "flex-end" && "bg-[#CCC7C7]"
              } rounded-md`}
              size={25}
              onClick={() => {
                onChange("flex-end", "alignItems");
              }}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <p className="lg:text-xs text-[11px]">Justify-Content: </p>
          <div className="flex flex-row gap-2 items-center">
            <AiOutlineAlignCenter
              className={`hover:bg-[#CCC7C7] p-1 border ${
                value.justifyContent === "center" && "bg-[#CCC7C7]"
              } rounded-md`}
              size={25}
              onClick={() => {
                onChange("center", "justifyContent");
              }}
            />
            <AiOutlineAlignLeft
              className={`hover:bg-[#CCC7C7] p-1 border ${
                value.justifyContent === "left" && "bg-[#CCC7C7]"
              } rounded-md`}
              size={25}
              onClick={() => {
                onChange("left", "justifyContent");
              }}
            />
            <AiOutlineAlignRight
              className={`hover:bg-[#CCC7C7] p-1 border ${
                value.justifyContent === "right" && "bg-[#CCC7C7]"
              } rounded-md`}
              size={25}
              onClick={() => {
                onChange("right", "justifyContent");
              }}
            />
          </div>
        </div>
      </div>
    </LayoutCollapse>
  );
};
