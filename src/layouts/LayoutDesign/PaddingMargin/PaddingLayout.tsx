import { Collapse } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import UnitBtn from "../../../components/DimensionBtn/UnitBtn";
import { SmallFieldLayout } from "../../../components/SmallFieldInput";
import { paddingUnits } from "../../../constants/unitDimensions";
import { AppContext } from "../../../context/AppContext";
import CommonPlate from "../../../components/CommonPlate";

export const PaddingLayout = ({ element }: { element: HTMLElement }) => {
  const [isAuto, setIsAuto] = useState<boolean>(true);
  const { elementId } = useContext(AppContext);

  const [paddingUnit, setPaddingUnit] = useState<string>("px");
  const [paddingTopUnit, setPaddingTopUnit] = useState<string>("px");
  const [paddingLeftUnit, setPaddingLeftUnit] = useState<string>("px");
  const [paddingBottomUnit, setPaddingBottomUnit] = useState<string>("px");
  const [paddingRightUnit, setPaddingRightUnit] = useState<string>("px");

  const val = {
    padding: parseFloat(element.style.padding),
    paddingTop: parseFloat(element.style.paddingTop),
    paddingLeft: parseFloat(element.style.paddingLeft),
    paddingBottom: parseFloat(element.style.paddingBottom),
    paddingRight: parseFloat(element.style.paddingRight),
  };
  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        padding: parseFloat(element.style.padding),
        paddingTop: parseFloat(element.style.paddingTop),
        paddingLeft: parseFloat(element.style.paddingLeft),
        paddingBottom: parseFloat(element.style.paddingBottom),
        paddingRight: parseFloat(element.style.paddingRight),
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const [value, setValue] = useState(val);
  const onChange = (val: number | string, type: string) => {
    if (isAuto) {
      if (type === "padding") {
        setValue((prevState) => ({ ...prevState, padding: Number(val) }));
        element.style.padding = Number(val) + paddingUnit;
      } else if (type === "paddingUnit") {
        const numericValue = parseFloat(element.style.padding);
        setValue((prevState) => ({
          ...prevState,
          padding: Number(numericValue),
        }));
        setPaddingUnit(String(val));
        element.style.padding = `${numericValue}${val}`;
      }
    } else {
      if (type === "Toppadding") {
        setValue((prevState) => ({
          ...prevState,
          paddingTop: Number(val),
        }));
        element.style.paddingTop = Number(val) + paddingTopUnit;
      } else if (type === "Leftpadding") {
        setValue((prevState) => ({
          ...prevState,
          paddingLeft: Number(val),
        }));
        element.style.paddingLeft = Number(val) + paddingLeftUnit;
      } else if (type === "Bottompadding") {
        setValue((prevState) => ({
          ...prevState,
          paddingBottom: Number(val),
        }));
        element.style.paddingBottom = Number(val) + paddingBottomUnit;
      } else if (type === "Rightpadding") {
        setValue((prevState) => ({
          ...prevState,
          paddingRight: Number(val),
        }));
        element.style.paddingRight = Number(val) + paddingRightUnit;
      } else if (type === "paddingTopUnit") {
        const numericValue = parseFloat(element.style.paddingTop);
        setValue((prevState) => ({
          ...prevState,
          paddingTop: Number(numericValue),
        }));
        setPaddingTopUnit(String(val));
        element.style.paddingTop = `${numericValue}${val}`;
      } else if (type === "paddingLeftUnit") {
        const numericValue = parseFloat(element.style.paddingLeft);
        setValue((prevState) => ({
          ...prevState,
          paddingLeft: Number(numericValue),
        }));
        setPaddingLeftUnit(String(val));
        element.style.paddingLeft = `${numericValue}${val}`;
      } else if (type === "paddingBottomUnit") {
        const numericValue = parseFloat(element.style.paddingBottom);
        setValue((prevState) => ({
          ...prevState,
          paddingBottom: Number(numericValue),
        }));
        setPaddingBottomUnit(String(val));
        element.style.paddingBottom = `${numericValue}${val}`;
      } else if (type === "paddingRightUnit") {
        const numericValue = parseFloat(element.style.paddingRight);
        setValue((prevState) => ({
          ...prevState,
          paddingRight: Number(numericValue),
        }));
        setPaddingRightUnit(String(val));
        element.style.paddingRight = `${numericValue}${val}`;
      }
    }
  };
  // const handleAutoClick = () => {
  //   setIsAuto((prev) => !prev);
  // };

  return (
    <>
      <div className="flex border-box gap-1">
        <CommonPlate
          label="Padding: "
          type="string"
          onChange={onChange}
          inputValue={value.padding}
          unitChangeEvent="paddingUnit"
          inputEvent="padding"
          disabled={!isAuto}
        />
        <div className="flex flex-row text-[10px] items-center gap-1">
          <input type="checkbox" onClick={() => setIsAuto((prev) => !prev)} />
          <p>Auto</p>
        </div>
      </div>

      <Collapse in={isAuto ? false : true}>
        <div className="flex flex-wrap gap-2 pt-2 border-b-2 pb-1 border-b-slate-700">
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Top"
              value={value.paddingTop}
              onChange={(e) => {
                onChange(e, "Toppadding");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "paddingTopUnit");
              }}
              options={paddingUnits}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Left"
              value={value.paddingLeft}
              onChange={(e) => {
                onChange(e, "Leftpadding");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "paddingLeftUnit");
              }}
              options={paddingUnits}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Bottom"
              value={value.paddingBottom}
              onChange={(e) => {
                onChange(e, "Bottompadding");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "paddingBottomUnit");
              }}
              options={paddingUnits}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Right"
              value={value.paddingRight}
              onChange={(e) => {
                onChange(e, "Rightpadding");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "paddingRightUnit");
              }}
              options={paddingUnits}
            />
          </div>
        </div>
      </Collapse>
    </>
  );
};
