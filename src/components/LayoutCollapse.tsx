import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AiOutlinePlus } from "react-icons/ai";

export const LayoutCollapse = ({
  title,
  children,
  initial = false,
}: {
  title: string;
  children: React.ReactNode;
  initial?: boolean;
}) => {
  const [opened, { toggle }] = useDisclosure(initial);
  return (
    <div>
      <div
        onClick={toggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-md font-medium text-gray-800">{title}</p>
        <AiOutlinePlus />
      </div>
      <Collapse in={opened}>{children}</Collapse>
    </div>
  );
};
