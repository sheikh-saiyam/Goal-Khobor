import { FaAd } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import dbConnect, { collections } from "@/lib/dbConnect";
import { FaExchangeAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";

const Statistics = async () => {
  // All Collections
  const usersCollection = await dbConnect("users");
  const adsCollection = await dbConnect(collections.adsCollection);
  const newsCollection = await dbConnect(collections.newsCollection);
  const rankingsCollection = await dbConnect(collections.rankingsCollection);
  const transfersCollection = await dbConnect(collections.transfersCollection);
  const publishersCollection = await dbConnect(
    collections.publishersCollection
  );

  // Total Counts Of Collections
  const adsCount = await adsCollection.countDocuments();
  const newsCount = await newsCollection.countDocuments();
  const usersCount = await usersCollection.countDocuments();
  const rankingsCount = await rankingsCollection.countDocuments();
  const transfersCount = await transfersCollection.countDocuments();
  const publishersCount = await publishersCollection.countDocuments();

  return (
    <div className="flex items-center justify-center flex-wrap gap-6 py-4">
      {/* Ads Count */}
      <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
        <FaAd className="text-7xl text-gray-700 mr-2" />
        <div>
          <p className="text-sm font-medium text-gray-500">Ads</p>
          <p className="text-xl font-bold text-gray-700">{adsCount}</p>
        </div>
      </div>

      {/* News Count */}
      <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
        <FaNewspaper className="text-7xl text-gray-700 mr-2" />
        <div>
          <p className="text-sm font-medium text-gray-500">News</p>
          <p className="text-xl font-bold text-gray-700">{newsCount}</p>
        </div>
      </div>

      {/* Rankings Count */}
      <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
        <FaTrophy className="text-6xl text-gray-700 mr-2" />
        <div>
          <p className="text-sm font-medium text-gray-500">Rankings</p>
          <p className="text-xl font-bold text-gray-700">{rankingsCount}</p>
        </div>
      </div>

      {/* Transfers Count */}
      <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
        <FaExchangeAlt className="text-7xl text-gray-700 mr-2" />
        <div>
          <p className="text-sm font-medium text-gray-500">Transfers</p>
          <p className="text-xl font-bold text-gray-700">{transfersCount}</p>
        </div>
      </div>

      {/* Publishers Count */}
      <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
        <FaPenToSquare className="text-6xl text-gray-700 mr-2" />
        <div>
          <p className="text-sm font-medium text-gray-500">Publishers</p>
          <p className="text-xl font-bold text-gray-700">{publishersCount}</p>
        </div>
      </div>

      {/* Tags Count */}
      <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
        <IoPricetags className="text-6xl text-gray-700 mr-2" />
        <div>
          <p className="text-sm font-medium text-gray-500">Tags</p>
          <p className="text-xl font-bold text-gray-700">{389}</p>
        </div>
      </div>

      {/* Users Count */}
      <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
        <FaUsers className="text-6xl text-gray-700 mr-2" />
        <div>
          <p className="text-sm font-medium text-gray-500">Users</p>
          <p className="text-xl font-bold text-gray-700">{usersCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
