export const SmallFieldLayout = ({
  value,
  onChange,
  label,
  type = "number",
  disabled,
}: {
  value?: string | number;
  onChange?: (val: string | number) => void;
  label: string;
  type?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="flex disabled:cursor-not-allowed">
      <div className="flex gap-1 bg-gray-100 lg:text-sm text-xs rounded-md border border-transparent hover:border-gray-200 p-1 border-box">
        <p className=" text-gray-500 whitespace-nowrap">{label}</p>
        <input
          disabled={disabled}
          type={type}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value || 0}
          className="lg:w-10 w-8 bg-transparent focus:outline-none font-medium text-gray-600"
        />
      </div>
    </div>
  );
};
