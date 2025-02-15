import Marquee from "react-fast-marquee";
import Header from "../shared/Section/Header.jsx";
import Image from "next/image";

const AllPublisher = async () => {
  const response = await fetch("http://localhost:3000/api/publishers");
  const publishers = await response.json();
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
