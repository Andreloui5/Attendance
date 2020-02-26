import React, { useState, useEffect } from "react";
import PersonCard from "../components/PersonCard";
import API from "../utils/API";

function Person() {
  // get the required parameter
  const query = window.location.pathname.substring(8);
  const [searchResults, setSearchResults] = useState("");
  // function uses the api to search for a person in the database
  useEffect(() => {
    API.findPerson(query).then(res => {
      setSearchResults(res.data);
    });
  }, []);

  return (
    <div>
      {searchResults !== "" ? <PersonCard res={searchResults} /> : <div></div>}
    </div>
  );
}
export default Person;
