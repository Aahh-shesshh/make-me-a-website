import { NumberInput } from "@mantine/core";

export default function CommonNumberInput({ value, onChange, title }) {
  return (
    <div className="flex text-xs flex-row gap-2 items-center border border-gray-200 p-2 rounded-md">
      <p className="whitespace-nowrap">{title} Count: </p>
      <NumberInput
        size="xs"
        value={value}
        onChange={onChange}
        allowNegative={false}
        min={0}
      />
    </div>
  );
}
