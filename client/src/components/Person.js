import React, { useState, useEffect } from "react";
import PersonCard from "../components/PersonCard";
import AccordionEvents from "../components/AccordionResultsEvents";
import API from "../utils/API";

function Person() {
  // get the required parameter
  const query = window.location.pathname.substring(8);
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
        <AccordionEvents key={attendedResults._id} results={attendedResults} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Person;
