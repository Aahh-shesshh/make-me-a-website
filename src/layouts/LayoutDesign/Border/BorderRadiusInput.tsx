import { Collapse } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import CommonPlate from "../../../components/CommonPlate";

export const BorderRaduisFieldLayout = ({
  element,
}: {
  onChange?: (val: string | number) => void;

  element: HTMLElement;
}) => {
  const [isAuto, setIsAuto] = useState<boolean>(true);
  const { elementId } = useContext(AppContext);

  const [radiusUnit, setRadiusUnit] = useState<string>("px");
  const [radiusBLUnit, setRadiusBLUnit] = useState<string>("px");
  const [radiusBRUnit, setRadiusBRUnit] = useState<string>("px");
  const [radiusTLUnit, setRadiusTLUnit] = useState<string>("px");
  const [radiusTRUnit, setRadiusTRUnit] = useState<string>("px");

  const val = {
    radius: parseFloat(element.style.borderRadius),

    topRight: parseFloat(element.style.borderTopRightRadius),
    topLeft: parseFloat(element.style.borderTopLeftRadius),
    bottomRight: parseFloat(element.style.borderBottomRightRadius),
    bottomLeft: parseFloat(element.style.borderBottomLeftRadius),
  };

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        radius: parseFloat(element.style.borderRadius),

        topRight: parseFloat(element.style.borderTopRightRadius),
        topLeft: parseFloat(element.style.borderTopLeftRadius),
        bottomRight: parseFloat(element.style.borderBottomRightRadius),
        bottomLeft: parseFloat(element.style.borderBottomLeftRadius),
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const [value, setValue] = useState(val);
  const onChange = (val: number | string, type: string) => {
    if (isAuto) {
      if (type === "radius") {
        setValue((prevState) => ({ ...prevState, radius: Number(val) }));
        element.style.borderRadius = Number(val) + radiusUnit;
      } else if (type === "radiusUnit") {
        const numericValue = parseFloat(element.style.borderRadius);

        setValue((prevState) => ({
          ...prevState,
          radius: Number(numericValue),
        }));

        setRadiusUnit(String(val));

        element.style.borderRadius = `${numericValue}${val}`;
      }
    } else {
      if (type === "topright") {
        setValue((prevState) => ({ ...prevState, topRight: Number(val) }));
        element.style.borderTopRightRadius = Number(val) + radiusTRUnit;
      } else if (type === "topleft") {
        setValue((prevState) => ({ ...prevState, topLeft: Number(val) }));
        element.style.borderTopLeftRadius = Number(val) + radiusTLUnit;
      } else if (type === "bottomright") {
        setValue((prevState) => ({ ...prevState, bottomRight: Number(val) }));
        element.style.borderBottomRightRadius = Number(val) + radiusBRUnit;
      } else if (type === "bottomleft") {
        setValue((prevState) => ({ ...prevState, bottomLeft: Number(val) }));
        element.style.borderBottomLeftRadius = Number(val) + radiusBLUnit;
      } else if (type === "toprightUnit") {
        const numericValue = parseFloat(element.style.borderTopRightRadius);

        setValue((prevState) => ({
          ...prevState,
          topRight: Number(numericValue),
        }));

        setRadiusTRUnit(String(val));

        element.style.borderTopRightRadius = `${numericValue}${val}`;
      } else if (type === "bottomleftUnit") {
        const numericValue = parseFloat(element.style.borderBottomLeftRadius);

        setValue((prevState) => ({
          ...prevState,
          bottomLeft: Number(numericValue),
        }));

        setRadiusBLUnit(String(val));

        element.style.borderBottomLeftRadius = `${numericValue}${val}`;
      } else if (type === "topleftUnit") {
        const numericValue = parseFloat(element.style.borderTopLeftRadius);

        setValue((prevState) => ({
          ...prevState,
          topLeft: Number(numericValue),
        }));

        setRadiusTLUnit(String(val));

        element.style.borderTopLeftRadius = `${numericValue}${val}`;
      } else if (type === "bottomrightUnit") {
        const numericValue = parseFloat(element.style.borderTopRightRadius);

        setValue((prevState) => ({
          ...prevState,
          bottomRight: Number(numericValue),
        }));

        setRadiusBRUnit(String(val));

        element.style.borderTopRightRadius = `${numericValue}${val}`;
      }
    }
  };

  return (
    <>
      <div className="flex border-box gap-1">
        <CommonPlate
          label="Radius:"
          type="string"
          onChange={onChange}
          inputValue={value.radius}
          unitChangeEvent="radiusUnit"
          inputEvent="radius"
          disabled={!isAuto}
        />
        <div className="flex flex-row text-[10px] items-center gap-1">
          <input type="checkbox" onClick={() => setIsAuto((prev) => !prev)} />
          <p>Auto</p>
        </div>
      </div>
      <div className=" flex flex-wrap gap-2 border-b-2 pb-1 border-b-slate-700">
        <Collapse in={isAuto ? false : true}>
          <div className="flex flex-col gap-2">
            <CommonPlate
              label="TopRight: "
              type="string"
              onChange={onChange}
              inputValue={value.topRight ? value.topRight : value.radius}
              unitChangeEvent="toprightUnit"
              inputEvent="topright"
            />
            <CommonPlate
              label="TopLeft: "
              type="string"
              onChange={onChange}
              inputValue={value.topLeft ? value.topLeft : value.radius}
              unitChangeEvent="topleftUnit"
              inputEvent="topleft"
            />

            <CommonPlate
              label="BottomRight: "
              type="string"
              onChange={onChange}
              inputValue={value.bottomRight ? value.bottomRight : value.radius}
              unitChangeEvent="bottomrightUnit"
              inputEvent="bottomright"
            />

            <CommonPlate
              label="BottomLeft: "
              type="string"
              onChange={onChange}
              inputValue={value.bottomLeft ? value.bottomLeft : value.radius}
              unitChangeEvent="bottomleftUnit"
              inputEvent="bottomleft"
            />
          </div>
        </Collapse>
      </div>
    </>
  );
};
