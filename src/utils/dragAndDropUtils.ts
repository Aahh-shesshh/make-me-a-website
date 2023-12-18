// import { appendDiv } from "./appendUtils";

import {
  appendButton,
  appendColumns,
  appendDiv,
  appendImage,
  appendInput,
  appendP,
  appendRadio,
  appendRows,
} from "./appendUtils";

//drag and drop utils

export const onDragEnter = (e) => {
  const element = document.getElementById(e.target.id);
  element?.classList.add("drag-outline");
};

export const onDragLeave = (e) => {
  const element = document.getElementById(e.target.id);

  element?.classList.remove("drag-outline");
};

export const onDrop = (e, changeId) => {
  e.preventDefault();
  e.stopPropagation();

  const tag = e.dataTransfer.getData("tag");

  switch (tag) {
    case "div":
      appendDiv(e, e.dataTransfer.getData("div-style"), changeId);
      break;
    case "p":
      appendP(
        e,
        e.dataTransfer.getData("p-style"),
        e.dataTransfer.getData("p-innerText"),
        changeId
      );
      break;
    case "img":
      appendImage(
        e,
        e.dataTransfer.getData("img-src"),
        e.dataTransfer.getData("img-style"),
        changeId
      );
      break;
    case "input":
      appendInput(
        e,
        e.dataTransfer.getData("input-style"),
        e.dataTransfer.getData("input-placeholder"),
        changeId
      );
      break;
    case "button":
      appendButton(
        e,
        e.dataTransfer.getData("button-style"),
        e.dataTransfer.getData("button-innerText"),
        changeId
      );
      break;
    case "radio":
      appendRadio(e, e.dataTransfer.getData("radio-style"), changeId);
      break;
    case "rows":
      appendRows(e, changeId);
      break;
    case "column":
      appendColumns(e, changeId);
      break;
  }
};
