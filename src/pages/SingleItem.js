import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const url = "http://www.omdbapi.com/?apikey=b3d6fdf6";
const defaultImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleItem = (props) => {
  //
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  const fetchOne = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}&i=${id}`);
      const data = await res.json();
      setDetails(data);
    } catch (error) {
      setDetails(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOne();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (details.Response === "False") {
    return <h3 className="text-danger text-center">Nothing with This ID !</h3>;
  }

  if (!details) {
    return <h3 className="text-danger text-center">Wrong ID Format ! !</h3>;
  }

  const {
    Title,
    Year,
    Rated,
    Genre,
    Director,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    imdbRating,
    Poster,
  } = details;

  return (
    <div className="container px-5">
      <div className="card border-1 border-danger bg2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Poster === "N/A" ? defaultImg : Poster}
              alt={Title}
              className="w-100"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title text-uppercase ft2 mb-3">{Title}</h3>
              <small className="bg3 ft3 px-2 rounded me-3">Year :</small>
              <small className="ft1">{Year}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Genre :</small>
              <small className="ft1">{Genre}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Director :</small>
              <small className="ft1">{Director}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Language :</small>
              <small className="ft1">{Language}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Rated :</small>
              <small className="ft1">{Rated}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Actors :</small>
              <small className="ft1">{Actors}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Country :</small>
              <small className="ft1">{Country}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">imdb Rating :</small>
              <small className="ft1">{imdbRating}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Plot :</small>
              <small className="ft1">{Plot}</small>
              <br />
              <small className="bg3 ft3 px-2 rounded me-3">Awards :</small>
              <small className="ft1">{Awards}</small>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link className="btn bg3 ft3 mb-5 mt-2 px-5" to="/">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default SingleItem;
