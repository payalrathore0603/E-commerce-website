import { useEffect, useState } from "react"
import Navbar from "./components/layout/Nabar"
import Cart from "./components/pages/Cart"
import Login from "./components/pages/Login/Login"

function App() {

  const [products,setProducts]=useState([]);
  
  useEffect(()=>{
    const fetchProductData=async()=>{
      try {
        const response=await fetch('http://localhost:5000/products')
        const data=await response.json();
        setProducts(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProductData()
  },[])

  return (
    <>
    <Navbar/>
    <div className="container grid grid-cols-[repeat(auto-fit,minmax[2200px,1fr])] md:grid-cols-4 gap-6  m-auto mt-6">
      {products.map((product)=>
       (<div key={product.id}><Cart product={product}/></div>
      ))}
    </div>
    {/* <Login/> */}
    </>
  )
}

export default App
