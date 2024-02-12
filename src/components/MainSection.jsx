import Header from "./Header"
import Footer from "./Footer";

export const creations = [
  {
    imageUrl: {
      desktop: "/images/desktop/image-deep-earth.jpg",
      mobile: "/images/mobile/image-deep-earth.jpg",
    },
    name: "DEEP EARTH",
  },
  {
    imageUrl: {
      desktop: "/images/desktop/image-night-arcade.jpg",
      mobile: "/images/mobile/image-night-arcade.jpg"
    },
    name: "NIGHT ARCADE",
  },
  {
    imageUrl: {
      desktop: "/images/desktop/image-soccer-team.jpg",
      mobile: "/images/mobile/image-soccer-team.jpg"
    },
    name: "SOCCER TEAM VR",
  },
  {
    imageUrl: {
      desktop: "/images/desktop/image-grid.jpg",
      mobile: "/images/mobile/image-grid.jpg"
    },
    name: "THE GRID",
  },
  {
    imageUrl: {
      desktop: "/images/desktop/image-from-above.jpg",
      mobile: "/images/mobile/image-from-above.jpg"
    },
    name: "FROM ABOVE VR",
  },
  {
    imageUrl: {
      desktop: "/images/desktop/image-pocket-borealis.jpg",
      mobile: "/images/mobile/image-pocket-borealis.jpg",
    },
    name: "POCKET BOREALIS",
  },
  {
    imageUrl: {
      desktop: "/images/desktop/image-curiosity.jpg",
      mobile: "/images/mobile/image-curiosity.jpg",
    },
    name: "THE CURIOSITY",
  },
  {
    imageUrl: {
      desktop: "/images/desktop/image-fisheye.jpg",
      mobile: "/images/mobile/image-fisheye.jpg"
    },
    name: "MAKE IT FISHEYE",
  },
];


function MainSection() {
  return (
    <div className=" absolute top-0 w-full flex flex-col gap-32  z-50">
      {/* hero text */}
      <div className="w-full h-[30rem] max-xl:h-[35rem] max-lg:h-[40rem] flex flex-col xl:justify-between px-32 max-md:px-16 lg:gap-24 md:gap-16 max-sm:gap-64 max-sm:px-8">
        <Header/>
        <h1 className="border border-solid border-white p-7 max-sm:p-4 text-white text-7xl max-xl:text-6xl max-lg:text-5xl font-thin w-[40rem] max-lg:w-[30rem] max-xl:w-[35rem] font-josefin max-sm:w-[25rem] max-sm:text-[2.7rem]">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
      
      {/* interactive section */}
      <div className="w-full bg-white px-32 max-sm:px-8 py-36 max-lg:py-18 max-sm:py-14 flex flex-col gap-40 max-sm:gap-16">
        <div className=" flex lg:flex-row max-lg:flex-col relative gap-4">
          <img src="/images/desktop/image-interactive.jpg" alt="" className="max-sm:w-full" />
          <p className="flex flex-col bg-white w-[50%] max-lg:w-full lg:absolute bottom-0 right-0 pt-20 pl-16 max-sm:p-8 gap-5 max-sm:w-full">
            <span className="text-4xl max-md:text-3xl">THE LEADER IN INTERACTIVE VR</span>
            <span className=" text-gray-400 font-bold">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-wining creations have transformed businesses throught digital experiences that bind to their brand.</span>
          </p>
        </div>

        {/* our creations */}
        <div className="w-full flex flex-col gap-16 max-sm:relative">
          <div className=" flex flex-row w-full justify-between">
            <h1 className="text-4xl">OUR CREATIONS</h1>
            <button className=" w-36 border-2 border-solid border-primary-dark-gray font-bold max-sm:absolute max-sm:-bottom-10 max-sm:left-[23vw] hover:bg-black hover:text-white hover:border-0">SEE ALL</button>
          </div>

          <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-1">
            {/*  map creation cards*/}
            {creations.map((item) => (
              <figure  className="relative cursor-pointer" key={item.name}>
                <img src={item.imageUrl.desktop} alt="" className=" object-cover scale-95  transition-transform duration-300 block max-sm:hidden"/>
                <img src={item.imageUrl.mobile} alt="" className=" object-cover scale-95  transition-transform duration-300 hidden max-sm:block"/>

                
                <figcaption className=" absolute inset-0 flex flex-col justify-end text-white p-5 hover:bg-white hover:bg-opacity-25 transition-colors duration-500">
                    <h3 className=" pointer-events-none w-32 text-2xl">
                      {item.name}
                    </h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black w-full h-[135px] max-sm:h-[55vh] -mt-[8rem] px-32 max-lg:px-10 max-sm:px-7" >
        <Footer />
      </div>
    </div>
  )
}

export default MainSection
