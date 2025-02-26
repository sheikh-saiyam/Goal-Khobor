import Marquee from "react-fast-marquee";
import Image from "next/image";
import Header from '@/components/Shared/Section/Header';
import dbConnect, { collections } from "@/lib/dbConnect";

const AllPublisher = async () => {
  // Get all publishers from db --->
  const publishersCollection = await dbConnect(
    collections.publishersCollection
  );
  const publishers = await publishersCollection.find().toArray();
  
  return (
    <div>
      {/* Section Header */}
      <Header heading={"All Publisher"} />
      <div className="flex flex-col gap-6">
        {/* Marquee moving from right to left */}
        <Marquee direction="right" speed={50}>
          {publishers.slice(0, 7).map((publisher, index) => (
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
          {publishers.slice(5).map((publisher, index) => (
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
