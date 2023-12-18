import { useContext, useState } from "react";
import { Components } from "./Components";
import { Container } from "./Container";
import { Design } from "./Design/Design";
import { AppContext } from "../context/AppContext";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { SiMaterialdesignicons } from "react-icons/si";

export default function Main() {
  const { ref } = useContext(AppContext);

  const [showComponents, setShowComponents] = useState(false);
  const [showDesign, setShowDesign] = useState(false);

  return (
    <main className="h-[100%] ">
      <div className="flex justify-between h-[100%] relative">
        <div
          style={{ flex: "0 0 300px" }}
          className="h-[100%] md:hidden lg:block hidden sm:hidden shadow-md border bg-white p-3"
        >
          <Components />
        </div>

        <div className="overflow-x-scroll">
          <div className="lg:w-[870px] md:w-[670px] z-[9999] w-[500px] sm:w-[570px] min-h-[90vh] p-3 m-2">
            <Container />
          </div>
        </div>
        <div
          ref={ref}
          style={{ flex: "0 0 300px" }}
          className=" h-[100%] shadow-md md:hidden lg:block hidden sm:hidden border bg-white p-3"
        >
          <Design />
        </div>

        {/* for responsive view */}
        {showComponents && (
          <div
            className={`absolute ${
              showComponents ? "top-0 opacity-100 z-0" : "-top-3 opacity-0 z-0"
            } transition-all duration-300 left-0 w-[250px] lg:hidden h-[100%] bg-white shadow-md border p-3`}
          >
            <Components />
          </div>
        )}
        {showDesign && (
          <div
            className={`absolute ${
              showDesign ? "top-0 opacity-100 z-0" : "-top-3 opacity-0 z-0"
            } transition-all duration-300 right-0 w-[250px] lg:hidden h-[100%] bg-white shadow-md border p-3`}
          >
            <Design />
          </div>
        )}

        {/* buttons for responsive view */}
        <div
          className={`flex flex-row items-center  w-fit p-1 gap-2  text-sm  font-bold ${
            showComponents && "bg-gray-200"
          } cursor-pointer hover:bg-gray-200 absolute -top-10 left-2 rounded-md lg:hidden`}
          onClick={() => setShowComponents((prev) => !prev)}
        >
          {!showComponents ? <IoMdMenu /> : <ImCross />}
          <p>Components</p>
        </div>
        <div
          className={`flex flex-row items-center  w-fit p-1 text-sm gap-2 font-bold lg:hidden ${
            showComponents && "bg-gray-200"
          } cursor-pointer hover:bg-gray-200 absolute -top-10 right-2 rounded-md`}
          onClick={() => setShowDesign((prev) => !prev)}
        >
          {!showDesign ? <SiMaterialdesignicons /> : <ImCross />}
          <p>Design</p>
        </div>
      </div>
    </main>
  );
}
