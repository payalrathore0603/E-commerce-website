import { useEffect, useState } from "react";
import Cart from "../pages/Cart";
import {  useParams, useSearchParams } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const {selectedCategory}=useParams(); 
  const [searchParam]=useSearchParams()
  const priceRange=searchParam.get("price")
 
    

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProductData();
  }, []);

  // filteredData Data
  let filteredData= selectedCategory?
  products.filter(product=> product.category.toLowerCase() === selectedCategory.toLowerCase()):
  products;

  if(priceRange){
    const [min,max] =priceRange.split('-')
    filteredData=filteredData.filter((product)=>{
      if(max=='max') return product.price >= Number(min);

      return product.price >= Number(min) && product.price <= Number(max) 
    })
  }

  

  return (
    <>
      <div className="container grid grid-cols-[repeat(auto-fit,minmax[220px,1fr])] md:grid-cols-4 gap-6  m-auto mt-6">
        {filteredData.map((product) => (
          <div key={product.id}>
            <Cart product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
