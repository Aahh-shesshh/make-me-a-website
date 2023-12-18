import { Select } from "@mantine/core";

export default function Overflow({
  onChange,
  value,
  type = "string",
}: {
  onChange: (val: number | string, type: string) => void;
  value: string;
  type?: string;
}) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <p className="lg:text-sm text-xs">Overflow: </p>
      <div className="flex flex-row gap-1  border border-transparent p-1 border-box">
        <Select
          placeholder="Pick one"
          onChange={(e) => {
            onChange(e, "overflow");
          }}
          type={type}
          value={value}
          allowDeselect
          size="xs"
          data={[
            { value: "visible", label: "Visible" },
            { value: "hidden", label: "Hidden" },
            { value: "scroll", label: "Scroll" },
            { value: "auto", label: "Auto" },
            { value: "initial", label: "Initial" },
            { value: "inherit", label: "Inherit" },
          ]}
        />
      </div>
    </div>
  );
}
