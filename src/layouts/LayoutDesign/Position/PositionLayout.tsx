import { Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import UnitBtn from "../../../components/DimensionBtn/UnitBtn";
import { SmallFieldLayout } from "../../../components/SmallFieldInput";
import { paddingUnits } from "../../../constants/unitDimensions";
import { AppContext } from "../../../context/AppContext";
import { LayoutCollapse } from "../../../components/LayoutCollapse";

export const PositionLayout = () => {
  const { elementId } = useContext(AppContext);
  const element = document.getElementById(elementId);

  const [topUnit, setTopUnit] = useState<string>("px");
  const [leftUnit, setLeftUnit] = useState<string>("px");
  const [bottomUnit, setBottomUnit] = useState<string>("px");
  const [rightUnit, setRightUnit] = useState<string>("px");

  const val = {
    position: element.style.position,
    top: parseFloat(element.style.top),
    left: parseFloat(element.style.left),
    bottom: parseFloat(element.style.bottom),
    right: parseFloat(element.style.right),
  };
  const [value, setValue] = useState(val);
  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        position: element.style.position,
        top: parseFloat(element.style.top),
        left: parseFloat(element.style.left),
        bottom: parseFloat(element.style.bottom),
        right: parseFloat(element.style.right),
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const onChange = (val: number | string, type: string) => {
    if (type === "position") {
      setValue((prevState) => ({ ...prevState, position: String(val) }));
      element.style.position = String(val);
    } else if (type === "top") {
      setValue((prevState) => ({ ...prevState, top: Number(val) }));
      element.style.top = Number(val) + topUnit;
    } else if (type === "left") {
      setValue((prevState) => ({ ...prevState, left: Number(val) }));
      element.style.left = Number(val) + leftUnit;
    } else if (type === "bottom") {
      setValue((prevState) => ({ ...prevState, bottom: Number(val) }));
      element.style.bottom = Number(val) + bottomUnit;
    } else if (type === "right") {
      setValue((prevState) => ({ ...prevState, right: Number(val) }));
      element.style.right = Number(val) + rightUnit;
    } else if (type === "topUnit") {
      const numericValue = parseFloat(element.style.top);
      setValue((prevState) => ({ ...prevState, top: Number(numericValue) }));
      setTopUnit(String(val));
      element.style.top = `${numericValue}${val}`;
    } else if (type === "leftUnit") {
      const numericValue = parseFloat(element.style.left);
      setValue((prevState) => ({ ...prevState, left: Number(numericValue) }));
      setLeftUnit(String(val));
      element.style.left = `${numericValue}${val}`;
    } else if (type === "bottomUnit") {
      const numericValue = parseFloat(element.style.bottom);
      setValue((prevState) => ({ ...prevState, bottom: Number(numericValue) }));
      setBottomUnit(String(val));
      element.style.bottom = `${numericValue}${val}`;
    } else if (type === "rightUnit") {
      const numericValue = parseFloat(element.style.right);
      setValue((prevState) => ({ ...prevState, right: Number(numericValue) }));
      setRightUnit(String(val));
      element.style.right = `${numericValue}${val}`;
    }
  };

  return (
    <LayoutCollapse title={"Position"} initial={false}>
      <div className="flex flex-wrap gap-2 pt-2 border-b-2 pb-1 border-b-slate-700">
        <div className="flex flex-row gap-2 items-center pr-2">
          <p className="text-sm">Position: </p>
          <Select
            placeholder="Pick one"
            onChange={(e) => {
              onChange(e, "position");
            }}
            type={"string"}
            value={value.position}
            allowDeselect
            size="xs"
            data={[
              { value: "absolute", label: "Absolute" },
              { value: "", label: "" },
              { value: "relative", label: "Relative" },
              { value: "fixed", label: "Fixed" },
              { value: "sticky", label: "Sticky" },
              { value: "static", label: "Static" },
            ]}
          />
        </div>
        <div className="flex flex-wrap gap-1">
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Top: "
              value={value.top}
              onChange={(e) => {
                onChange(e, "top");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "topUnit");
              }}
              options={paddingUnits}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Left: "
              value={value.left}
              onChange={(e) => {
                onChange(e, "left");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "leftUnit");
              }}
              options={paddingUnits}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Bottom: "
              value={value.bottom}
              onChange={(e) => {
                onChange(e, "bottom");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "bottomUnit");
              }}
              options={paddingUnits}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Right: "
              value={value.right}
              onChange={(e) => {
                onChange(e, "right");
              }}
            />
            <UnitBtn
              onChange={(e) => {
                onChange(e, "rightUnit");
              }}
              options={paddingUnits}
            />
          </div>
        </div>
      </div>
    </LayoutCollapse>
  );
};
