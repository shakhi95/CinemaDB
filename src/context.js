import React, { useState, useEffect, useContext } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext(); // Provider + Consumer

const AppProvider = ({ children }) => {
  //
  const [term, setTerm] = useState("batman");
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const { loading, result } = useFetch(term, page);
  const [error, setError] = useState({ visibility: "hidden", mssg: "test" });
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!loading && result.Response === "False") {
      setError({ visibility: "visible", mssg: result.Error });
      setList([]);
      setAllPages(0);
    } else if (!loading && result.Response === "True") {
      setError({ visibility: "hidden", mssg: "result.Error" });
      setList(result.Search);
      setAllPages(Math.ceil(result.totalResults / 10));
    }
  }, [loading, result]);

  useEffect(() => {
    setPage(1);
  }, [term]);

  return (
    <AppContext.Provider
      value={{ term, setTerm, error, list, loading, page, allPages, setPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalValues = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalValues };
