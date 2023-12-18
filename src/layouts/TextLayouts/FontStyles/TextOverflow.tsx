import { Select } from "@mantine/core";
import { TextProps } from "../TextComponent";

export default function TextOverflow({
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
      <p className="text-xs whitespace-nowrap">Text Overflow:</p>
      <div className="flex flex-row gap-1  border border-transparent p-1 border-box">
        <Select
          placeholder="Pick one"
          onChange={(e) => {
            onChange(e, "textOverflow");
          }}
          type={type}
          value={value.textOverflow}
          allowDeselect
          size="xs"
          data={[
            { value: "clip", label: "Clip" },
            { value: "ellipsis", label: "Ellipsis" },
            { value: "string", label: "String" },
            { value: "initial", label: "Initial" },
            { value: "Inherit", label: "Inherit" },
          ]}
        />
      </div>
    </div>
  );
}
