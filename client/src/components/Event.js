import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import AccordionPeople from "../components/AccordionResultsPeople";
import API from "../utils/API";
import "../css/App.css";

function Event() {
  // get the required parameter
  const query = window.location.pathname.substr(-24);
  const [searchResults, setSearchResults] = useState("");
  const [attendedResults, setAttendedResults] = useState("");
  // function uses the api to search for a event in the database
  useEffect(() => {
    API.findEvent(query).then(res => {
      setSearchResults(res.data);
    });
  }, []);

  useEffect(() => {
    API.findAttenders(query).then(res => {
      setAttendedResults(res.data.attenders);
      console.log(res.data.attenders);
    });
  }, [searchResults]);

  return (
    <div>
      {/* If there are results to show, show the event */}
      {searchResults !== "" ? <EventCard res={searchResults} /> : <div></div>}
      <br></br>
      {/* If the event has attended any events, render the event cards */}
      {attendedResults !== "" ? (
        <div>
          <h3 className="header3">People who atttended this event:</h3>
          <AccordionPeople
            key={attendedResults._id}
            results={attendedResults}
          />
        </div>
      ) : (
        <div>
          <h3 className="header3">This event does not have any attenders.</h3>
        </div>
      )}
    </div>
  );
}
export default Event;
