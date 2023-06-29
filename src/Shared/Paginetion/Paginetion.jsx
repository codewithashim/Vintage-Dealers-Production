import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";

const Paginetion = ({
  page,
  handlePrevPage,
  totalPages,
  handleNextPage,
  setPage,
}) => {
  return (
    <div className={`items-center justify-center gap-4 mt-11 mb-16`}>
      <div className="flex items-center justify-center text-gray-400 ">
        <button
          title="Previous"
          className={`h-14 w-14 text-center ${
            page === 1 ? "bg-gray-400 cursor-not-allowed" : "hover:bg-red-10"
          } text-white bg-black-10 rounded-l-md border ${
            page === 1 ? "bg-gray-400" : "bg-red-500"
          } flex items-center justify-center`}
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          <FaArrowLeft className="text-white" />
        </button>

        {Array.from({ length: totalPages }).map((_, Index) => (
          <button
            key={Index}
            className={`h-14 w-14 hover:text-white bg-red-500 ${
              page === Index + 1 ? "text-white bg-red-600" : "bg-black-10"
            } text-center hover:bg-red-10 text-white border`}
            onClick={() => setPage(Index + 1)}
            disabled={page === Index + 1}
          >
            {Index + 1}
          </button>
        ))}
        <button
          title="Next"
          className={`h-14 w-14 text-center ${
            page === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "hover:bg-red-10"
          } text-white bg-black-10 rounded-r-md border ${
            page === totalPages ? "bg-gray-400" : "bg-red-500"
          } flex items-center justify-center`}
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Paginetion;
