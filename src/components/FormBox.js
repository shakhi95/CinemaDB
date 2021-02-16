import React from "react";

import { useGlobalValues } from "../context";

const FormBox = () => {
  //
  const { term, setTerm, error } = useGlobalValues();
  return (
    <div className="container text-center mb-5">
      <div className="row">
        <div className="col-sm-10 col-md-6 mx-auto">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Search Movies/Shows By Name"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <small
            className="text-danger text-uppercase"
            style={{ visibility: error.visibility }}
          >
            {error.mssg}
          </small>
        </div>
      </div>
    </div>
  );
};

export default FormBox;
