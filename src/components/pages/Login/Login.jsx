function Login(){
    return(
        <div className="flex justify-center items-center min-h-screen overflow-hidden ">
        <div className="container md:shadow-lg  max-w-md w-full ">
            <h1 className="font-semibold text-2xl tracking-[0.7em] md:tracking-[1em] text-center mt-7 mb-5 transition-all cursor-pointer">EVERLANE</h1>
            <div className=" m-5 space-y-1">
                <h3 className="text-xl  ">Sign in</h3>
                <p className=" text-gray-500 text-[1rem]">sign in or create an account</p>
            </div>
            <div className="m-4 text-center bg-blue-700">
                <button className="text-white font-semibold p-2  w-full ">Continue with Google</button>
            </div>

            <div className="m-4 flex justify-center items-center">
                <div className="border border-t bg-gray-300 flex-grow "></div>
                <span className="text-gray-500 ml-1 mr-1">or</span>
                <div className="border border-t bg-gray-300 flex-grow"></div> 
            </div>
            <div className="m-4 border border-gray-600 ">
                <input type="text" placeholder="Email" className=" outline-none w-full p-2 fcous:ring-2 focus:ring-gray-700"/>
            </div>
            <div className="m-4 text-center bg-black mb-5">
                 <button className=" w-full  text-white font-semibold p-2">Continue</button>
            </div>
          
        </div>
        </div>
    )
}

export default Login;