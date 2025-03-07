"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Publisher</th>
              <th className="px-4 py-2 border">Published Date</th>
              <th className="px-4 py-2 border">Views</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">
                    <div className="h-4 w-24 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 w-32 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 w-20 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 w-28 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                  <td className="p-4 flex items-center gap-4">
                    <div className="h-8 w-8 bg-[#e5eaf2] animate-pulse rounded"></div>
                    <div className="h-8 w-8 bg-[#e5eaf2] animate-pulse rounded"></div>
                  </td>
                </tr>
              ))
            ) : data.news.length > 0 ? (
              data.news.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.publisher}</td>
                  <td className="px-4 py-2">
                    {new Date(item.published_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{item.views}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2 text-gray-500">
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
