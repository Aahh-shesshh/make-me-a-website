import { Select } from "@mantine/core";
import { TextProps } from "../TextComponent";

export default function WhiteSpace({
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
      <p className="text-xs whitespace-nowrap">WhiteSpace :</p>
      <div className="flex flex-row gap-1  border border-transparent p-1 border-box">
        <Select
          placeholder="Pick one"
          onChange={(e) => {
            onChange(e, "whiteSpace");
          }}
          type={type}
          value={value.whiteSpace}
          allowDeselect
          size="xs"
          data={[
            { value: "normal", label: "Normal" },
            { value: "nowrap", label: "Nowrap" },
            { value: "wrap", label: "Wrap" },
            { value: "pre", label: "Pre" },
            { value: "pre-line", label: "Pre-line" },
            { value: "pre-wrap", label: "Pre-wrap" },
            { value: "initial", label: "Initial" },
            { value: "Inherit", label: "Inherit" },
          ]}
        />
      </div>
    </div>
  );
}
