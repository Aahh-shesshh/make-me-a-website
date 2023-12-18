import { useEffect, useState } from "react";
// import { ColorInput } from "@mantine/core";
// import { ColorInput } from "../DesignLayouts/SmallFieldInput";
import { Collapse, ColorInput } from "@mantine/core";

export const BorderColorLayout = ({
  type,
  element,
}: {
  onChange?: (val: string | number) => void;
  type?: string;
  element: HTMLElement;
}) => {
  const [isAuto, setIsAuto] = useState<boolean>(true);

  const val = {
    borderColor: element.style.borderColor,
    borderTopColor: element.style.borderTopColor,
    borderLeftColor: element.style.borderLeftColor,
    borderRightColor: element.style.borderRightColor,
    borderBottomColor: element.style.borderBottomColor,
  };

  const [value, setValue] = useState(val);
  useEffect(() => {
    if (element !== null) {
      const tempVal = {
        borderColor: element.style.borderColor,
        borderTopColor: element.style.borderTopColor,
        borderLeftColor: element.style.borderLeftColor,
        borderRightColor: element.style.borderRightColor,
        borderBottomColor: element.style.borderBottomColor,
      };

      setValue({ ...tempVal });
      return;
    }
  }, [element.style, element]);
  const onChange = (val: number | string, type: string) => {
    if (isAuto) {
      if (type === "borderColor") {
        setValue((prevState) => ({ ...prevState, borderColor: String(val) }));

        element.style.borderColor = String(val);
      }
    } else {
      if (type === "Top") {
        setValue((prevState) => ({
          ...prevState,
          borderTopColor: String(val),
        }));
        element.style.borderTopColor = String(val);
      } else if (type === "Bottom") {
        setValue((prevState) => ({
          ...prevState,
          borderBottomColor: String(val),
        }));
        element.style.borderBottomColor = String(val);
      } else if (type === "Left") {
        setValue((prevState) => ({
          ...prevState,
          borderLeftColor: String(val),
        }));
        element.style.borderLeftColor = String(val);
      } else if (type === "Right") {
        setValue((prevState) => ({
          ...prevState,
          borderRightColor: String(val),
        }));
        element.style.borderRightColor = String(val);
      }
    }
  };
  const handleAutoClick = () => {
    setIsAuto((prev) => !prev);
    setValue((prev) => ({ ...prev, borderColor: "" }));
  };

  return (
    <div>
      <div className="flex flex-col gap-1 rounded-md    p-1 ">
        <p>Border Color</p>
        <div className="flex flex-row">
          {isAuto && (
            <ColorInput
              type="string"
              value={value.borderColor}
              onChange={(e) => {
                onChange(e, "borderColor");
              }}
              placeholder="Pick border color"
            />
          )}
          <div className="flex flex-row items-center gap-2 ml-4">
            <input type="checkbox" defaultChecked onClick={handleAutoClick} />
            <p>Auto</p>
          </div>
        </div>
      </div>

      <div className="my-1 flex flex-wrap gap-2">
        <Collapse in={isAuto ? false : true} className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <ColorInput
              type={type}
              placeholder="Top Border Color"
              value={value.borderTopColor}
              onChange={(e) => {
                onChange(e, "Top");
              }}
            />

            <ColorInput
              type={type}
              placeholder="Left Border Color"
              value={value.borderLeftColor}
              onChange={(e) => {
                onChange(e, "Left");
              }}
            />
            <ColorInput
              type={type}
              placeholder="Right Border Color"
              value={value.borderRightColor}
              onChange={(e) => {
                onChange(e, "Right");
              }}
            />
            <ColorInput
              type={type}
              placeholder="Border Bottom Color"
              value={value.borderBottomColor}
              onChange={(e) => {
                onChange(e, "Bottom");
              }}
            />
          </div>
        </Collapse>
      </div>
    </div>
  );
};
