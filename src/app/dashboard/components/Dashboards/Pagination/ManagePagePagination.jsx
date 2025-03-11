import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ManagePagePagination = ({ isLoading, data, page, setPage }) => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {isLoading ? (
        // Skeleton for Pagination
        <>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 bg-gray-300 animate-pulse rounded"
            />
          ))}
        </>
      ) : (
        <>
          {/* Previous Button */}
          <button
            className="px-4 py-2 border rounded flex items-center gap-1 
            bg-gray-100 text-gray-600 hover:bg-gray-200 
            disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            <FaChevronLeft />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`px-4 py-2 border rounded transition duration-200
                ${
                  page === pageNumber
                    ? "bg-gray-600 text-white font-semibold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}

          {/* Next Button */}
          <button
            className="px-4 py-2 border rounded flex items-center gap-1 
            bg-gray-100 text-gray-600 hover:bg-gray-200 
            disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() =>
              setPage((prev) => Math.min(prev + 1, data.totalPages))
            }
            disabled={page === data.totalPages}
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default ManagePagePagination;
