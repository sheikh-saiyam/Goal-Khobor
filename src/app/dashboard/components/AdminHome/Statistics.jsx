"use client";
import { FaAd, FaChartBar } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import useFetchAdminStatistics from "@/hooks/useFetchAdminStatistics";

const Statistics = () => {
  // Get all statistics --->
  const [data, isLoading] = useFetchAdminStatistics();
  const statistics = data?.statistics || {};
  const {
    adsCount,
    newsCount,
    usersCount,
    rankingsCount,
    transfersCount,
    publishersCount,
  } = statistics;

  return (
    <div className="flex items-center justify-center flex-wrap gap-6 py-4">
      {/* Ads Count */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <FaAd className="text-7xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">Ads</p>
            <p className="text-xl font-bold text-gray-700">{adsCount}</p>
          </div>
        </div>
      )}

      {/* News Count */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <FaNewspaper className="text-7xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">News</p>
            <p className="text-xl font-bold text-gray-700">{newsCount}</p>
          </div>
        </div>
      )}

      {/* Rankings Count */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <FaTrophy className="text-6xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">Rankings</p>
            <p className="text-xl font-bold text-gray-700">{rankingsCount}</p>
          </div>
        </div>
      )}

      {/* Transfers Count */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <FaExchangeAlt className="text-7xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">Transfers</p>
            <p className="text-xl font-bold text-gray-700">{transfersCount}</p>
          </div>
        </div>
      )}

      {/* Publishers Count */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <FaPenToSquare className="text-6xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">Publishers</p>
            <p className="text-xl font-bold text-gray-700">{publishersCount}</p>
          </div>
        </div>
      )}

      {/* Tags Count */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <IoPricetags className="text-6xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">Tags</p>
            <p className="text-xl font-bold text-gray-700">{389}</p>
          </div>
        </div>
      )}

      {/* Charts */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <FaChartBar className="text-6xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">Charts</p>
            <p className="text-xl font-bold text-gray-700">{3}</p>
          </div>
        </div>
      )}

      {/* Users Count */}
      {isLoading ? (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-gray-200 p-4 rounded-lg border border-gray-300 shadow animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-w-[250px] min-h-[120px] justify-between bg-white p-4 rounded-lg border border-gray-300 shadow">
          <FaUsers className="text-6xl text-gray-700 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-500">Users</p>
            <p className="text-xl font-bold text-gray-700">{usersCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
