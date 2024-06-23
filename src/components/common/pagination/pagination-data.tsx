import React, { useEffect, useState } from "react";

type PaginationPropstype = {
  pagesCount: number;
  currentPage: number;
  changeCurrentPage: (currentPage: number) => void;
};
const PaginationData = ({
  pagesCount,
  currentPage,
  changeCurrentPage,
}: PaginationPropstype) => {
  const [pageArr, setPageArr] = useState<number[]>([]);
  const [currentPageArr, setCurrentPageArr] = useState<number[]>([]);

  const changePage = (dir: "left" | "right") => { 
    // [1,2]
    if (dir === "left") {
      setCurrentPageArr(pageArr.slice(currentPage * 6, currentPage * 6 + 6));
    } else {
      setCurrentPageArr(pageArr.slice(currentPage * 6, currentPage * 6 - 6));
    }
  };

  const setPagesArr = (pages: number) => {
    let _pages: number[] = [];

    for (let i = 1; i < pages; i++) {
      _pages.push(i);
    }

    setPageArr(_pages);
    setCurrentPageArr(_pages.slice(0, 5));
  };

  useEffect(() => {
    pagesCount && setPagesArr(pagesCount);
  }, [pagesCount]);

  return (
    <div className="basic-pagination">
      <nav>
        <ul>
          <li>
            <i
              className="fas fa-long-arrow-left"
              role="button"
              onClick={() => changePage("left")}
            ></i>
          </li>
          {currentPageArr.map((count: number) => (
            <li key={count + "story"}>
              <button onClick={() => changeCurrentPage(count)}>
                <span className={currentPage === count ? "current" : ""}>
                  {count}
                </span>
              </button>
            </li>
          ))}
          <li>
            <i
              className="fas fa-long-arrow-right"
              role="button"
              onClick={() => changePage("right")}
            ></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationData;
