import { Outlet } from "react-router"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
