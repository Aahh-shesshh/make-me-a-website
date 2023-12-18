import { heightUnits } from "../constants/unitDimensions";
import UnitBtn from "./DimensionBtn/UnitBtn";
import { SmallFieldLayout } from "./SmallFieldInput";

export interface CommonPlateProps {
  onChange: (val: number | string, type: string) => void;
  label: string;
  inputEvent: string;
  unitChangeEvent?: string;
  inputValue: number | string;
  type?: string;
  disabled?: boolean;
}

export default function CommonPlate({
  onChange,
  inputValue,
  label,
  inputEvent,
  unitChangeEvent,
  type = "number",
  disabled = false,
}: CommonPlateProps) {
  return (
    <div>
      <div className="flex flex-row items-center gap-1 relative">
        <SmallFieldLayout
          type={type}
          label={label}
          disabled={disabled}
          value={inputValue ? inputValue : ""}
          onChange={(e) => {
            onChange(e, inputEvent);
          }}
        />
        {type === "string" && (
          <UnitBtn
            disabled={disabled}
            options={heightUnits}
            onChange={(e) => {
              onChange(e, unitChangeEvent);
            }}
          />
        )}
      </div>
    </div>
  );
}
