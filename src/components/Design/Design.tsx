import { useContext, useEffect, useMemo, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";
import { TextComponent } from "../../layouts/TextLayouts/TextComponent";
import { DesignContainer } from "../../layouts/DesignContainer";
import CommonNumberInput from "../CommonNumerInput";
import { randomId } from "@mantine/hooks";
import { onDragEnter, onDragLeave, onDrop } from "../../utils/dragAndDropUtils";

export const Design = () => {
  const { elementId, setElementId } = useContext(AppContext);

  const element = useMemo(
    () => document.getElementById(elementId),
    [elementId]
  );

  const tag = element?.tagName ?? "";

  const deleteChild = () => {
    const element = document.getElementById(elementId);
    const parent = element.parentNode;
    parent.removeChild(element);
    setElementId(null);
  };

  const allowedForText = ["P", "INPUT", "BUTTON"];

  const [columnNumber, setColumnNumber] = useState<number>(0);
  const [rowNumber, setRowNumber] = useState<number>(0);

  // to initially set the number of rows and columns

  useEffect(() => {
    if (element?.classList.contains("row")) {
      setRowNumber(element.childNodes.length);
    } else if (element?.classList.contains("column")) {
      setColumnNumber(element.childNodes.length);
    }

    return () => {
      if (element?.classList.contains("row")) {
        setRowNumber(0);
      } else if (element?.classList.contains("column")) {
        setColumnNumber(0);
      }
    };
  }, [element]);

  const changeId = (id: string, e) => {
    e.preventDefault();
    e.stopPropagation();
    setElementId((prev) => {
      if (prev === id) return id;
      if (document.getElementById(prev)) {
        document.getElementById(prev).style.outline = "1px solid transparent";
      }
      return id;
    });
    if (id !== null && document.getElementById(id)) {
      document.getElementById(id).style.outline = "1px solid #00000050";
    }
  };

  useEffect(() => {
    if (element?.classList.contains("row")) {
      //add a div based on rowNumber of the usestate
      const diff = rowNumber - element.childNodes.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          const divElement = document.createElement("div");
          divElement.style.height = "170px";
          divElement.style.width = "170px";
          divElement.style.padding = "8px";
          divElement.style.borderRadius = "5px";
          divElement.style.background = "#00000030";
          divElement.ondragover = (ev) => ev.preventDefault();
          divElement.ondragenter = (e) => onDragEnter(e);
          divElement.ondragleave = (e) => onDragLeave(e);
          divElement.ondrop = (e) => onDrop(e, changeId);
          divElement.id = randomId();
          divElement.ondragover = (ev) => ev.preventDefault();
          divElement.onclick = (e) => {
            changeId(divElement.id, e);
            e.stopPropagation();
          };
          divElement.draggable = true;
          divElement.ondragstart = (ev) => {
            ev.stopPropagation();
            ev.dataTransfer.setData("tag", "div");
            ev.dataTransfer.setData("div-style", divElement.style.cssText);
          };
          element.appendChild(divElement);
        }
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          element.removeChild(element.lastChild);
        }
      }
    } else if (element?.classList.contains("column")) {
      const diff = columnNumber - element.childNodes.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          const divElement = document.createElement("div");
          divElement.style.height = "100px";
          divElement.style.width = "100%";
          divElement.style.paddingTop = "8px";
          divElement.style.paddingBottom = "8px";
          divElement.style.paddingLeft = "8px";
          divElement.style.borderRadius = "10px";
          divElement.style.paddingRight = "8px";
          divElement.style.background = "#00000030";
          divElement.ondragover = (ev) => ev.preventDefault();
          divElement.ondragenter = () => onDragEnter(element);
          divElement.ondragleave = () => onDragLeave(element);
          divElement.ondrop = (e) => onDrop(e, changeId);
          divElement.id = randomId();
          divElement.ondragover = (ev) => ev.preventDefault();
          divElement.onclick = (e) => {
            changeId(divElement.id, e);
            e.stopPropagation();
          };
          element.appendChild(divElement);
        }
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          element.removeChild(element.lastChild);
        }
      } else return;
    }
  }, [rowNumber, columnNumber]);

  return (
    <div className="overflow-y-scroll h-[95vh] ">
      <div className="flex justify-between  ">
        <p className="text-xl font-semibold text-gray-800">Design</p>
        {elementId !== null && (
          <div className="cursor-pointer" onClick={deleteChild}>
            <BsTrash size={20} />
          </div>
        )}
      </div>
      {elementId !== null && (
        <div className="my-3 flex flex-col gap-2">
          {element.classList.contains("column") && (
            <CommonNumberInput
              title={"Columns"}
              value={columnNumber}
              onChange={setColumnNumber}
            />
          )}
          {element.classList.contains("row") && (
            <CommonNumberInput
              title={"Rows"}
              value={rowNumber}
              onChange={setRowNumber}
            />
          )}
          {allowedForText.includes(tag) && <TextComponent />}
          <DesignContainer />
        </div>
      )}
    </div>
  );
};
