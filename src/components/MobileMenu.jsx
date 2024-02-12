import { useContext } from "react"
import { AppContext} from '../AppContext';

function MobileMenu() {
    const {isMenuOpen, toggleMenu} = useContext(AppContext);

  return (
    <div className={` origin-bottom-right {${isMenuOpen ? ' scale-100 transition-all duration-700 ease-in-out absolute inset-0 w-screen h-screen bg-black text-white p-10 z-50 sm:hidden flex flex-col gap-32 ': 'scale-0 transition-all duration-700 ease-in-out'}}`} >
        <div className="flex flex-row justify-between">
            <img src="/images/logo.svg" alt="" />

            <button onClick={() => toggleMenu()} aria-label="click to close menu" className="w-10 flex flex-col gap-4 ">
                <div className={` bg-white h-1 w-full ${isMenuOpen ? ' rotate-45 transition-transform duration-1000 ease-in translate-y-3' : 'transition-transform duration-1000 ease-in rotate-0 translate-y-0'}`} />
                <div className={`bg-white h-1 w-full ${isMenuOpen ? '-rotate-45 transition-transform duration-1000 ease-in -translate-y-2' : 'rotate-0 transition-transform duration-1000 ease-in -translate-y-0'}`} />
            </button>
        </div>

        <nav className="text-white flex flex-col gap-5 text-3xl ">
            <a href="" >ABOUT</a>
            <a href="">CAREERS</a>
            <a href="">EVENTS</a>
            <a href="">PRODUCTS</a>
            <a href="">SUPPORT</a>
        </nav>
    </div>
  )
}

export default MobileMenu