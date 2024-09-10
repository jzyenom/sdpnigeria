import React, { useState } from "react";
import "./Table.css"; // Import your custom CSS file
import stateChairmanList from "../assets/stateChairman";

const StateChairmanTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = stateChairmanList.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container">
      <h2>State Chairman</h2>

      {/* Search Input */}
      <div
        className="search-popup__form"
        style={{ marginTop: 1 + "em", marginBottom: 1 + "em" }}
      >
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Here..."
        />
        <button
          type="submit"
          aria-label="search submit"
          className="cleenhearts-btn"
        >
          <span>
            <i className="icon-search"></i>
          </span>
        </button>
      </div>

      <div className="table-responsive">
        <table className="table custom-table">
          <thead>
            <tr className="table-header">
              <th>S/N</th>
              <th>Name</th>
              <th>State</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index} className="table-row">
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.state}</td>
                  <td>{row.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StateChairmanTable;
