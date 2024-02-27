import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const {searchTerm , setSearchItem} = useState("");
  return (
    <>
      <div className="col-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control py-2"
            placeholder="Enter your search."
            aria-label="Enter your search."
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text p-3" id="basic-addon2">
            <FiSearch className="fs-6" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Search;
