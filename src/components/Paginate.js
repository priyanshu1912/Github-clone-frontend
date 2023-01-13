import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Paginate = ({
  blogsPerPage,
  totalBlogs,
  currentPage,
  setCurrentPage,
  previousPage,
  nextPage,
  setBlogsPerPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative flex flex-none items-center justify-center text-gray-400 gap-10">
      <div className="absolute left-0 flex items-center gap-1">
        <div>Items per page: </div>
        <select
          value={blogsPerPage}
          onChange={(e) => setBlogsPerPage(e.target.value)}
          className="p-1 rounded-md cursor-pointer bg-gray-200 outline-none"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <MdKeyboardArrowLeft
        size={25}
        className="cursor-pointer hover:text-black"
        onClick={previousPage}
      />
      <div className="flex items-center gap-2">
        {pageNumbers.map((item) => (
          <div
            key={item}
            className={`cursor-pointer ${
              currentPage === item
                ? "text-white font-semibold h-7 w-7 bg-black rounded-full flex items-center justify-center"
                : "h-7 w-7 bg-transparent rounded-full flex items-center justify-center"
            }`}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <MdKeyboardArrowRight
        size={25}
        className="cursor-pointer hover:text-black"
        onClick={nextPage}
      />
    </div>
  );
};

export default Paginate;
