import React, { useState, useEffect } from "react";
import PersonCard from "../components/PersonCard";
import AccordionEvents from "../components/AccordionResultsEvents";
// import ColumnChart from "./Chart";
import API from "../utils/API";
import "../css/App.css";

function Person() {
  // get the required parameter
  const query = window.location.pathname.substr(-24);
  const [searchResults, setSearchResults] = useState("");
  const [attendedResults, setAttendedResults] = useState("");
  // function uses the api to search for a person in the database
  useEffect(() => {
    API.findPerson(query).then(res => {
      setSearchResults(res.data);
    });
  }, []);

  useEffect(() => {
    API.findEventsAttended(query).then(res => {
      setAttendedResults(res.data.events);
      console.log(res.data.events);
    });
  }, [searchResults]);

  return (
    <div>
      {/* If there are results to show, show the person */}
      {searchResults !== "" ? <PersonCard res={searchResults} /> : <div></div>}
      <br></br>
      {/* If the person has attended any events, render the event cards */}
      {attendedResults !== "" ? (
        <div>
          <h3 className="header3">Events this person has attended:</h3>
          <AccordionEvents
            key={attendedResults._id}
            results={attendedResults}
          />
          <br />
          <br />
        </div>
      ) : (
        <div>
          <h3 className="header3">
            This person has not yet attended an event.
          </h3>
        </div>
      )}
    </div>
  );
}
export default Person;
