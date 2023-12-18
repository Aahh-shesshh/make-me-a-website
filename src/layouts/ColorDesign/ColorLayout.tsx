import { ColorInput } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { LayoutCollapse } from "../../components/LayoutCollapse";
import { AppContext } from "../../context/AppContext";
import { BorderColorLayout } from "./BorderColor/BorderColor";

export default function ColorLayout() {
  const { elementId } = useContext(AppContext);

  const element = document.getElementById(elementId);
  const val = {
    backGround: element.style.backgroundColor,
  };

  const [value, setValue] = useState(val);

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        backGround: element.style.backgroundColor,
      };

      setValue({ ...tempVal });
      return;
    }
  }, [elementId, element.style]);

  const onChange = (val: number | string, type: string) => {
    if (type === "backGround") {
      setValue((prevState) => ({ ...prevState, backGround: String(val) }));
      element.style.backgroundColor = String(val);
    }
  };

  return (
    <div>
      <LayoutCollapse title="Color" initial={false}>
        <div className="flex flex-col">
          {/* For backgroundColor of the div ............. */}
          <p className="text-sm">Background Color</p>
          <ColorInput
            type="string"
            placeholder="Pick color"
            value={value.backGround}
            onChange={(e) => {
              onChange(e, "backGround");
            }}
            withPicker={true}
            withEyeDropper
            swatches={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
          />

          {/* Colors of the border ............. */}
          <BorderColorLayout type="string" element={element} />
        </div>
      </LayoutCollapse>
    </div>
  );
}
