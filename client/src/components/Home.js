import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl
} from "react-bootstrap";
import {
  // findEventByKeyword,
  findEventByName,
  findPersonByName
} from "../utils/apiRequests";
import API from "../utils/API";
import AccordionEvents from "./AccordionResultsEvents";
import AccordionPeople from "./AccordionResultsPeople";

function Home() {
  // Defines state for our search parameters
  const [searchParam, setSearchParam] = useState("Search By: ");

  function handleClick(e) {
    console.log(e.target.name);
    const name = e.target.name;
    // updates state with search parameter
    setSearchParam(name);
  }

  useEffect(function updateDropdown() {
    // finds search dropdown by id
    let newTerm = document.getElementById("input-group-dropdown-2");
    // updates the text of the search dropdown
    newTerm.innerHTML = searchParam;
  });

  // sets initial value for the search value itself
  const [searchValue, setSearchValue] = useState({ search: "" });
  // sets state of seachValue as user types
  function handleChange(e) {
    // sets name and value based on change event
    const { value } = e.target;
    // sets search value with above info
    setSearchValue({ ...searchValue, search: value });
  }

  useEffect(function handleChange() {
    // switch statement searches different APIs depending on user selection
    switch (searchParam) {
      case "Event By Keyword":
        findEventByKeyword(searchValue.search);
        break;
      case "Event By Name":
        findEventByName(searchValue.search);
        break;
      case "Person By Name":
        findPersonByName(searchValue.search);
        break;
      case "Person By Cell":
        console.log("sup");
        break;
      default:
        break;
    }
  });

  // sets search results to state
  const [searchResults, setSearchResults] = useState([]);

  function findEventByKeyword(value) {
    // set Timeout so that the API doesn't fire until a break in typing
    setTimeout(() => {
      //makes an api call to find events by keyword
      API.findByKeyword(value).then(res => {
        setSearchResults(res.data);
        console.log(res.data);
      }, 400);
    });
  }

  return (
    <Container id="topSearch">
      <Row>
        <h1 sm={12} className="headerText">
          Search
        </h1>
      </Row>
      <Row>
        <InputGroup>
          <FormControl
            placeholder="Search Text"
            aria-label="Search Text"
            aria-describedby="basic-addon2"
            onChange={handleChange}
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
      {searchValue.search === "Event By Keyword" ||
      searchValue.search === "Event By Name" ? (
        <AccordionEvents results={searchResults} />
      ) : (
        <AccordionPeople />
      )}
    </Container>
  );
}

export default Home;
