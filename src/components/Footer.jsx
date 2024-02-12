
function Footer() {
  return (
    <div className="w-full h-full flex flex-col text-white py-9 gap-6">
      {/* social links */}
        <div className="flex flex-row w-full justify-between">
          <img src="/images/logo.svg" alt="" width={121}/>
          <div className="flex flex-row gap-3">
            <img src="/images/icon-facebook.svg" alt="" height={22} width={22} />
            <img src="/images/icon-twitter.svg" alt="" height={22} width={22} />
            <img src="/images/icon-pinterest.svg" alt="" height={22} width={22} />
            <img src="/images/icon-instagram.svg" alt="" height={22} width={22} />
          </div>
        </div>

        {/*  navlinks and copy right*/}
        <div className="flex flex-row w-full justify-between  font-bold">
          <nav className="flex flex-row gap-3">
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#events">Events</a>
            <a href="#products">Products</a>
            <a href="#support">Support</a>
          </nav>

          <span className=" text-primary-dark-gray">&copy; {new Date().getFullYear()} Loopstudios. All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer
