import { Outlet } from "react-router"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import { ToastContainer } from "react-toastify"

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
