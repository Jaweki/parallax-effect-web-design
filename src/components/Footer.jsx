
function Footer() {//
  return (
    <div className="w-full h-full flex flex-col text-white py-9 gap-6 max-sm:relative">
      {/* social links */}
        <div className="flex sm:flex-row w-full sm:justify-between max-sm:justify-center">
          <img src="/images/logo.svg" alt="" width={121}/>
          <div className="flex flex-row gap-3 max-sm:absolute bottom-16">
            <img src="/images/icon-facebook.svg" alt="" height={22} width={22} />
            <img src="/images/icon-twitter.svg" alt="" height={22} width={22} />
            <img src="/images/icon-pinterest.svg" alt="" height={22} width={22} />
            <img src="/images/icon-instagram.svg" alt="" height={22} width={22} />
          </div>
        </div>

        {/*  navlinks and copy right*/}
        <div className="flex sm:flex-row w-full sm:justify-between  font-bold max-sm:flex-col max-sm:items-center">
          <nav className="flex flex-row gap-3 max-sm:flex-col">
            <a href="#about" className=" hover:underline underline-offset-8" >About</a>
            <a href="#careers" className=" hover:underline underline-offset-8" >Careers</a>
            <a href="#events" className=" hover:underline underline-offset-8" >Events</a>
            <a href="#products" className=" hover:underline underline-offset-8" >Products</a>
            <a href="#support" className=" hover:underline underline-offset-8" >Support</a>
          </nav>

          <span className=" text-primary-dark-gray max-sm:absolute bottom-7">&copy; {new Date().getFullYear()} Loopstudios. All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer
