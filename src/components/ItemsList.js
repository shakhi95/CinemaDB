import React from "react";
import { Link } from "react-router-dom";

import { useGlobalValues } from "../context";
import Spinner from "./Spinner";
import Pagination from "./Pagination";

const defaultImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const ItemsList = () => {
  //
  const { list, loading } = useGlobalValues();

  if (loading) {
    return <Spinner />;
  }

  const renderList = () => {
    return list.map((item) => {
      return (
        <div
          key={item.imdbID}
          className="col-sm-6 col-md-4 col-lg-3 my-1 position-relative item-box"
        >
          <img
            src={item.Poster === "N/A" ? defaultImg : item.Poster}
            alt={item.Title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="position-absolute item-info p-3">
            <div className="h-100 d-flex flex-column">
              <h6 className="text-center text-white">{item.Title}</h6>
              <h6 className="text-center text-white ">{item.Year}</h6>
              <br />
              <small className="text-center text-white text-uppercase">
                {item.Type}
              </small>
              <Link
                to={`/database/${item.imdbID}`}
                className="w-100 btn btn-sm mt-auto mb-3 py-0 bg3 ft3"
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-75 mx-auto pb-5">
      <Pagination />
      <div className="row g-1">{renderList()}</div>
    </div>
  );
};

export default ItemsList;
