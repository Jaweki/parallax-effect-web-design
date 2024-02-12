import Header from "./Header"
import Footer from "./Footer";

export const creations = [
  {
    imageUrl: "/images/desktop/image-deep-earth.jpg",
    name: "DEEP EARTH",
  },
  {
    imageUrl: "/images/desktop/image-night-arcade.jpg",
    name: "NIGHT ARCADE",
  },
  {
    imageUrl: "/images/desktop/image-soccer-team.jpg",
    name: "SOCCER TEAM VR",
  },
  {
    imageUrl: "/images/desktop/image-grid.jpg",
    name: "THE GRID",
  },
  {
    imageUrl: "/images/desktop/image-from-above.jpg",
    name: "FROM ABOVE VR",
  },
  {
    imageUrl: "/images/desktop/image-pocket-borealis.jpg",
    name: "POCKET BOREALIS",
  },
  {
    imageUrl: "/images/desktop/image-curiosity.jpg",
    name: "THE CURIOSITY",
  },
  {
    imageUrl: "/images/desktop/image-fisheye.jpg",
    name: "MAKE IT FISHEYE",
  },
];


function MainSection() {
  return (
    <div className=" absolute top-0 w-full flex flex-col gap-32 max-sm:gap-56 z-50">
      {/* hero text */}
      <div className="w-full h-[30rem] max-xl:h-[35rem] max-lg:h-[40rem] flex flex-col xl:justify-between px-32 lg:gap-24 md:gap-16">
      <Header/>
      <h1 className="border border-solid border-white p-7 text-white text-7xl max-xl:text-6xl max-lg:text-5xl font-thin w-[40rem] max-lg:w-[30rem] max-xl:w-[35rem] font-josefin">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
      
      {/* interactive section */}
      <div className="w-full bg-white px-32 py-36 flex flex-col gap-40">
        <div className=" flex flex-row relative">
          <img src="/images/desktop/image-interactive.jpg" alt="" className="" />
          <p className="flex flex-col bg-white w-[50%] absolute bottom-0 right-0 pt-20 pl-16 gap-5 max-sm:hidden">
            <span className="text-4xl">THE LEADER IN INTERACTIVE VR</span>
            <span className=" text-gray-400 font-bold">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-wining creations have transformed businesses throught digital experiences that bind to their brand.</span>
          </p>
        </div>

        {/* our creations */}
        <div className="w-full flex flex-col gap-16">
          <div className=" flex flex-row w-full justify-between">
            <h1 className="text-4xl">OUR CREATIONS</h1>
            <button className=" w-36 border-2 border-solid border-primary-dark-gray font-bold">SEE ALL</button>
          </div>

          <div className="grid grid-cols-4 gap-1">
            {/*  map creation cards*/}
            {creations.map((item) => (
              <figure  className="relative cursor-pointer" key={item.name}>
                <img src={item.imageUrl} alt="" className=" object-cover scale-95  transition-transform duration-300 block"/>

                
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
      <div className="bg-black w-full h-[135px] -mt-[8rem] px-32" >
        <Footer />
      </div>
    </div>
  )
}

export default MainSection
