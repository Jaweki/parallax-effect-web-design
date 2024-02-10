function HeroSection() {
  return (
    <div className="fixed top-0">
      <img src={"./images/mobile/image-hero.jpg"} className=" object-cover w-full sm:hidden " alt="" />
      <img src={"./images/desktop/image-hero.jpg"} className=" object-cover w-full max-sm:hidden" alt="" />
    </div>
  )
}

export default HeroSection
