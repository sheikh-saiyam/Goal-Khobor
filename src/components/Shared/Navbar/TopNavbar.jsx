"use client";
import moment from "moment";
import { Typewriter } from "react-simple-typewriter";
import { Facebook, Instagram, Linkedin, AlertCircle } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="py-3 flex items-center flex-wrap gap-4 border-b border-border">
      {/* Date Time Div */}
      <div className="hidden lg:flex text-sm md:text-base">
        {moment().format("LLLL")}
      </div>

      {/* Breaking News Div */}
      <div className="flex items-center flex-grow gap-2">
        <div className="bg-destructive text-sm p-2 w-fit text-destructive-foreground font-semibold tracking-widest flex items-center gap-1">
          <AlertCircle className="w-4 h-4 -mt-0.5" />
          Breaking <span className="hidden lg:flex">News</span>
        </div>
        <div className="flex w-full md:w-fit flex-grow">
          <span className="wavey-typewriter text-xs md:text-sm text-muted-foreground">
            <Typewriter
              words={[
                "Transfers LIVE: Neymar eyes Barca return despite Santos reunion",
                "Ancelotti dismisses concerns over Vinicius future amid Saudi links",
                "Manchester City 4-0 Newcastle United: Marmoush's Hat-Trick Powers City's Dominant Victory",
                "Arsenal 2-0 Leicester City: Mikel Merino's Late Brace Keeps Arsenal in Title Race",
                "Osasuna 1-1 Real Madrid: Mbappé Scores but Bellingham's Red Card Costs Madrid",
                "Atlético Madrid 1-1 Celta Vigo: Sørloth Rescues Point After Early Red Card",
                "Fulham 2-1 Nottingham Forest: Bassey's Late Header Secures Vital Win",
                "Brentford 1-0 West Ham: Schade's Early Goal Deepens West Ham's Woes",
                "Bournemouth 3-1 Southampton: Cherries Climb Above Chelsea ",
                "Crystal Palace 1-2 Everton: Alcaraz's Late Strike Secures Everton's Victory",
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
        <button className="hover:scale-105 transition-transform text-muted-foreground hover:text-foreground">
          <Facebook size={18} />
        </button>
        <button className="hover:scale-105 transition-transform text-muted-foreground hover:text-foreground">
          <Instagram size={20} />
        </button>
        <button className="hover:scale-105 transition-transform text-muted-foreground hover:text-foreground">
          <Linkedin size={18} />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
