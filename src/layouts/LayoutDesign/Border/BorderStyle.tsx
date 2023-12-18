import { Collapse, Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";

export const BorderStyleLayout = ({
  label,
  type = "string",
  element,
}: {
  onChange?: (val: string | number) => void;
  label: string;
  type?: string;
  element: HTMLElement;
}) => {
  const [isAuto, setIsAuto] = useState<boolean>(true);
  const { elementId } = useContext(AppContext);

  const val = {
    borderStyle: element.style.borderStyle,
    borderTopStyle: element.style.borderTopStyle,
    borderLeftStyle: element.style.borderLeftStyle,
    borderRightStyle: element.style.borderRightStyle,
    borderBottomStyle: element.style.borderBottomStyle,
  };

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        borderStyle: element.style.borderStyle,
        borderTopStyle: element.style.borderTopStyle,
        borderLeftStyle: element.style.borderLeftStyle,
        borderRightStyle: element.style.borderRightStyle,
        borderBottomStyle: element.style.borderBottomStyle,
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);
  const [value, setValue] = useState(val);
  const onChange = (val: number | string, type: string) => {
    if (isAuto) {
      if (type === "borderStyle") {
        setValue((prevState) => ({ ...prevState, borderStyle: String(val) }));
        element.style.borderStyle = String(val);
      }
    } else {
      if (type === "borderTopStyle") {
        setValue((prevState) => ({
          ...prevState,
          borderTopStyle: String(val),
        }));
        element.style.borderTopStyle = String(val);
      } else if (type === "borderLeftStyle") {
        setValue((prevState) => ({
          ...prevState,
          borderLeftStyle: String(val),
        }));
        element.style.borderLeftStyle = String(val);
      } else if (type === "borderBottomStyle") {
        setValue((prevState) => ({
          ...prevState,
          borderBottomStyle: String(val),
        }));
        element.style.borderBottomStyle = String(val);
      } else if (type === "borderRightStyle") {
        setValue((prevState) => ({
          ...prevState,
          borderRightStyle: String(val),
        }));
        element.style.borderRightStyle = String(val);
      }
    }
  };
  const handleAutoClick = () => {
    setIsAuto((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <p className="lg:text-sm text-xs whitespace-nowrap">{label}</p>
        <div className="flex  flex-row gap-1  border border-transparent p-1 border-box">
          <Select
            placeholder="Pick one"
            onChange={(e) => {
              onChange(e, "borderStyle");
            }}
            type={type}
            value={value.borderStyle}
            allowDeselect
            size="xs"
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

          <div className="flex flex-row items-center gap-1 lg:text-xs text-[10px]">
            <input type="checkbox" defaultChecked onClick={handleAutoClick} />
            <p>Auto</p>
          </div>
        </div>
      </div>
      <Collapse in={isAuto ? false : true}>
        <hr />
        <div className="my-1 flex flex-wrap gap-2">
          <div className="flex flex-row gap-1 items-center">
            <p className="lg:text-sm text-xs whitespace-nowrap">Left: </p>
            <Select
              placeholder="Border Left"
              onChange={(e) => {
                onChange(e, "borderLeftStyle");
              }}
              allowDeselect
              size="xs"
              type={type}
              value={value.borderLeftStyle}
              data={[
                { value: "dotted", label: "Dotted" },
                { value: "dashed", label: "Dashed" },
                { value: "solid", label: "Solid" },
                { value: "", label: "None" },
                { value: "double", label: "Double" },
                { value: "groove", label: "Groove" },
                { value: "inset", label: "Inset" },
                { value: "outset", label: "Outset" },
              ]}
            />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="lg:text-sm text-xs whitespace-nowrap">Top: </p>
            <Select
              placeholder="Border Top"
              onChange={(e) => {
                onChange(e, "borderTopStyle");
              }}
              allowDeselect
              type={type}
              value={value.borderTopStyle}
              data={[
                { value: "dotted", label: "Dotted" },
                { value: "dashed", label: "Dashed" },
                { value: "solid", label: "Solid" },
                { value: "", label: "None" },
                { value: "double", label: "Double" },
                { value: "groove", label: "Groove" },
                { value: "inset", label: "Inset" },
                { value: "outset", label: "Outset" },
              ]}
            />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="lg:text-sm text-xs whitespace-nowrap">Bottom: </p>

            <Select
              placeholder="Border Bottom"
              onChange={(e) => {
                onChange(e, "borderBottomStyle");
              }}
              allowDeselect
              type={type}
              value={value.borderBottomStyle}
              data={[
                { value: "dotted", label: "Dotted" },
                { value: "dashed", label: "Dashed" },
                { value: "solid", label: "Solid" },
                { value: "", label: "None" },
                { value: "double", label: "Double" },
                { value: "groove", label: "Groove" },
                { value: "inset", label: "Inset" },
                { value: "outset", label: "Outset" },
              ]}
            />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="lg:text-sm text-xs whitespace-nowrap">Right: </p>
            <Select
              placeholder="Border Right"
              onChange={(e) => {
                onChange(e, "borderRightStyle");
              }}
              allowDeselect
              type={type}
              value={value.borderRightStyle}
              data={[
                { value: "dotted", label: "Dotted" },
                { value: "dashed", label: "Dashed" },
                { value: "solid", label: "Solid" },
                { value: "double", label: "Double" },
                { value: "groove", label: "Groove" },
                { value: "inset", label: "Inset" },
                { value: "", label: "None" },
                { value: "outset", label: "Outset" },
              ]}
            />
          </div>
        </div>
      </Collapse>
    </>
  );
};
