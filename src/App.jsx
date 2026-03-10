import { Routes,Route } from "react-router-dom"
import Navbar from "./components/layout/Nabar"
import Home from "./components/layout/Home"
import Login from "./components/pages/Login/Login" 

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/:selectedCategory" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
