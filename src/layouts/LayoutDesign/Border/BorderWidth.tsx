import { Collapse } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import CommonPlate from "../../../components/CommonPlate";

export const BorderWidthLayout = ({
  label,
  element,
}: {
  onChange?: (val: string | number) => void;
  label: string;
  element: HTMLElement;
}) => {
  const [isAuto, setIsAuto] = useState<boolean>(true);
  const { elementId } = useContext(AppContext);

  const [borderWidthUnit, setBorderWidthUnit] = useState<string>("px");
  const [borderTopWidthUnit, setBorderTopWidthUnit] = useState<string>("px");
  const [borderLeftWidthUnit, setBorderLeftWidthUnit] = useState<string>("px");
  const [borderBottomWidthUnit, setBorderBottomWidthUnit] =
    useState<string>("px");
  const [borderRightWidthUnit, setBorderRightWidthUnit] =
    useState<string>("px");

  const val = {
    borderWidth: parseFloat(element.style.borderWidth),
    borderTopWidth: parseFloat(element.style.borderTopWidth),
    borderLeftWidth: parseFloat(element.style.borderLeftWidth),
    borderBottomWidth: parseFloat(element.style.borderBottomWidth),
    borderRightWidth: parseFloat(element.style.borderRightWidth),
  };

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        borderWidth: parseFloat(element.style.borderWidth),
        borderTopWidth: parseFloat(element.style.borderTopWidth),
        borderLeftWidth: parseFloat(element.style.borderLeftWidth),
        borderBottomWidth: parseFloat(element.style.borderBottomWidth),
        borderRightWidth: parseFloat(element.style.borderRightWidth),
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const [value, setValue] = useState(val);
  const onChange = (val: number | string, type: string) => {
    if (isAuto) {
      if (type === "borderWidth") {
        setValue((prevState) => ({ ...prevState, borderWidth: Number(val) }));
        element.style.borderWidth = Number(val) + borderWidthUnit;
      } else if (type === "borderWidthUnit") {
        const numericValue = parseFloat(element.style.borderWidth);

        setValue((prevState) => ({
          ...prevState,
          borderWidth: Number(numericValue),
        }));

        setBorderWidthUnit(String(val));

        element.style.borderWidth = `${numericValue}${val}`;
      }
    } else {
      if (type === "TopBorderWidth") {
        setValue((prevState) => ({
          ...prevState,
          borderTopWidth: Number(val),
        }));
        element.style.borderTopWidth = Number(val) + borderTopWidthUnit;
      } else if (type === "LeftBorderWidth") {
        setValue((prevState) => ({
          ...prevState,
          borderLeftWidth: Number(val),
        }));
        element.style.borderLeftWidth = Number(val) + borderLeftWidthUnit;
      } else if (type === "BottomBorderWidth") {
        setValue((prevState) => ({
          ...prevState,
          borderBottomWidth: Number(val),
        }));
        element.style.borderBottomWidth = Number(val) + borderBottomWidthUnit;
      } else if (type === "RightBorderWidth") {
        setValue((prevState) => ({
          ...prevState,
          borderRightWidth: Number(val),
        }));
        element.style.borderRightWidth = Number(val) + borderRightWidthUnit;
      } else if (type === "TopBorderWidthUnit") {
        const numericValue = parseFloat(element.style.borderTopWidth);

        setValue((prevState) => ({
          ...prevState,
          borderTopWidth: Number(numericValue),
        }));

        setBorderTopWidthUnit(String(val));

        element.style.borderTopWidth = `${numericValue}${val}`;
      } else if (type === "LeftBorderWidthUnit") {
        const numericValue = parseFloat(element.style.borderLeftWidth);

        setValue((prevState) => ({
          ...prevState,
          borderLeftWidth: Number(numericValue),
        }));

        setBorderLeftWidthUnit(String(val));

        element.style.borderLeftWidth = `${numericValue}${val}`;
      } else if (type === "BottomBorderWidthUnit") {
        const numericValue = parseFloat(element.style.borderBottomWidth);

        setValue((prevState) => ({
          ...prevState,
          borderBottomWidth: Number(numericValue),
        }));

        setBorderBottomWidthUnit(String(val));

        element.style.borderBottomWidth = `${numericValue}${val}`;
      } else if (type === "RightBorderWidthUnit") {
        const numericValue = parseFloat(element.style.borderRightWidth);

        setValue((prevState) => ({
          ...prevState,
          borderRightWidth: Number(numericValue),
        }));

        setBorderRightWidthUnit(String(val));

        element.style.borderRightWidth = `${numericValue}${val}`;
      }
    }
  };
  const handleAutoClick = () => {
    setIsAuto((prev) => !prev);
  };

  return (
    <>
      <div className="flex gap-2  border-box ">
        <CommonPlate
          label={label}
          type="number"
          onChange={onChange}
          inputValue={value.borderWidth}
          unitChangeEvent="borderWidthUnit"
          inputEvent="borderWidth"
          disabled={!isAuto}
        />
        <div className="flex flex-row text-xs items-center gap-2">
          <input type="checkbox" defaultChecked onClick={handleAutoClick} />
          <p>Auto</p>
        </div>
      </div>

      <Collapse in={isAuto ? false : true}>
        <div className="flex flex-wrap gap-2 pt-2 border-b-2 pb-1 border-b-slate-700">
          <CommonPlate
            label="Top: "
            type="number"
            onChange={onChange}
            inputValue={
              value.borderTopWidth ? value.borderTopWidth : value.borderWidth
            }
            unitChangeEvent="TopBorderWidthUnit"
            inputEvent="TopBorderWidth"
          />

          <CommonPlate
            label="Left: "
            type="number"
            onChange={onChange}
            inputValue={
              value.borderLeftWidth ? value.borderLeftWidth : value.borderWidth
            }
            unitChangeEvent="LeftBorderWidthUnit"
            inputEvent="LeftBorderWidth"
          />

          <CommonPlate
            label="Bottom: "
            type="number"
            onChange={onChange}
            inputValue={
              value.borderBottomWidth
                ? value.borderBottomWidth
                : value.borderWidth
            }
            unitChangeEvent="BottomBorderWidthUnit"
            inputEvent="BottomBorderWidth"
          />

          <CommonPlate
            label="Right: "
            type="number"
            onChange={onChange}
            inputValue={
              value.borderRightWidth
                ? value.borderRightWidth
                : value.borderWidth
            }
            unitChangeEvent="RightBorderWidthUnit"
            inputEvent="RightBorderWidth"
          />
        </div>
      </Collapse>
    </>
  );
};
