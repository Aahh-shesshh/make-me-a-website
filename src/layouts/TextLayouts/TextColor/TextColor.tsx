import { ColorInput } from "@mantine/core";
import { TextProps } from "../TextComponent";

export default function TextColor({
  onChange,
  value,
}: {
  onChange: (val: number | string, type: string) => void;
  value: TextProps;
}) {
  return (
    <div className="flex flex-row items-center gap-1">
      <p className="text-xs ">Font Color: </p>
      <ColorInput
        type="string"
        placeholder="font color"
        value={value.fontColor}
        onChange={(e) => {
          onChange(e, "font-color");
        }}
        size="xs"
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
    </div>
  );
}
