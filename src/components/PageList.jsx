import { useEffect, useState } from "react";

const PageList = ({ pageNo, clickHandler }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleClick = (data) => {
    clickHandler(data);
    setCurrentPage(data);
  };

  const renderedAllPages = new Array(pageNo).fill(" ").map((_, index) => {
    return (
      <button
        key={index}
        className={`h-auto w-auto border px-4 py-2 m-2   ${
          currentPage === index && "border-2 bg-blue-600"
        }`}
        onClick={() => {
          handleClick(index);
        }}
      >
        {index + 1}
      </button>
    );
  });

  const prevPageHandler = () => {
    clickHandler(currentPage - 1);
    setCurrentPage((prev) => {
      return prev - 1;
    });
  };

  const nextPageHandler = () => {
    clickHandler(currentPage + 1);
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className="m-6">
      {currentPage > 0 && (
        <button className="border px-4 py-2 m-2" onClick={prevPageHandler}>
          {" "}
          Previous{" "}
        </button>
      )}

      {renderedAllPages}
      {currentPage < pageNo - 1 && (
        <button onClick={nextPageHandler} className="border px-4 py-2 m-2">
          Next
        </button>
      )}
    </div>
  );
};

export default PageList;
