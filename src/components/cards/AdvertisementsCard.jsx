import Image from "next/image";

const AdvertisementsCard = async () => {
  // Get Ads --->
  const ads_response = await fetch(`${process.env.NEXT_API_URL}/api/ads`);
  const ads = await ads_response.json();

  return (
    <div className="mt-4">
      <h1 className="text-black tracking-wider text-2xl mt-3 font-bold">
        ADVERTISEMENTS
      </h1>
      <a href={ads.link} target="_blank">
        <Image
          src={ads.image}
          alt={ads.link}
          width={600}
          height={250}
          className="max-h-250 w-full rounded mt-4"
        />
      </a>
    </div>
  );
};

export default AdvertisementsCard;
