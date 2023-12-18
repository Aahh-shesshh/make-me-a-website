export default function UnitBtn({
  onChange,
  disabled,
  options,
}: {
  onChange?: (val: string | number) => void;
  options: { value: string; label: string }[];
  disabled?: boolean;
}) {
  return (
    <div className="border lg:text-[10px] text-[8px] rounded-lg p-1">
      <select onChange={(e) => onChange(e.target.value)} disabled={disabled}>
        {options.map((option) => (
          <option
            value={option.value}
            defaultValue={options[0].value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
