
function Header() {
  return (
    <div className=" bg-transparent flex flex-row h-28  justify-between items-center">
      <img src={"./images/logo.svg"} className="" alt="" />
      <nav className="text-white flex flex-row gap-5 text-sm">
      <a href="" >About</a>
      <a href="">Careers</a>
      <a href="">Events</a>
      <a href="">Products</a>
      <a href="">Support</a>

      </nav>
    </div>
  )
}

export default Header
