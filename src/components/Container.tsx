import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { onDragEnter, onDragLeave, onDrop } from "../utils/dragAndDropUtils";

export const Container = () => {
  const { setElementId, ref } = useContext(AppContext);

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

  return (
    <div
      ref={ref}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => onDrop(e, changeId)}
      id="container"
      onDragEnter={(e) => onDragEnter(e)}
      onDragLeave={(e) => onDragLeave(e)}
      className="min-h-[87vh] w-[100%] bg-white "
    ></div>
  );
};
