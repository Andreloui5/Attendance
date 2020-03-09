import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl
} from "react-bootstrap";
import API from "../utils/API";
import AccordionEvents from "./AccordionResultsEvents";
import AccordionPeople from "./AccordionResultsPeople";
import { searchNumber } from "../utils/helperfunctions";

function Home() {
  // Defines state for our search parameters
  const [searchParam, setSearchParam] = useState("Search By: ");

  function handleClick(e) {
    console.log(e.target);
    const name = e.target.name;
    // updates state with search parameter
    setSearchParam(name);
    setSearchValue(searchValue + " ");
  }

  useEffect(function updateDropdown() {
    // finds search dropdown by id
    let newTerm = document.getElementById("input-group-dropdown-2");
    // updates the text of the search dropdown
    newTerm.innerHTML = searchParam;
  });

  // initializes searchValue state
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    // switch statement searches different APIs depending on user selection
    switch (searchParam) {
      case "Event By Keyword":
        findEventByKeyword(searchValue);
        break;
      case "Event By Name":
        findEventByName(searchValue);
        break;
      case "Person By Name":
        findPersonByName(searchValue);
        break;
      case "Person By Cell":
        findPersonByCell(searchValue);
        break;
      default:
        break;
    }
    // Each time searchValue is updated, call this switch
  }, [searchValue]);

  // sets search results to state
  const [searchResults, setSearchResults] = useState([]);

  // ===== API Calls ===== //

  function findEventByKeyword(value) {
    // set Timeout so that the API doesn't fire until a break in typing
    setTimeout(() => {
      //makes an api call to find events by keyword
      API.findByKeyword(value).then(res => {
        setSearchResults(res.data);
        console.log(res.data);
      });
    }, 400);
  }
  function findEventByName(value) {
    // set Timeout so that the API doesn't fire until a break in typing
    setTimeout(() => {
      //makes an api call to find events by keyword
      API.findByName(value).then(res => {
        setSearchResults(res.data);
        console.log(res.data);
      });
    }, 400);
  }
  function findPersonByName(value) {
    let searchText = value.trim().split(" ");
    // set Timeout so that the API doesn't fire until a break in typing
    setTimeout(() => {
      if (searchText.length <= 1) {
        //makes an api call to find events by keyword
        API.findPersonByFirst(...searchText).then(res => {
          setSearchResults(res.data);
          console.log(res.data);
        });
      } else {
        API.findPersonByFull(...searchText).then(res => {
          setSearchResults(res.data);
          console.log(res.data);
        });
      }
    }, 400);
  }
  function findPersonByCell(value) {
    let newSearch = searchNumber(value);
    // set Timeout so that the API doesn't fire until a break in typing
    setTimeout(() => {
      //makes an api call to find events by keyword
      API.findByCell(newSearch).then(res => {
        setSearchResults(res.data);
        console.log(res.data);
      });
    }, 400);
  }

  return (
    <Container id="topSearch">
      <Row>
        <h1 sm={12} className="headerText mt-5">
          Search
        </h1>
      </Row>
      <Row>
        <InputGroup>
          <FormControl
            placeholder="Search Text"
            aria-label="Search Text"
            aria-describedby="basic-addon2"
            onChange={e => setSearchValue(e.target.value.trim())}
          />
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Search For: "
            id="input-group-dropdown-2"
          >
            <Dropdown.Item onClick={handleClick} name="Event By Keyword">
              Event By Keyword
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick} name="Event By Name">
              Event By Name
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleClick} name="Person By Name">
              Person By Name
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick} name="Person By Cell">
              Person By Cell
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </Row>
      {/* Conditionally Renders results depending on search Parameters chosen by user */}
      {searchParam === "Event By Keyword" || searchParam === "Event By Name" ? (
        <AccordionEvents results={searchResults} />
      ) : (
        <div></div>
      )}
      {searchParam === "Person By Name" || searchParam === "Person By Cell" ? (
        <AccordionPeople results={searchResults} />
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default Home;
