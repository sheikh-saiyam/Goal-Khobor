"use client";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { usePathname } from "next/navigation";

const Footer = () => {
    const path = usePathname();
    if(path.includes("/login") || path.includes("/register")) {
      return <></>
    }

  const tags = [
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Kylian Mbappe",
    "Vinicius Junior",
    "Neymar Junior",
    "Jude Bellingham",
    "UEFA Champions League",
    "Real Madrid",
    "La Liga",
    "FIFA World Cup",
    "Premier League",
    "FC. Barcelona",
    "Manchester United",
    "Manchester City",
    "Liverpool F.C",
    "Bayern Munich",
    "Juventus",
    "AC Milan",
    "Ballon d'Or",
    "Golden Boot",
    "El Clasico",
    "VAR",
    "Penalty Shootout",
  ];

  const topViewedNews = [
    {
      date: "Feb 14, 2025",
      title: "Real Madrid Eyes Another UCL Title \n in 2024/25 Season",
    },
    {
      date: "Jan 28, 2025",
      title: "Mbappé Shines as New Signings \n Impact European Football",
    },
    {
      date: "Jan 15, 2025",
      title: "Premier League 24/25: Title Race \n Heats Up with Contenders",
    },
  ];

  return (
    <footer className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl py-6 md:py-9">
      <div className="border-t border-gray-200 pt-8 flex justify-between gap-[20px] flex-wrap w-full">
        
        {/* Top Viewed News */}
        <div className="w-fit">
          <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
            Top Viewed News
          </h3>
          <div className="">
            <div className="relative border-l pl-2 border-gray-300 w-full">
              {topViewedNews?.map((news, index) => (
                <div key={index} className="mb-5">
                  <h1 className="font-semibold">● {news.date}</h1>
                  <h3 className="ml-4 hover:underline whitespace-pre-line">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-fit">
          <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
            Quick Links
          </h3>
          <ul className="list-none space-y-2">
            <li className="text-medium hover:underline">About Us</li>
            <li className="text-medium hover:underline">Contact Us</li>
            <li className="text-medium hover:underline">Terms & Conditions</li>
            <li className="text-medium hover:underline">
              Accessibility Information
            </li>
            <li className="text-medium hover:underline">Privacy Policy</li>
            <li className="text-medium hover:underline">Cookie Policy</li>
            <li className="text-medium hover:underline">Cookie Preferences</li>
            <li className="text-medium hover:underline">Accessibility Help</li>
          </ul>
        </div>

        {/* Popular Tags */}
        <div className="w-full md:w-4/12">
          <h3 className="md:text-center text-[1.2rem] font-semibold text-[#424242] mb-2">
            Popular Tags
          </h3>
          <div className="flex flex-wrap text-black md:justify-center gap-[4px]">
            {tags.map((tag, idx) => {
              return (
                <Button key={idx} variant="outline">
                  {tag}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Join Newsletter & Download App */}
        <div className="flex flex-col gap-6">
          {/* Join Newsletter */}
          <div>
            <h3 className="text-xl text-[#424242] font-bold mb-2">
              Join Our Newsletter
            </h3>
            <p className="text-sm mb-3">
              Stay updated with the latest news and insights. <br /> Subscribe
              now!
            </p>
            <div className="relative">
              <input
                type="email"
                className="w-full py-2 px-4 rounded-md border-2 border-black outline-none text-black placeholder:text-gray-500"
                placeholder="Enter your email"
              />
              <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-black text-white py-1.5 px-4 rounded-md hover:bg-gray-800 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Download Mobile App */}
          <div>
            <h3 className="text-xl text-[#424242] font-bold mb-2">
              Download Mobile App
            </h3>
            <p className="text-sm mb-3">
              Get the latest news anytime, anywhere. Stay <br /> informed on the
              go!
            </p>
            <div className="mt-2 flex items-center gap-4">
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png"
                }
                alt="Play Store"
                height={120}
                width={120}
                className="hover:scale-105 cursor-pointer"
              />
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                }
                alt="Play Store"
                height={120}
                width={120}
                className="hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer End */}
      <div className="border-t border-gray-200 pt-[20px] mt-[40px] flex items-center justify-between w-full flex-wrap gap-[20px]">
        <Link href={"/"} className="hover:scale-105">
          <Image
            src={"https://i.ibb.co.com/fV684RGm/goal-khobor.png"}
            alt="Goal Khobor"
            className="w-44 h-20"
            width={100}
            height={100}
          />
        </Link>
        <p className="text-[0.9rem] text-gray-600">
          © 2025 Goal Khobor. All Rights Reserved.{" "}
        </p>
        <div className="flex items-center gap-[10px] text-[#424242]">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#000] transition-all duration-300">
            <CgFacebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#000] transition-all duration-300">
            <BsTwitter />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#000] transition-all duration-300">
            <BsInstagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#000] transition-all duration-300">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
