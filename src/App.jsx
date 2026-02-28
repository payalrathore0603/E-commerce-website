import Navbar from "./components/layout/Nabar"
import Cart from "./components/pages/Cart"

function App() {
  return (
    <>
    <Navbar/>
    <div className="container grid grid-cols-4 grid-rows-1 gap-3 m-auto mt-6">
      <Cart/>
    </div>
    </>
  )
}

export default App
