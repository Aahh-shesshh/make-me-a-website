import { Checkbox } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { LayoutCollapse } from "../../components/LayoutCollapse";
import { AppContext } from "../../context/AppContext";
import BackgroundImage from "./Background/BackgroundImage";
import { BorderRaduisFieldLayout } from "./Border/BorderRadiusInput";
import { BorderStyleLayout } from "./Border/BorderStyle";
import { BorderWidthLayout } from "./Border/BorderWidth";
import { MarginLayout } from "./PaddingMargin/MarginLayout";
import { PaddingLayout } from "./PaddingMargin/PaddingLayout";
import Overflow from "./OverFlow/Overflow";
import CommonPlate from "../../components/CommonPlate";

export const LayoutDesign = () => {
  const { elementId } = useContext(AppContext);
  const element = document.getElementById(elementId);
  const [inputDisableHeight, toogleInputDisableHeight] =
    useState<boolean>(false);
  const [inputDisableWidth, toogleInputDisableWidth] = useState<boolean>(false);
  const [currHeightUnit, setCurrHeightUnit] = useState<string>("px");
  const [currWidthUnit, setCurrWidthUnit] = useState<string>("px");

  const tag = element?.tagName ?? "";

  const val = {
    height: parseFloat(element.style.height),
    width: parseFloat(element.style.width),
    overflow: element.style.overflow,
  };

  const [value, setValue] = useState(val);

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        height: parseFloat(element.style.height),
        width: parseFloat(element.style.width),
        overflow: element.style.overflow,
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const onChange = (val: number | string, type: string) => {
    if (type === "height") {
      setValue((prevState) => ({ ...prevState, height: Number(val) }));
      element.style.height = Number(val) + currHeightUnit;
    } else if (type === "width") {
      setValue((prevState) => ({ ...prevState, width: Number(val) }));
      element.style.width = Number(val) + currWidthUnit;
    } else if (type === "autoHeight") {
      element.style.height = String(val);
    } else if (type === "autoWidth") {
      element.style.width = String(val);
    } else if (type === "unitChangeHeight") {
      const numericValue = parseFloat(element.style.height);
      setValue((prevState) => ({ ...prevState, height: Number(numericValue) }));
      setCurrHeightUnit(String(val));
      element.style.height = `${numericValue}${val}`;
    } else if (type === "unitChangeWidth") {
      const numericValue = parseFloat(element.style.width);
      setValue((prevState) => ({ ...prevState, width: Number(numericValue) }));
      setCurrWidthUnit(String(val));
      element.style.width = `${numericValue}${val}`;
    } else if (type === "overflow") {
      setValue((prevState) => ({ ...prevState, overflow: String(val) }));
      element.style.overflow = String(val);
    }
  };

  return (
    <div>
      <LayoutCollapse title="Layout" initial={true}>
        <div className="my-3 flex flex-wrap gap-2">
          {/* Height......  */}
          <div className="flex flex-row items-center gap-1 relative">
            <CommonPlate
              label="Height: "
              type="string"
              disabled={inputDisableHeight}
              onChange={onChange}
              inputValue={value.height}
              unitChangeEvent="unitChangeHeight"
              inputEvent="height"
            />
            <Checkbox
              onChange={(e) => {
                onChange(e.target.value, "autoHeight");
              }}
              value={"auto"}
              label="Auto"
              size="xs"
              onClick={() => toogleInputDisableHeight((prev) => !prev)}
            />
          </div>
          {/* Width .......  */}
          <div className="flex flex-row items-center gap-1">
            <CommonPlate
              label="Width: "
              type="string"
              onChange={onChange}
              inputValue={value.width}
              unitChangeEvent="unitChangeWidth"
              inputEvent="width"
              disabled={inputDisableWidth}
            />
            <Checkbox
              onChange={(e) => {
                onChange(e.target.value, "autoWidth");
              }}
              onClick={() => toogleInputDisableWidth((prev) => !prev)}
              value={"auto"}
              label="Auto"
              size="xs"
            />
          </div>

          <BorderRaduisFieldLayout element={element} />
          <PaddingLayout element={element} />
          <MarginLayout element={element} />
          <Overflow value={value.overflow} onChange={onChange} />
          <BorderStyleLayout
            label="Border Style"
            type="string"
            element={element}
          />
          {(tag === "DIV" || tag === "P") && (
            <>
              {tag !== "P" && (
                <BorderWidthLayout label="Border Width: " element={element} />
              )}
              <BackgroundImage element={element} />
            </>
          )}
        </div>
      </LayoutCollapse>
    </div>
  );
};
