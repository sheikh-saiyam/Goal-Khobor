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
        <div className="bg-red-500/90 text-sm md:text-base p-1 md:p-2 w-fit text-white font-semibold tracking-widest">
          Breaking News
        </div>
        <div className="flex w-full md:w-fit flex-grow">
          <span className="wavey-typewriter text-sm md:text-base">
            <Typewriter
              words={[
                "Transfers LIVE: Neymar eyes Barca return despite Santos reunion",
                "Ancelotti dismisses concerns over Vinicius future amid Saudi links",
                "Manchester City 4-0 Newcastle United: Marmoush's Hat-Trick Powers City's Dominant Victory",
                "Arsenal 2-0 Leicester City: Mikel Merino's Late Brace Keeps Arsenal in Title Race",
                "Osasuna 1-1 Real Madrid: Mbappé Scores but Bellingham's Red Card Costs Madrid",
                "Atlético Madrid 1-1 Celta Vigo: Sørloth Rescues Point After Early Red Card",
                "Fulham 2-1 Nottingham Forest: Bassey's Late Header Secures Vital Win",
                "Brentford 1-0 West Ham: Schade’s Early Goal Deepens West Ham’s Woes",
                "Bournemouth 3-1 Southampton: Cherries Climb Above Chelsea ",
                "Crystal Palace 1-2 Everton: Alcaraz’s Late Strike Secures Everton's Victory",
                "Real Madrid's Stunning Comeback in Champions League",
                "Bellingham strikes late for Real Madrid in 3-2 win at Man City ",
              ]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
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
