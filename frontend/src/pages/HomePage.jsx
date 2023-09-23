import { Link } from "react-router-dom";
import SlideShow from "../components/SlideShow";

export default function HomePage() {
  return (
    <section id="home-page" className="bg-white w-screen">
      <div className="flex flex-col gap-6 w-full items-center justify-center">
        <div
          id="nav"
          className="flex flex-row justify-evenly md:justify-content items-center w-5/6 p-1"
        >
          <div id="logo-div" className="flex justify-center items-center  ">
            <img
              src="https://i.ibb.co/TMdfSt3/nLogo.png"
              className=" w-[300px] h-[125px]"
              id="WoofSpot Logo"
            />
          </div>
          <div id="links" className="flex justify-center items-center gap-12 ">
            <Link
              to="/gowalk"
              className="text-teal-500/50 text-center 
              text-xl font-['italic'] 
            transform  transition duration-500  
            hover:text-[#5c77ae]"
            >
              Go for a walk🐾
            </Link>
            <Link
              to="/Donation"
              className="text-teal-500/75 text-center 
              text-xl font-['italic'] 
            transform  transition duration-500  
            hover:text-[#5c77ae]"
            >
              Donate💲
            </Link>

            <Link
              to="/adoption"
              className="text-center text-2xl font-['italic']
                         capitalize text-teal-400/100 rounded-4xl
                         w-32 bg-white hover:text-[#5c77ae]
                         transform hover:scale-110 transition duration-500 hover:border-[#5c77de]"
            >
              Adoption💕
            </Link>
          </div>
        </div>
        <div id="hero" className="flex items-center w-4/6">
          <div className="w-full lg:w-1/2 p-4">
            <span className="text-2xl text-teal-600 font-Poppins capitalize text-black h-full w-full md:text-5xl">
              Welcome on Woof Spot!
              <p className="text-teal-500/100">
                The place where
                <p className="text-teal-500/75">you&apos;ll never </p>
                <p className="text-teal-500/50">walk</p>
                <p className="text-teal-500/25">alone ...</p>
              </p>
            </span>
            <SlideShow />
          </div>
        </div>
      </div>
    </section>
  );
}
