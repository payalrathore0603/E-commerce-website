import { MenuIcon, Search, ShoppingBag, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



function Navbar() {

  const navigate=useNavigate();


  const handlePriceChange=(e)=>{
    const value=e.target.value;
    navigate(`/?price=${value}`)
  }
  return (
    <>
      <header className="sticky top-0 bg-[#ffffff] shadow-md z-50">
        <div className="container flex justify-between items-center h-16 m-auto">
         
          {/* categories */}
          <div className="hidden md:block">
            <div className="flex gap-4 items-start">
               <div className="group flex flex-col gap-2">
                <Link to="/"  className="text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                  Home
                </Link>
                <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
              <div className="group flex flex-col gap-2">
                <Link to="/category/women"  className="text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                  WOMEN
                </Link>
                <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
              <div className="group flex flex-col gap-2">
                <Link to="/category/men" className="text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                  MEN
                </Link>
                <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </div>
          </div>

          <div className="md:hidden"><MenuIcon className="w-4 h-6 text-gray-800 cursor-pointer"/></div>

          {/* logo */}
          <div>
            <h1 className="font-medium tracking-[0.5em]">EVERLANE</h1>
          </div>

          {/* cart action */}
          <div className="flex  gap-4">
             <div className="flex flex-col gap-2 group">

            


              <span className="hidden lg:block text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                <select name="price-range" id="price-range" className="outline-none" onChange={handlePriceChange}>
                    <option value="" >FILTER</option>
                    <option value="500-1000">500-1000</option>
                    <option value="1000-1500">1000-1500</option>
                    <option value="1500-max">1500+</option>
              </select>
              </span>
              <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <div className="flex flex-col gap-2 group">
              <Link to="/search" className="hidden lg:block text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                SEARCH
              </Link>
              <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <Link  to="/login" className="lg:hidden">
              <Search className="w-4 h-4 text-gray-800 cursor-pointer" />
            </Link>

            <div className="flex flex-col gap-2 group">
              <Link to="/login" className="hidden lg:block text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                Account
              </Link>
              <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <Link to="/login" className="lg:hidden">
              <User className="w-4 h-4 text-gray-800 cursor-pointer" />
            </Link>

            <div className="flex flex-col gap-2 group">
              <span className="hidden lg:block text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                Bag (0)
              </span>
              <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <div className="lg:hidden">
              <ShoppingBag className="w-4 h-4 text-gray-8 00 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
1;
