import { useContext } from "react"
import { AppContext } from "../AppContext"

function Header() {
  const {toggleMenu} = useContext(AppContext);

  return (
    <div className=" bg-transparent flex flex-row h-28  justify-between items-center">
      <img src={"./images/logo.svg"} className="" alt="" />
      <nav className="text-white flex flex-row gap-5 max-md:text-sm text-xl md:font-bold max-sm:hidden">
      <a href="" className=" hover:underline underline-offset-8">About</a>
      <a href="" className=" hover:underline underline-offset-8">Careers</a>
      <a href="" className=" hover:underline underline-offset-8">Events</a>
      <a href="" className=" hover:underline underline-offset-8">Products</a>
      <a href="" className=" hover:underline underline-offset-8">Support</a>
      </nav>
      <button 
      onClick={() => {
        toggleMenu();
      }}
      aria-label="click to toggle menu"
      className="block sm:hidden"
      >
        <img src="/images/icon-hamburger.svg" alt="" />
      </button>
    </div>
  )
}

export default Header
