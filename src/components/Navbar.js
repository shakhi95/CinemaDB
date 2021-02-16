import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getModeLS = () => {
  let mode = "light-theme";
  if (localStorage.getItem("cinema-mode")) {
    mode = localStorage.getItem("cinema-mode");
  }
  return mode;
};

const Navbar = () => {
  //
  const [mode, setMode] = useState(getModeLS());

  const toggleMode = () => {
    if (mode === "light-theme") {
      setMode("dark-theme");
    } else {
      setMode("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = mode;
    localStorage.setItem("cinema-mode", mode);
  }, [mode]);

  return (
    <nav className="bg1 ft1 shadow mb-5 ">
      <div className="container px-3">
        <div className="d-flex justify-content-between align-items-center py-2">
          <Link className="text-decoration-none ft2 fw-bolder fs-4" to="/">
            CinemaDB!
          </Link>
          <button className="btn btn-sm bg3 ft3 px-3" onClick={toggleMode}>
            Toggle Light/Dark
          </button>
          <div className="d-flex align-items-center d-none d-md-block">
            <Link className="text-decoration-none ft1 mx-2" to="/">
              Home
            </Link>
            <Link className="text-decoration-none ft1 mx-2" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
