import { CiSearch } from "react-icons/ci";
import { BsGlobe, BsImage } from "react-icons/bs";
import { RxText } from "react-icons/rx";
import { FiMaximize } from "react-icons/fi";
import { IconType } from "react-icons";
import { RxInput, RxButton } from "react-icons/rx";
import { IoIosRadioButtonOn } from "react-icons/io";
import { SiGoogleforms } from "react-icons/si";
import { GoColumns, GoRows } from "react-icons/go";

type ComponentsType = {
  title: string;
  icon: React.ReactElement;
  childrens: ComponentType[];
};

type ComponentType = {
  title: string;
  icon: IconType;
  tag: string;
};

const COMPONENT_LIST: ComponentsType[] = [
  {
    title: "Basic",
    icon: <BsGlobe />,
    childrens: [
      {
        title: "Container",
        icon: FiMaximize,
        tag: "div",
      },
      {
        title: "Text",
        icon: RxText,
        tag: "p",
      },
      {
        title: "Image",
        icon: BsImage,
        tag: "img",
      },
    ],
  },
  {
    title: "Form",
    icon: <SiGoogleforms />,
    childrens: [
      {
        title: "Input",
        icon: RxInput,
        tag: "input",
      },
      {
        title: "Button",
        icon: RxButton,
        tag: "button",
      },
      {
        title: "Radio",
        icon: IoIosRadioButtonOn,
        tag: "radio",
      },
    ],
  },
  {
    title: "Layout",
    icon: <SiGoogleforms />,
    childrens: [
      {
        title: "Rows",
        icon: GoColumns,
        tag: "rows",
      },
      {
        title: "Column",
        icon: GoRows,
        tag: "column",
      },
    ],
  },
];

export const Components = () => {
  return (
    <>
      <p className="lg:text-xl md:text-lg sm:text-base text-base font-semibold text-gray-800">
        Components
      </p>
      <div className="lg:p-2 relative md:p-1 sm:p-1 p-1 rounded bg-gray-200 flex flex-start items-center gap-2 my-3">
        <CiSearch size={20} className="absolute left-1 lg:top-2 md:top-1 sm:top-1 top-1" />
        <input
          className="flex-1 font-light text-sm placeholder:font-light placeholder:text-sm pl-6 bg-transparent focus:outline-none"
          placeholder="Search components . . ."
        />
      </div>
      <div className="space-y-3">
        {COMPONENT_LIST.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                {item.icon}
                <p className="font-medium">{item.title}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.childrens.map((children, index) => (
                  <Component key={index} item={children} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Component = ({ item }: { item: ComponentType }) => {
  return (
    <div
      className="flex flex-col bg-gray-200 lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-16 sm:w-16 h-16 w-16 p-1 rounded-md"
      draggable
      onDragStart={(ev) => {
        ev.dataTransfer.setData("tag", item.tag);
      }}
    >
      <div className="flex-1 flex justify-center items-center">
        <item.icon size={25} />
      </div>
      <div className="py-0.5 bg-black text-white rounded-md text-center">
        <p className="text-xs">{item.title}</p>
      </div>
    </div>
  );
};
