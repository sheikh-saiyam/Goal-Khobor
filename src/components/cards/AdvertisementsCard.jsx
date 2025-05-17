import dbConnect, { collections } from "@/lib/dbConnect";
import Image from "next/image";

const AdvertisementsCard = async () => {
  // Get Ads --->
  const adsCollection = await dbConnect(collections.adsCollection);
  const [ads] = await adsCollection
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();

  return (
    <div className="mt-6">
      <h1 className="text-black tracking-tighter text-2xl mt-3 font-bold">
        ADVERTISEMENTS
      </h1>
      <a href={ads.link} target="_blank">
        <Image
          src={ads.image}
          alt={ads.link}
          width={600}
          height={250}
          className="h-full w-full mt-2 rounded-lg"
        />
      </a>
    </div>
  );
};

export default AdvertisementsCard;
