"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

// Fetch function for news
const fetchNews = async ({ queryKey }) => {
  const [_, { search, category, publisher, sortBy, sortOrder, page, limit }] =
    queryKey;
  const params = new URLSearchParams({
    search,
    category,
    publisher,
    sortBy,
    sortOrder,
    page,
    limit,
  }).toString();

  const res = await fetch(`/api/news?${params}`);
  const data = await res.json();
  return data;
};

const ManageNews = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [sortBy, setSortBy] = useState("published_date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const limit = 10;

  // Use TanStack Query to fetch news
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [
      "news",
      { search, category, publisher, sortBy, sortOrder, page, limit },
    ],
    queryFn: fetchNews,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    refetch();
  }, [search, category, publisher, sortBy, sortOrder, page, refetch]);

  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold mb-4">📰 Manage News</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="features">Features</option>
          <option value="banner-news">Banner News</option>
          <option value="premier-league">Premier League</option>
          <option value="la-liga">La Liga</option>
          <option value="bundesliga">Bundesliga</option>
          <option value="serie-a">Serie A</option>
          <option value="ligue-1">Ligue 1</option>
          <option value="uefa-champions-league">UEFA Champions League</option>
          <option value="uefa-europa-league">UEFA Europa League</option>
          <option value="uefa-europa-conference-league">
            UEFA Europa Conference League
          </option>
          <option value="fifa-world-cup">FIFA World Cup</option>
          <option value="uefa-euros">UEFA Euros</option>
          <option value="copa-america">Copa America</option>
          <option value="youth-football">Youth Football</option>
          <option value="women-football">Women Football</option>
        </select>

        <select
          className="p-2 border rounded"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        >
          <option value="">All Publishers</option>
          <option value="BBC Sport">BBC Sport</option>
          <option value="ESPN">ESPN</option>
          <option value="CNN">CNN</option>
        </select>

        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="published_date">Sort by Date</option>
          <option value="views">Sort by Views</option>
        </select>

        <select
          className="p-2 border rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      {/* News Table */}
      <div className={`overflow-x-auto ${isLoading ? "shadow-lg" : ""}`}>
        <table className="overflow-x-auto w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-4 py-2 border text-gray-700 w-fit">Title</th>
              <th className="px-4 py-2 border text-gray-700">Category</th>
              <th className="px-4 py-2 border text-gray-700">Publisher</th>
              <th className="px-4 py-2 border text-gray-700">Published Date</th>
              <th className="px-4 py-2 border text-gray-700">Views</th>
              <th className="px-4 py-2 border text-gray-700">Likes</th>
              <th className="px-4 py-2 border text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2">
                    <div className="h-5 w-40 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-5 w-24 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-5 w-32 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-5 w-28 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-5 w-16 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-5 w-16 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="px-4 py-2 flex items-center gap-4">
                    <div className="h-10 w-10 bg-[#e5eaf2] animate-pulse rounded"></div>
                    <div className="h-10 w-10 bg-[#e5eaf2] animate-pulse rounded"></div>
                    <div className="h-10 w-10 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                </tr>
              ))
            ) : data.news.length > 0 ? (
              data.news.map((item) => (
                <tr key={item._id} className="border hover:bg-gray-50">
                  <td className="px-4 py-2 w-fit">
                    {item.title.length > 40
                      ? item.title.slice(0, 40) + "..."
                      : item.title}
                  </td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.publisher}</td>
                  <td className="px-4 py-2">
                    {new Date(item.published_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{item.views}</td>
                  <td className="px-4 py-2">{item.likes}</td>
                  <td className="px-4 py-2 flex items-center gap-4">
                    <p className="flex items-center gap-1 text-gray-700 bg-gray-100 border rounded cursor-pointer hover:bg-gray-300 duration-300 p-2">
                      <MdOutlineEdit size={20} />
                    </p>
                    <p className="flex items-center gap-1 text-gray-700 bg-gray-100 border cursor-pointer hover:bg-gray-300 duration-300 p-2 rounded">
                      <MdDeleteOutline size={20} />
                    </p>
                    <p className="flex items-center gap-1 text-gray-700 bg-gray-100 border cursor-pointer hover:bg-gray-300 duration-300 p-2 rounded">
                      <FaRegEye size={20} />
                    </p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center px-4 py-2 text-gray-500">
                  No News Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-2">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          {page} / {data.totalPages}
        </span>
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.min(prev + 1, data.totalPages))}
          disabled={page === data.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageNews;
