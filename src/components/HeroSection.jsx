
import { useEffect } from "react"

function HeroSection() {

  useEffect(() => {
    const heroElement = document.getElementById('hero');

    function handleScrolling() {
      const value = window.scrollY;

      heroElement.style.top = value * 0.8 + 'px';
    }

    window.addEventListener("scroll", () => handleScrolling());

    return window.removeEventListener('scroll', handleScrolling );
   });

  return (
    <div id="hero" className="absolute top-0 w-full h-[40rem] bg-transparent z-10">
      <img src={"./images/mobile/image-hero.jpg"} className=" object-cover w-full sm:hidden" alt=""  />
      <img src={"./images/desktop/image-hero.jpg"} className=" object-cover w-full max-sm:hidden" alt="" />
    </div>
  )
}

export default HeroSection
