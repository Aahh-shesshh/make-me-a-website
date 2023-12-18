import { useContext, useEffect, useState } from "react";
import { LayoutCollapse } from "../../components/LayoutCollapse";
import { AppContext } from "../../context/AppContext";
import TextColor from "./TextColor/TextColor";
import TextAlign from "./FontStyles/TextAlign";
import TextOverflow from "./FontStyles/TextOverflow";
import WhiteSpace from "./FontStyles/WhiteSpace";
import FontFamily from "./FontStyles/FontFamily";
import CommonPlate from "../../components/CommonPlate";
import TextDecoration from "./TextDecoration/TextDecoration";

export interface TextProps {
  text: string;
  fontSize: number;
  fontColor: string;
  textAlign: string;
  fontWeight: string;
  letterSpacing: number;
  lineHeight: number;
  textOverflow: string;
  fontFamily: string;
  whiteSpace: string;
}

export const TextComponent = () => {
  const { elementId } = useContext(AppContext);
  const element = document.getElementById(elementId);
  const [fontSizeUnit, setFontSizeUnit] = useState<string>("px");
  const [letterSpacingUnit, setLetterSpacingUnit] = useState<string>("px");
  const [lineHeightUnit, setLineHeightUnit] = useState<string>("px");

  const tag = element?.tagName ?? "";

  const val = {
    text: element?.innerHTML ?? "",
    inputPlaceholder: element?.getAttribute("placeholder"),
    fontSize: parseFloat(element?.style.fontSize),
    fontColor: element?.style.color,
    textAlign: element?.style.textAlign,
    fontWeight: element?.style.fontWeight,
    letterSpacing: parseFloat(element?.style.letterSpacing),
    lineHeight: parseFloat(element?.style.lineHeight),
    textOverflow: element?.style.textOverflow,
    fontFamily: element?.style.fontFamily,
    whiteSpace: element?.style.whiteSpace,
  };

  const [value, setValue] = useState(val);

  useEffect(() => {
    if (element !== null) {
      const tempVal = {
        text: element?.innerHTML,
        inputPlaceholder: element?.getAttribute("placeholder"),
        fontSize: parseFloat(element?.style.fontSize),
        fontColor: element?.style.color,
        textAlign: element?.style.textAlign,
        fontWeight: element?.style.fontWeight,
        letterSpacing: parseFloat(element?.style.letterSpacing),
        lineHeight: parseFloat(element?.style.lineHeight),
        textOverflow: element?.style.textOverflow,
        fontFamily: element?.style.fontFamily,
        whiteSpace: element?.style.whiteSpace,
      };
      setValue({ ...tempVal });
      return;
    }
  }, [element, element?.style, element?.innerHTML]);

  const onChange = (val: number | string, type: string) => {
    if (type === "text") {
      setValue((prevState) => ({ ...prevState, text: String(val) }));
      element.innerHTML = String(val);
    } else if (type === "placeHolderInput") {
      setValue((prevState) => ({
        ...prevState,
        inputPlaceholder: String(val),
      }));
      element.setAttribute("placeholder", String(val));
    } else if (type === "font-size") {
      setValue((prevState) => ({ ...prevState, fontSize: Number(val) }));
      element.style.fontSize = Number(val) + fontSizeUnit;
    } else if (type === "fontSizeUnit") {
      const numericValue = parseFloat(element.style.fontSize);
      setValue((prevState) => ({
        ...prevState,
        fontSize: Number(numericValue),
      }));
      setFontSizeUnit(String(val));
      element.style.fontSize = `${numericValue}${val}`;
    } else if (type === "font-color") {
      setValue((prevState) => ({ ...prevState, fontColor: String(val) }));
      element.style.color = String(val);
    } else if (type === "font-weight") {
      setValue((prevState) => ({ ...prevState, fontWeight: String(val) }));
      element.style.fontWeight = String(val);
    } else if (type === "text-align") {
      if (val === value.textAlign) {
        setValue((prevState) => ({ ...prevState, textAlign: "" }));
        element.style.textAlign = "";
      } else {
        setValue((prevState) => ({ ...prevState, textAlign: String(val) }));
        element.style.textAlign = String(val);
      }
    } else if (type === "text-decoration") {
      setValue((prevState) => ({ ...prevState, textDecoration: String(val) }));
      element.style.textDecoration = String(val);
    } else if (type === "letterSpacing") {
      setValue((prevState) => ({ ...prevState, letterSpacing: Number(val) }));
      element.style.letterSpacing = `${val}` + letterSpacingUnit;
    } else if (type === "letterSpacingUnit") {
      const numericValue = parseFloat(element.style.letterSpacing);
      setValue((prevState) => ({
        ...prevState,
        letterSpacing: Number(numericValue),
      }));
      setLetterSpacingUnit(String(val));
      element.style.letterSpacing = `${numericValue}${val}`;
    } else if (type === "lineHeight") {
      setValue((prevState) => ({ ...prevState, lineHeight: Number(val) }));
      element.style.lineHeight = `${val}` + lineHeightUnit;
    } else if (type === "lineHeightUnit") {
      const numericValue = parseFloat(element.style.lineHeight);
      setValue((prevState) => ({
        ...prevState,
        lineHeight: Number(numericValue),
      }));
      setLineHeightUnit(String(val));
      element.style.lineHeight = `${numericValue}${val}`;
    } else if (type === "textOverflow") {
      setValue((prevState) => ({ ...prevState, textOverflow: String(val) }));
      element.style.textOverflow = String(val);
    } else if (type === "fontFamily") {
      setValue((prevState) => ({ ...prevState, fontFamily: String(val) }));
      element.style.fontFamily = String(val);
    } else if (type === "whiteSpace") {
      setValue((prevState) => ({ ...prevState, whiteSpace: String(val) }));
      element.style.whiteSpace = String(val);
    } else if (type === "text_decoration") {
      setValue((prevState) => ({ ...prevState, textDecoration: String(val) }));
      element.style.textDecoration = String(val);
    }
  };

  return (
    <LayoutCollapse title="Text" initial={true}>
      <div className="space-y-1">
        {(tag === "P" || tag === "BUTTON") && (
          <input
            key={elementId}
            className="rounded-md border w-full p-2 lg:text-sm text-xs"
            value={value.text}
            onChange={(e) => {
              onChange(e.target.value, "text");
            }}
          />
        )}
        {tag === "INPUT" && (
          <input
            key={elementId}
            className="rounded-md border w-full p-2 lg:text-sm text-xs"
            value={value.inputPlaceholder}
            onChange={(e) => {
              onChange(e.target.value, "placeHolderInput");
            }}
          />
        )}
        <CommonPlate
          onChange={onChange}
          inputValue={value.fontSize}
          inputEvent="font-size"
          label="font size: "
          unitChangeEvent="fontSizeUnit"
          type={"string"}
        />
        <CommonPlate
          onChange={onChange}
          inputValue={value.fontWeight}
          inputEvent="font-weight"
          type={"number"}
          label="font weight: "
        />
        <TextAlign onChange={onChange} label="Text align" value={value} />
        <CommonPlate
          type={"string"}
          onChange={onChange}
          inputValue={value.letterSpacing}
          inputEvent="letterSpacing"
          label="Letter Spacing"
          unitChangeEvent="letterSpacingUnit"
        />
        <CommonPlate
          type={"string"}
          onChange={onChange}
          inputValue={value.lineHeight}
          inputEvent="lineHeight"
          label="Line Height"
          unitChangeEvent="lineHeightUnit"
        />
        <TextOverflow onChange={onChange} value={value} type="string" />
        <WhiteSpace onChange={onChange} value={value} type="string" />
        <FontFamily onChange={onChange} value={value} />
        <TextColor onChange={onChange} value={value} />
        <TextDecoration element={element} />
      </div>
    </LayoutCollapse>
  );
};
