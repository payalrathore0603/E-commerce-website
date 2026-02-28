import { MenuIcon, Search, ShoppingBag, User } from "lucide-react";

function Navbar() {
  return (
    <>
      <header className="sticky top-0 bg-[#ffffff] shadow-md z-50">
        <div className="container flex justify-between items-center h-16 m-auto">
         
          {/* categories */}
          <div className="hidden md:block">
            <div className="flex gap-4 items-start">
              <div className="group flex flex-col gap-2">
                <span className="text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                  WOMEN
                </span>
                <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
              <div className="group flex flex-col gap-2">
                <span className="text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                  MEN
                </span>
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
                SEARCH
              </span>
              <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <div className="lg:hidden">
              <Search className="w-4 h-4 text-gray-800 cursor-pointer" />
            </div>

            <div className="flex flex-col gap-2 group">
              <span className="hidden lg:block text-[#191919] text-xs cursor-pointer tracking-wider font-medium">
                Account
              </span>
              <div className="h-[2px] w-full bg-gray-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <div className="lg:hidden">
              <User className="w-4 h-4 text-gray-800 cursor-pointer" />
            </div>

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
