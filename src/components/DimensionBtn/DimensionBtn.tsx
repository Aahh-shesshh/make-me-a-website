"use client";

interface OptionsInterface {
  value: string;
  label: string;
  type: string;
}
// import { Group, Radio, Select } from "@mantine/core";

export default function DimensionInput({
  options,
  setCurrentDimension,
  value,
  currentDimension,
}: {
  options: OptionsInterface[];
  setCurrentDimension: React.Dispatch<React.SetStateAction<[]>>;
  currentDimension: { value: string; dimension: string }[]; // Update this type to match your state;
  value: string;
}) {
  const changeValue = (e) => {
    // Clone the existing dimension array to avoid mutating the original array
    const updatedDimension = [...currentDimension];

    // Check if there is an object in the array with the same 'value'
    const index = updatedDimension.findIndex((item) => item.value === value);

    if (index !== -1) {
      // If a matching object is found, update its 'dimension' property
      updatedDimension[index].dimension = e.target.value;
    } else {
      // If no matching object is found, create a new one and push it to the array
      updatedDimension.push({ value: value, dimension: e.target.value }); // You can replace "px" with the desired default dimension
    }

    // Set the updated dimension array using your setCurrentDimension function
    setCurrentDimension(updatedDimension);
  };

  return (
    <div className="flex flex-row items-center border rounded-md gap-0">
      <select onChange={(e) => changeValue(e)}>
        {options.map((option) => (
          <option value={option.value} defaultValue={options[0].value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
