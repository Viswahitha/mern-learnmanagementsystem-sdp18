import React from "react";
import { useNavigate } from "react-router-dom";
import Appbar from './Appbar';
import SignIn from './signin';
import Card from './card';
import Card2 from './card2';
import Calendar from "./calender";


export default function Home( {authorized}){
    //const navigate = useNavigate();

    //if(!authorized){
      //  navigate("/signin");
        //return null;
   // }
   return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* App bar at the top */}
      <Appbar />
      <br></br>

      <div style={{ display: "flex", flex: 1, flexDirection: "row-reverse" }}>
        {/* Calendar component on the right */}
        <div style={{ flex: 2, marginLeft: "150px" }}>
          <Calendar />
        </div>

        {/* Cards on the left */}
        <div style={{ flex: 1 }}>
            
            <h3>Assignments Due</h3>
          <Card />
          <br></br>
          <Card2 />
        </div>
      </div>
    </div>
  );
}