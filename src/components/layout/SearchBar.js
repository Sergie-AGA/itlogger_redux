import React from "react";

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: "30px" }}>
      <div className="nav-wrapper">
        <form action="">
          <div className="input-field">
            <input type="search" id="search" required />
            <label class="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
          </div>
          <i className="material-icons">close</i>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
