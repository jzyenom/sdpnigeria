import React, { useState } from "react";
import "./Table.css"; // Import your custom CSS file
import campaignSchedulesList from "../../assets/campaignSchedules";

const CampaignSchedules = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //   const filteredData = campaignSchedulesList.filter((row) =>
  //     row.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //   );

  return (
    <div className="container">
      <h2>TIME TABLE (EDO GUBERNATORIAL ELECTION 2024)</h2>

      {/* Search Input */}
      {/* <div
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
      </div> */}

      <div className="table-responsive">
        <table className="table custom-table">
          <thead>
            <tr className="table-header">
              <th>S/N</th>
              <th>Planned_Activities</th>
              <th>Start_Date</th>
              <th>End_Date</th>
            </tr>
          </thead>
          <tbody>
            {campaignSchedulesList.length > 0 ? (
              campaignSchedulesList.map((schedule, index) => (
                <tr key={index} className="table-schedule">
                  <td>{index + 1}</td>
                  <td>{schedule.Planned_Activities}</td>
                  <td>{schedule.Start_Date}</td>
                  <td>{schedule.End_Date}</td>
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

export default CampaignSchedules;
