import { Routes,Route } from "react-router-dom"
import Navbar from "./components/layout/Nabar"
import Home from "./components/layout/Home"
import Login from "./components/pages/Login/Login" 
import SearchComponent from "./components/pages/SearchComponent"



function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/category/:selectedCategory" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/search" element={<SearchComponent/>}/>
    </Routes>
    </>
  )
}

export default App
