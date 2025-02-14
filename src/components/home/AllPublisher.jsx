import Marquee from "react-fast-marquee";
import Header from "../shared/Section/Header";
import Image from "next/image";

const AllPublisher = () => {
  const publishers = [
    {
      publisher_name: "Marca",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Marca.svg/2560px-Marca.svg.png",
    },
    {
      publisher_name: "BBC Sport",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BBC_Sport_%282022%2C_alt%29.svg/1200px-BBC_Sport_%282022%2C_alt%29.svg.png",
    },
    {
      publisher_name: "Sky Sports",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Sky_Sports_logo_2020.svg/2560px-Sky_Sports_logo_2020.svg.png",
    },
    {
      publisher_name: "ESPN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNr99p-3zplNSJCoKrBxNOcL2bfC7oc9heag&s",
    },
    {
      publisher_name: "Goal.com",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Goal_Website_Logo.svg/1200px-Goal_Website_Logo.svg.png",
    },
    {
      publisher_name: "The Guardian Sport",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1200px-The_Guardian_2018.svg.png",
    },
    {
      publisher_name: "L'Équipe",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/L_Equipe_Logo.svg/1280px-L_Equipe_Logo.svg.png",
    },
    {
      publisher_name: "Kicker",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Kicker_Logo.png",
    },
    {
      publisher_name: "Calciomercato",
      image:
        "https://www.scopignocuprieti.com/wp-content/uploads/2018/01/Logo-Calciomercato.com_.png",
    },
    {
      publisher_name: "Sportskeeda",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sportskeeda.svg/2560px-Sportskeeda.svg.png",
    },
    {
      publisher_name: "90min",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzQ0MoLgFTSA-MHsQKqXiYm5Ies0sRPE9Og&s",
    },
    {
      publisher_name: "SportBible",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/82/Sportbible-logo.png",
    },
  ];
  return (
    <div>
      {/* Section Header */}
      <Header heading={"All Publisher"} />
      <div className="flex flex-col gap-6">
        {/* Marquee moving from right to left */}
        <Marquee direction="right" speed={50}>
          {publishers.slice(0, 6).map((publisher, index) => (
            <div key={index} className="flex items-center mx-4">
              <Image
                src={publisher.image}
                alt={publisher.publisher_name}
                width={1000}
                height={100}
                className="h-12 w-48 mr-2"
              />
            </div>
          ))}
        </Marquee>
        {/* Marquee moving from left to right */}
        <Marquee direction="left" speed={50}>
          {publishers.slice(6).map((publisher, index) => (
            <div key={index} className="flex items-center mx-4">
              <Image
                src={publisher.image}
                alt={publisher.publisher_name}
                width={1000}
                height={100}
                className="h-12 w-48 mr-2"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AllPublisher;
