"use client";

import { useEffect, useState } from "react";

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [sortBy, setSortBy] = useState("published_date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5; // Number of news per page

  useEffect(() => {
    fetchNews();
  }, [search, category, publisher, sortBy, sortOrder, page]);

  const fetchNews = async () => {
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

    setNews(data.newsData || []);
    setTotalPages(data.totalPages || 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📰 News List</h1>

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
          <option value="football">Football</option>
          <option value="technology">Technology</option>
          <option value="politics">Politics</option>
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

      {/* News List */}
      <div className="space-y-4">
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item._id} className="p-4 border rounded shadow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">
                {item.category} | {item.publisher} | {new Date(item.published_date).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No news found.</p>
        )}
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
        <span className="px-4 py-2">{page} / {totalPages}</span>
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageNews;
