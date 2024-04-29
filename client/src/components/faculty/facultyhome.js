import React from "react";
import FAppbar from "./facultyAppbar";
import Card from '../card';
import Card2 from '../card2';
import Calendar from "../calender";
import "./facultyhome.css";
import axios from 'axios';

const handleAddAssignments = () => {
  window.location.href = '/facultyassignments';
};

const FacultyHome = () => {
  const handleViewAssignments = () => {
    window.location.href= '/facultyviewassignments';
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* App bar at the top */}
      <FAppbar />
      <br />

      <div style={{ display: "flex", flex: 1, flexDirection: "row-reverse" }}>
        {/* Calendar component on the right */}
        <div style={{ flex: 2, marginLeft: "150px" }}>
          <Calendar />
        </div>

        {/* Cards on the left */}
        <div style={{ flex: 1 }}>
          <h3>Assignments Due</h3>
          <Card />
          <br />
          <Card2 />
          <br />
          {/* Button to add more assignments */}
          <div  style={{ display: "flex", justifyContent: "center", margin: "0 auto", gap: "10px" }}>
            <button className="button" onClick={handleAddAssignments}>Add Assignments</button>
            <button className="button" onClick={handleViewAssignments}>View Assignments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyHome;
