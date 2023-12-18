import { MantineProvider } from "@mantine/core"
import Main from "./components/Main"
import { Navbar } from "./components/Navbar"
import AppContextProdiver from "./context/AppContext"


function App() {

  return (
    <MantineProvider>
      <AppContextProdiver>
        <div className="h-[100vh] flex flex-col bg-gray-100 overflow-x-hidden">

          {/*Nav  */}
          <Navbar />

          <Main />

        </div>
      </AppContextProdiver>
    </MantineProvider>
  )
}

export default App
