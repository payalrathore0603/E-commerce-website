import { Search } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";

function SearchComponent(){

    const [inputSearch,setInputSearch]=useState("")
    const [productList,setProductList]=useState([])
    // const [filteredData,setFilteredData]=useState([])

    useEffect(()=>{
        const fetchProductData = async ()=>{
            try {
                const response=await fetch('http://localhost:5000/products');
                const data=await response.json();
                setProductList(data)
                // setFilteredData(data)
            } catch (error)     {
                console.log("Error msg from search",error.message)
            }
        }
        fetchProductData();

       
    },[inputSearch])



    //  if(inputSearch){
    //         filterData=productList.filter((product)=> product.name.include(inputSearch))
    //         // setFilteredData(data)
    //     }

    let filterData=inputSearch? 
    productList.filter(product=>product.name.includes(inputSearch)):
    [];

    const handleChange=(e)=>{
        const value=e.target.value;
        setInputSearch(value)
    }
    return(
        <>
        
       <div className="flex justify-center mt-52 ">

        <div className=" relative  w-3/6 flex group cursor-pointer ">
            <div  className="absolute top-2 pl-1 ">
                <Search className="text-gray-400 text-lg"/>
            </div>
            <input 
            type="text"
            placeholder="Search"
            name=""
            value={inputSearch}
            onChange={handleChange}
            className="border border-gray-300 w-full h-10 outline-none pl-8 focus:ring-2 group-focus:ring-bule-100"
             />
        </div>
        <div>
              <div className="ml-5">
                <button className="underline  text-gray-500 cursor-pointer outline-none" onClick={()=>setInputSearch("")} >cancel</button>
             </div>
        </div>

        

       </div>

       {inputSearch.length > 0 ? (
        <div className="container grid grid-cols-[repeat(auto-fit,minmax[220px,1fr])] md:grid-cols-4 gap-6  m-auto mt-6">
            {filterData.map((product)=>(
              <div key={product.id} >
                  <Cart product={product}/>
              </div>
            ))}
        </div>
       ):(
        <div className="flex items-center flex-col  mt-20 ">
            <p className="text-xs ">Popular Searches</p>
            <div className="mt-5">
                <button className="border border-black p-2 mr-3 text-sm hover:bg-black hover:text-white">CHRISMAS</button>
                <button className="border border-black p-2 mr-3 text-sm hover:bg-black hover:text-white">BARREL JEANS</button>
                <button className="border border-black p-2 mr-3 text-sm hover:bg-black hover:text-white">HIGH RAISE DENIM</button>
                <button className="border border-black p-2 mr-3 text-sm hover:bg-black hover:text-white">LINEN</button> 
            </div>
        </div>
       )
    }
 

        </>
     
    )
}

export default SearchComponent;