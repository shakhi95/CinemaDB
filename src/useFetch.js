import { useState, useEffect } from "react";

const url = "http://www.omdbapi.com/?apikey=b3d6fdf6";

const useFetch = (searchTerm, page) => {
  //
  const [loading, setloading] = useState(true);
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    setloading(true);

    const res = await fetch(`${url}&s=${searchTerm}&page=${page}`);
    const data = await res.json();

    setResult(data);
    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, page]);

  return { loading, result };
};

export default useFetch;
