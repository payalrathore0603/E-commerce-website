function Cart({product}) {
  const {name,images,price,shortDescription,colors,category}=product

  return (
    <>
      <div className=" border border-gray-100 shadow-sm overflow-hidden  hover:shadow-md transition-all ">
        {/* Image */}
        <div className="relative group overflow-hidden">
          <img
            src={images.primary}
            alt="Primary-image"
            className="w-full aspect-[3/4] object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

           <img
            src={images.secondary}
            alt="secondary-image"
            className="absolute inset-0 w-full h-auto object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />

          <button className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 w-[90%] bg-white/90 backdrop-blur-sm text-gray-800 py-2 text-sm font-medium 
                           opacity-0 translate-y-4 transition-all duration-300 
                           group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white">Quick ADD +</button>
        </div>

        {/* Info Section */}
        <div className="p-4 space-y-1">
          <h4 className="text-gray-800 font-medium truncate">{name}</h4>
          <p className="text-gray-600 text-sm ">
            Rs.<span className="font-semibold">{price} INR, For {category}</span>
          </p>
          <div className="flex items-center gap-2 pt-2">
            {colors?.map((color,index)=>(
              <div 
              key={index}
              className="h-4 w-4  border rounded-full shadow-lg cursor-pointer  hover:scale-105 transition-transform"
              style={{backgroundColor: color }}></div>
            ))}
          </div>
          <p className="text-sm">{shortDescription}</p> 
        </div>
      </div>

      {/* Cart end here */}


    </>
  );
}

export default Cart;
