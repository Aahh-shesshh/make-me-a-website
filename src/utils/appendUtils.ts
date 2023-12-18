import { randomId } from "@mantine/hooks";
import { onDragEnter, onDragLeave, onDrop } from "./dragAndDropUtils";

export const appendDiv = (e, styles, changeId) => {
  const element = document.getElementById(e.target.id);
  element.classList.remove("drag-outline");
  const divElement = document.createElement("div");
  if (styles) {
    divElement.style.cssText = styles;
  } else {
    divElement.style.height = "auto";
    divElement.style.width = "auto";
    divElement.style.paddingTop = "8px";
    divElement.style.paddingBottom = "8px";
    divElement.style.paddingLeft = "8px";
    divElement.style.borderRadius = "0px";
    divElement.style.paddingRight = "8px";
    divElement.style.background = "#00000030";
  }
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
  element?.appendChild(divElement);
  element.style.resize = "both";
  divElement.draggable = true;
  divElement.ondragstart = (ev) => {
    ev.stopPropagation();
    ev.dataTransfer.setData("tag", "div");
    ev.dataTransfer.setData("div-style", divElement.style.cssText);
  };
};

export const appendP = (e, styles, innerText, changeId) => {
  const element = document.getElementById(e.target.id);
  const pElement = document.createElement("p");
  if (styles) {
    pElement.style.cssText = styles;
  }
  if (innerText) {
    pElement.innerText = innerText;
  } else {
    pElement.innerText = "This is a text element.";
  }
  pElement.tabIndex = 0;
  pElement.id = randomId();
  pElement.onclick = (e) => changeId(pElement.id, e);
  pElement.draggable = true;
  pElement.ondragstart = (ev) => {
    ev.stopPropagation();
    ev.dataTransfer.setData("tag", "p");
    ev.dataTransfer.setData("p-style", pElement.style.cssText);
    ev.dataTransfer.setData("p-innerText", pElement.innerText);
  };
  element?.appendChild(pElement);
};

export const appendImage = (e, src, styles, changeId) => {
  const element = document.getElementById(e.target.id);
  const imageElement = document.createElement("img");
  if (styles) {
    imageElement.style.cssText = styles;
  } else {
    imageElement.style.height = "200px";
    imageElement.style.width = "200px";
  }
  if (src) {
    imageElement.src = src;
  } else {
    imageElement.src =
      "https://www.thriftstorenepal.com/assets/images/logo.png";
  }

  imageElement.id = randomId();
  imageElement.onclick = (e) => changeId(imageElement.id, e);
  imageElement.draggable = true;
  imageElement.ondragstart = (ev) => {
    ev.stopPropagation();
    ev.dataTransfer.setData("tag", "img");
    ev.dataTransfer.setData("img-src", imageElement.src);
    ev.dataTransfer.setData("img-style", imageElement.style.cssText);
  };
  element?.appendChild(imageElement);
};
export const appendInput = (e, style, placeholder, changeId) => {
  const element = document.getElementById(e.target.id);
  const inputElement = document.createElement("input");
  inputElement.type = "string";
  inputElement.id = randomId();
  if (style) {
    inputElement.style.cssText = style;
  } else {
    inputElement.style.height = "50px";
    inputElement.style.width = "200px";
    inputElement.style.border = "1px solid #00000050";
    inputElement.style.borderRadius = "20px";
    inputElement.style.paddingLeft = "10px";
  }
  inputElement.placeholder = placeholder ?? "Input element.";
  inputElement.onclick = (e) => changeId(inputElement.id, e);
  inputElement.draggable = true;
  inputElement.ondragstart = (ev) => {
    ev.stopPropagation();
    ev.dataTransfer.setData("tag", "input");
    ev.dataTransfer.setData("input-style", inputElement.style.cssText);
    ev.dataTransfer.setData("input-placeholder", inputElement.placeholder);
  };

  element.appendChild(inputElement);
};
export const appendButton = (e, styles, text, changeId) => {
  const element = document.getElementById(e.target.id);
  const buttonElement = document.createElement("button");
  buttonElement.innerText = text ? text : "Button";
  buttonElement.id = randomId();
  if (styles) {
    buttonElement.style.cssText = styles;
  } else {
    buttonElement.style.height = "50px";
    buttonElement.style.width = "200px";
    buttonElement.style.border = "1px solid #00000050";
  }

  buttonElement.onclick = (e) => changeId(buttonElement.id, e);
  buttonElement.draggable = true;
  buttonElement.ondragstart = (ev) => {
    ev.stopPropagation();
    ev.dataTransfer.setData("tag", "button");
    ev.dataTransfer.setData("button-style", buttonElement.style.cssText);
    ev.dataTransfer.setData("button-innerText", buttonElement.innerText);
  };
  element.appendChild(buttonElement);
};

