"use client";
import moment from "moment";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const TopNavbar = () => {
  return (
    <div className="py-3 flex items-center flex-wrap gap-4 border-b-2 border-black">
      {/* Date Time Div */}
      <div className="hidden lg:flex">{moment().format("LLLL")}</div>
      {/* Breaking News Div */}
      <div className="flex items-center flex-grow gap-2">
        <div className="bg-red-500/90 p-1 md:p-2 w-fit text-white font-semibold tracking-widest">
          Breaking News
        </div>
        <div className="flex w-full md:w-fit flex-grow">
          <span className="wavey-typewriter">
            <Typewriter
              words={[
                "Real Madrid close in on Vinicius contract extension amid Saudi interest",
                "Bayern sink Celtic as Feyenoord beat Milan in Champions League play-offs",
                "Liverpool held by Everton, 4 red cards in fiery last Goodison Park derby",
              ]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>
      {/* Social Icon Div */}
      <div className="hidden lg:flex gap-3 items-center">
        <span className="hover:scale-105">
          <FaFacebook size={20} />
        </span>
        <span className="hover:scale-105">
          <FaInstagramSquare size={22} />
        </span>
        <span className="hover:scale-105">
          <BsLinkedin size={19} />
        </span>
      </div>
    </div>
  );
};

export default TopNavbar;
