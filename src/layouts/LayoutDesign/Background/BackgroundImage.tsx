import { Checkbox, Collapse, Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { backGroundStyles } from "../../../constants/backGroundStyles";
import { AppContext } from "../../../context/AppContext";
import { GradientLayout } from "../../ColorDesign/Gradient/GradientLayout";

export default function BackgroundImage({ element }: { element: HTMLElement }) {
  const [selectMultiple, setSelectMultiple] = useState<boolean>(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageCount, setImageCount] = useState<number>(1);
  const [showStyles, setShowStyles] = useState<boolean>(false);
  const [selectedBgStyle, setSelectedBgStyle] = useState<string>("Image");
  const [bgPositions, setBgPositions] = useState<string[]>(
    Array(imageCount).fill("")
  );
  const [bgRepeat, setBgRepeat] = useState<string[]>(
    Array(imageCount).fill("")
  );
  const [bgSize, setBgSize] = useState<string[]>(Array(imageCount).fill(""));
  const [bgAttachment, setBgAttachment] = useState<string[]>(
    Array(imageCount).fill("")
  );
  const [bgBlendMode, setBgBlendMode] = useState<string[]>(
    Array(imageCount).fill("")
  );
  const [bgClip, setBgClip] = useState<string[]>(Array(imageCount).fill(""));
  const [bgOrigin, setBgOrigin] = useState<string[]>(
    Array(imageCount).fill("")
  );

  const { elementId } = useContext(AppContext);

  const val = {
    bgImage: element.style.backgroundImage.replace("url(", "").replace(")", ""),
  };

  useEffect(() => {
    if (elementId !== null) {
      const tempVal = {
        bgImage: element.style.backgroundImage
          .replace("url(", "")
          .replace(")", ""),
      };

      setValue({ ...tempVal });
      return;
    }
    // setValue(val);
  }, [elementId, element.style]);

  const [value, setValue] = useState(val);

  const onChange = (val: number | string, type: string, index?: number) => {
    if (type === "bgImage" && !selectMultiple) {
      setImageUrls([]);
      element.style.backgroundImage = `url("${val}")`;
    } else if (type === "imageUrl" && index !== undefined) {
      const updatedImageUrls = [...imageUrls];
      updatedImageUrls[index] = String(val);
      setImageUrls(updatedImageUrls);

      element.style.backgroundImage = `url(${updatedImageUrls.join(
        "), url("
      )})`;
    }

    backGroundStyles.map((styleList) => {
      switch (styleList.value) {
        case "backgroundRepeat":
          if (
            selectMultiple &&
            index !== undefined &&
            type === "backgroundRepeat"
          ) {
            const updatedBgRepeats = [...bgRepeat];

            // Update the value if the index is already present or add it if it's no
            updatedBgRepeats[index] = String(val);

            // Update the state with the new bgRepeats
            setBgRepeat(updatedBgRepeats);

            // Update the element's background image property with individual repeats
            element.style.backgroundRepeat = updatedBgRepeats.join(", ");
          } else {
            element.style.backgroundRepeat = String(val);
          }
          break;
        case "backgroundSize":
          if (
            selectMultiple &&
            index !== undefined &&
            type === "backgroundSize"
          ) {
            const updatedBgSizes = [...bgSize];

            // Update the value if the index is already present or add it if it's no
            updatedBgSizes[index] = String(val);

            // Update the state with the new bgSizes
            setBgSize(updatedBgSizes);

            // Update the element's background image property with individual sizes
            element.style.backgroundSize = updatedBgSizes.join(", ");
          } else {
            element.style.backgroundSize = String(val);
          }
          break;
        case "bgPosition":
          if (selectMultiple && index !== undefined && type === "bgPosition") {
            const updatedBgPositions = [...bgPositions];

            // Update the value if the index is already present or add it if it's no
            updatedBgPositions[index] = String(val);
            console.log(updatedBgPositions);

            // Update the state with the new bgPositions
            setBgPositions(updatedBgPositions);

            // Update the element's background image property with individual positions
            element.style.backgroundPosition = updatedBgPositions.join(", ");
          } else {
            element.style.backgroundPosition = String(val);
          }

          break;
        case "backgroundAttachment":
          if (
            selectMultiple &&
            index !== undefined &&
            type === "backgroundAttachment"
          ) {
            const updatedBgAttachments = [...bgAttachment];

            // Update the value if the index is already present or add it if it's no
            updatedBgAttachments[index] = String(val);

            // Update the state with the new bgAttachments
            setBgAttachment(updatedBgAttachments);

            // Update the element's background image property with individual attachments
            element.style.backgroundAttachment =
              updatedBgAttachments.join(", ");
          } else {
            element.style.backgroundAttachment = String(val);
          }
          break;
        case "backgroundBlendMode":
          if (
            selectMultiple &&
            index !== undefined &&
            type === "backgroundBlendMode"
          ) {
            const updatedBgBlendModes = [...bgBlendMode];

            // Update the value if the index is already present or add it if it's no
            updatedBgBlendModes[index] = String(val);

            // Update the state with the new bgBlendModes
            setBgBlendMode(updatedBgBlendModes);

            // Update the element's background image property with individual blendModes
            element.style.backgroundBlendMode = updatedBgBlendModes.join(", ");
          } else {
            element.style.backgroundBlendMode = String(val);
          }
          break;
        case "backgroundClip":
          if (
            selectMultiple &&
            index !== undefined &&
            type === "backgroundClip"
          ) {
            const updatedBgClips = [...bgClip];

            // Update the value if the index is already present or add it if it's no
            updatedBgClips[index] = String(val);

            // Update the state with the new bgClips
            setBgClip(updatedBgClips);

            // Update the element's background image property with individual clips
            element.style.backgroundClip = updatedBgClips.join(", ");
          } else {
            element.style.backgroundClip = String(val);
          }
          break;
        case "backgroundOrigin":
          if (
            selectMultiple &&
            index !== undefined &&
            type === "backgroundOrigin"
          ) {
            const updatedBgOrigins = [...bgOrigin];

            // Update the value if the index is already present or add it if it's no
            updatedBgOrigins[index] = String(val);

            // Update the state with the new bgOrigins
            setBgOrigin(updatedBgOrigins);

            // Update the element's background image property with individual origins
            element.style.backgroundOrigin = updatedBgOrigins.join(", ");
          } else {
            element.style.backgroundOrigin = String(val);
          }
          break;
      }
    });
  };

  const handleSelectSingleClicck = () => {
    setSelectMultiple((prev) => !prev);
    element.style.backgroundImage = "";
  };

  return (
    <>
      <div className="flex flex-col gap-1 p-1 border-box  space-y-2">
        <p className="text-sm font-bold underline">Background Image</p>
        <div className="flex items-center flex-row gap-3 justify-between px-2">
          <p
            className={`border rounded-md cursor-pointer w-[50%] text-center px-3 ${
              selectedBgStyle === "Image" && "bg-[#cfcfcf]"
            } hover:bg-[#e5e7eb] `}
            onClick={() => setSelectedBgStyle("Image")}
          >
            Image
          </p>
          <p
            className={`border rounded-md cursor-pointer w-[50%] text-center px-3 ${
              selectedBgStyle === "Gradient" && "bg-[#cfcfcf]"
            } hover:bg-[#e5e7eb] `}
            onClick={() => setSelectedBgStyle("Gradient")}
          >
            Gradient
          </p>
        </div>

        {selectedBgStyle === "Image" ? (
          <div className="space-y-2 p-1">
            <div className="flex flex-row gap-4">
              <Checkbox
                label="Single"
                checked={!selectMultiple}
                onChange={handleSelectSingleClicck}
                size="xs"
              />
              <Checkbox
                label="Multiple"
                checked={selectMultiple}
                onChange={handleSelectSingleClicck}
                size="xs"
              />
            </div>
            {!selectMultiple ? (
              <input
                type="string"
                placeholder="Bg Image"
                onChange={(e) => onChange(e.target.value, "bgImage")}
                value={value.bgImage === "initial" ? "" : value.bgImage}
                className=" bg-gray-100 rounded-md border text-sm border-transparent hover:border-gray-200 p-1 border-box"
              />
            ) : (
              <>
                <p className="lg:text-sm text-xs">select multiple images</p>
                <div className="flex flex-col gap-1 relative border">
                  {[...Array(imageCount)].map((_, index) => (
                    <input
                      key={index}
                      className="bg-gray-100 rounded-md border text-sm border-transparent hover:border-gray-200 p-1 border-box"
                      type="text"
                      placeholder={`image ${index + 1}`}
                      onChange={(e) =>
                        onChange(e.target.value, "imageUrl", index)
                      }
                    />
                  ))}
                  <button
                    className="font-bold text-sm bg-black text-white p-2 rounded-md"
                    disabled={imageCount === 5}
                    onClick={() => setImageCount((prev) => prev + 1)}
                  >
                    +Add
                  </button>
                </div>
              </>
            )}
            <>
              <p
                onClick={() => setShowStyles((prev) => !prev)}
                className="text-sm font-semibold cursor-pointer flex flex-row justify-between items-center px-1"
              >
                More BackGround Styles <span>{showStyles ? "-" : "+"}</span>
              </p>
              <Collapse in={showStyles}>
                <div className="space-y-2">
                  {backGroundStyles?.map((style, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-xs underline">{style.label}</p>{" "}
                      {selectMultiple ? (
                        [...Array(imageCount)].map((_, index) => (
                          <div
                            className="flex flex-row items-center gap-1"
                            key={index}
                          >
                            <p className="text-xs whitespace-nowrap">
                              {style.label} for img{index + 1}:
                            </p>{" "}
                            <Select
                              size="xs"
                              placeholder="Pick one"
                              onChange={(e) =>
                                onChange(e, `${style.value}`, index)
                              }
                              type={style.type}
                              data={style.data?.map((d) => ({
                                value: d.value,
                                label: d.label,
                              }))}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="flex flex-row items-center gap-1">
                          <p className="text-xs">{style.label}:</p>
                          <Select
                            placeholder="Pick one"
                            onChange={(e) => {
                              onChange(e, `${style.value}`);
                            }}
                            type={style.type}
                            data={style.data?.map((d) => ({
                              value: d.value,
                              label: d.label,
                            }))}
                            size="xs"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Collapse>
            </>
          </div>
        ) : (
          <>
            <GradientLayout element={element} />
          </>
        )}
      </div>
    </>
  );
}
