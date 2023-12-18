import { useClickOutside } from "@mantine/hooks";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppContextProdiver(props) {
  const [elementId, setElementId] = useState(null);
  const ref = useClickOutside(() => {
    // setElementId((prev) => {
    //     if (prev === null) return null
    //     if (document.getElementById(prev)) {
    //         document.getElementById(prev).style.outline = '1px solid transparent'
    //     }
    //     return null;
    // })
  });
  return (
    <AppContext.Provider value={{ elementId, setElementId, ref }}>
      {props.children}
    </AppContext.Provider>
  );
}
