import { Select } from "@mantine/core";
import { TextProps } from "../TextComponent";
import { fontFamilies } from "../../../constants/fontFamilies";

export default function FontFamily({
  onChange,
  value,
  type = "string",
}: {
  onChange: (val: number | string, type: string) => void;
  value: TextProps;
  type?: string;
}) {
  return (
    <div className="flex flex-row items-center">
      <p className="text-xs whitespace-nowrap">Font Family :</p>
      <div className="flex flex-row gap-1  border border-transparent p-1 border-box">
        <Select
          placeholder="Pick one"
          onChange={(e) => {
            onChange(e, "fontFamily");
          }}
          type={type}
          size="xs"
          value={value.fontFamily}
          allowDeselect
          data={fontFamilies?.map((d) => ({
            value: d.value,
            label: d.label,
          }))}
        />
      </div>
    </div>
  );
}