export const appendRadio = (e, styles, changeId) => {
  const element = document.getElementById(e.target.id);
  const radioElement = document.createElement("input");

  radioElement.type = "radio";
  radioElement.id = randomId();
  if (styles) {
    radioElement.style.cssText = styles;
  } else {
    radioElement.style.height = "auto";
    radioElement.style.width = "auto";
  }

  radioElement.onclick = (e) => {
    changeId(radioElement.id, e);
  };
  radioElement.draggable = false;
  radioElement.defaultChecked = true;

  radioElement.ondragstart = (ev) => {
    ev.stopPropagation();
    ev.dataTransfer.setData("tag", "radio");
    ev.dataTransfer.setData("radio-style", radioElement.style.cssText);
    ev.dataTransfer.setData("radio-innerText", radioElement.innerText);
  };
  element.appendChild(radioElement);
};

export const appendColumns = (e, changeId) => {
  const element = document.getElementById(e.target.id);

  const wrapperElement = document.createElement("div");
  wrapperElement.style.display = "flex";
  wrapperElement.classList.add("column");
  wrapperElement.style.padding = "2px";
  wrapperElement.style.width = "full";
  wrapperElement.id = randomId();

  wrapperElement.style.flexDirection = "column";
  wrapperElement.style.alignItems = "center";
  wrapperElement.style.gap = "10px";
  wrapperElement.style.border = "1px solid #00000030";
  wrapperElement.onclick = (e) => {
    changeId(wrapperElement.id, e);
    e.stopPropagation();
  };

  for (let i = 0; i < 4; i++) {
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
    divElement.ondragenter = onDragEnter;
    divElement.ondragleave = onDragLeave;
    divElement.ondrop = () => onDrop;
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
    wrapperElement.appendChild(divElement);
  }
  element.appendChild(wrapperElement);
};

export const appendRows = (e, changeId) => {
  const element = document.getElementById(e.target.id);

  const wrapperElement = document.createElement("div");
  wrapperElement.style.display = "flex";
  wrapperElement.classList.add("row");
  wrapperElement.style.padding = "2px";
  wrapperElement.style.width = "full";
  wrapperElement.id = randomId();
  wrapperElement.style.flexDirection = "row";
  wrapperElement.style.alignItems = "center";
  wrapperElement.style.justifyContent = "space-between";
  wrapperElement.style.gap = "10px";
  wrapperElement.style.border = "1px solid #00000030";
  wrapperElement.onclick = (e) => {
    changeId(wrapperElement.id, e);
    e.stopPropagation();
  };
  wrapperElement.ondragover = (ev) => {
    // Prevent the default dragover behavior to disable dropping into the wrapper
    ev.preventDefault();
  };

  for (let i = 0; i < 5; i++) {
    const divElement = document.createElement("div");
    divElement.style.height = "150px";
    divElement.style.width = "150px";
    divElement.style.padding = "8px";
    divElement.style.borderRadius = "5px";
    divElement.style.background = "#00000030";
    divElement.ondragover = (ev) => ev.preventDefault();
    divElement.ondragenter = onDragEnter;
    divElement.ondragleave = onDragLeave;
    divElement.ondrop = () => onDrop;
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
    wrapperElement.appendChild(divElement);
  }
  element.appendChild(wrapperElement);
};
