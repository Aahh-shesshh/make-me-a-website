import { randomId } from "@mantine/hooks";
import { onDragEnter, onDragLeave, onDrop } from "../utils/dragAndDropUtils";

export const appendRowColumn = ({ changeId, element, type }) => {
  const divElement = document.createElement("div");
  divElement.style.height = type === "row" ? "170px" : "100px";
  divElement.style.width = type === "row" ? "170px" : "100%";

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
  return divElement;
};
