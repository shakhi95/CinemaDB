import React from "react";
import { useGlobalValues } from "../context";

const Pagination = () => {
  //
  const { setPage, page, allPages } = useGlobalValues();

  if (allPages === 0) {
    return <div></div>;
  }

  const prevPage = () => {
    setPage((oldPage) => {
      if (oldPage === 1) {
        return 1;
      }
      return oldPage - 1;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      if (oldPage === allPages) {
        return allPages;
      }
      return oldPage + 1;
    });
  };

  return (
    <nav>
      <ul className="pagination justify-content-center my-5 pagination-sm">
        <li
          className={page === 1 ? "page-item disabled" : "page-item"}
          onClick={() => setPage(1)}
        >
          <button className="page-link" href="#">
            First
          </button>
        </li>
        <li
          className={page === 1 ? "page-item disabled" : "page-item"}
          onClick={prevPage}
        >
          <button className="page-link" href="#">
            Prev
          </button>
        </li>
        <li className="page-item active">
          <span className="page-link">
            {page} / {allPages}
          </span>
        </li>
        <li
          className={page === allPages ? "page-item disabled" : "page-item"}
          onClick={nextPage}
        >
          <button className="page-link" href="#">
            Next
          </button>
        </li>
        <li
          className={page === allPages ? "page-item disabled" : "page-item"}
          onClick={() => setPage(allPages)}
        >
          <button className="page-link" href="#">
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
