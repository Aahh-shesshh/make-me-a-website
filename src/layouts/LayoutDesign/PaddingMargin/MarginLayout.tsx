import { Collapse } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { SmallFieldLayout } from "../../../components/SmallFieldInput";
import UnitBtn from "../../../components/DimensionBtn/UnitBtn";
import { marginUnits } from "../../../constants/unitDimensions";
import { AppContext } from "../../../context/AppContext";
import CommonPlate from "../../../components/CommonPlate";

export const MarginLayout = ({ element }: { element: HTMLElement }) => {
  const [isAuto, setIsAuto] = useState<boolean>(true);
  const { elementId } = useContext(AppContext);

  const [marginUnit, setMarginUnit] = useState<string>("px");
  const [marginTopUnit, setMarginTopUnit] = useState<string>("px");
  const [marginLeftUnit, setMarginLeftUnit] = useState<string>("px");
  const [marginBottomUnit, setMarginBottomUnit] = useState<string>("px");
  const [marginRightUnit, setMarginRightUnit] = useState<string>("px");

  const val = {
    margin: parseFloat(element.style.margin),
    marginTop: parseFloat(element.style.marginTop),
    marginLeft: parseFloat(element.style.marginLeft),
    marginBottom: parseFloat(element.style.marginBottom),
    marginRight: parseFloat(element.style.marginRight),
  };

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        margin: parseFloat(element.style.margin),
        marginTop: parseFloat(element.style.marginTop),
        marginLeft: parseFloat(element.style.marginLeft),
        marginBottom: parseFloat(element.style.marginBottom),
        marginRight: parseFloat(element.style.marginRight),
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const [value, setValue] = useState(val);
  const onChange = (val: number | string, type: string) => {
    if (isAuto) {
      if (type === "margin") {
        setValue((prevState) => ({ ...prevState, margin: Number(val) }));
        element.style.margin = Number(val) + marginUnit;
      } else if (type === "marginUnit") {
        const numericValue = parseFloat(element.style.margin);

        setValue((prevState) => ({
          ...prevState,
          margin: Number(numericValue),
        }));

        setMarginUnit(String(val));

        element.style.margin = `${numericValue}${val}`;
      }
    } else {
      if (type === "marginTop") {
        setValue((prevState) => ({
          ...prevState,
          marginTop: Number(val),
        }));
        element.style.marginTop = Number(val) + marginTopUnit;
      } else if (type === "marginLeft") {
        setValue((prevState) => ({
          ...prevState,
          marginLeft: Number(val),
        }));
        element.style.marginLeft = Number(val) + marginLeftUnit;
      } else if (type === "marginBottom") {
        setValue((prevState) => ({
          ...prevState,
          marginBottom: Number(val),
        }));
        element.style.marginBottom = Number(val) + marginBottomUnit;
      } else if (type === "marginRight") {
        setValue((prevState) => ({
          ...prevState,
          marginRight: Number(val),
        }));
        element.style.marginRight = Number(val) + marginRightUnit;
      } else if (type === "marginTopUnit") {
        const numericValue = parseFloat(element.style.marginTop);

        setValue((prevState) => ({
          ...prevState,
          marginTop: Number(numericValue),
        }));

        setMarginTopUnit(String(val));

        element.style.marginTop = `${numericValue}${val}`;
      } else if (type === "marginLeftUnit") {
        const numericValue = parseFloat(element.style.marginLeft);

        setValue((prevState) => ({
          ...prevState,
          marginLeft: Number(numericValue),
        }));

        setMarginLeftUnit(String(val));

        element.style.marginLeft = `${numericValue}${val}`;
      } else if (type === "marginBottomUnit") {
        const numericValue = parseFloat(element.style.marginBottom);

        setValue((prevState) => ({
          ...prevState,
          marginBottom: Number(numericValue),
        }));

        setMarginBottomUnit(String(val));

        element.style.marginBottom = `${numericValue}${val}`;
      } else if (type === "marginRightUnit") {
        const numericValue = parseFloat(element.style.marginRight);

        setValue((prevState) => ({
          ...prevState,
          marginRight: Number(numericValue),
        }));

        setMarginRightUnit(String(val));

        element.style.marginRight = `${numericValue}${val}`;
      }
    }
  };

  return (
    <>
      <div className="flex border-box gap-1">
        <CommonPlate
          label="Margin: "
          type="string"
          onChange={onChange}
          inputValue={value.margin}
          unitChangeEvent="marginUnit"
          inputEvent="margin"
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
              value={value.marginTop || 0}
              onChange={(e) => {
                onChange(e, "marginTop");
              }}
            />
            <UnitBtn
              options={marginUnits}
              onChange={(e) => {
                onChange(e, "marginTopUnit");
              }}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Left"
              value={value.marginLeft || 0}
              onChange={(e) => {
                onChange(e, "marginLeft");
              }}
            />
            <UnitBtn
              options={marginUnits}
              onChange={(e) => {
                onChange(e, "marginLeftUnit");
              }}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Bottom"
              value={value.marginBottom || 0}
              onChange={(e) => {
                onChange(e, "marginBottom");
              }}
            />{" "}
            <UnitBtn
              options={marginUnits}
              onChange={(e) => {
                onChange(e, "marginBottomUnit");
              }}
            />
          </div>
          <div className="flex flex-row gap-1">
            <SmallFieldLayout
              type="number"
              label="Right"
              value={value.marginRight || 0}
              onChange={(e) => {
                onChange(e, "marginRight");
              }}
            />{" "}
            <UnitBtn
              options={marginUnits}
              onChange={(e) => {
                onChange(e, "marginRightUnit");
              }}
            />
          </div>
        </div>
      </Collapse>
    </>
  );
};
