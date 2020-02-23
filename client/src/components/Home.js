import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl
} from "react-bootstrap";
// import API from "../utils/API";

function Home() {
  // sets initial value for search parameters
  // const [searchParam, setSearchParam] = useState([]);
  // sets initial value for the search value itself
  const [searchParam, setSearchParam] = useState("Search By: ");

  // getPerson = event => {
  //   API.findPerson(id).then(res => {
  //     setPerson(res.data).catch(err => console.log(err));
  //   });
  // };
  // getEvent = event => {
  //   API.findEvent(id).then(res => {
  //     setEvent(res.data).catch(err => console.log(err));
  //   });
  // };

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   // Figure out how to handle click/ change the inner text of title in this button
  //   setSearchParam();
  // }
  useEffect(() => {
    // Update the document title using the browser API
    let me = document.getElementById("input-group-dropdown-2");
    me.innerHTML = searchParam;
  });

  function handleClick(e) {
    console.log(e.target.name);
    const name = e.target.name;
    setSearchParam(name);
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
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Search For: "
            id="input-group-dropdown-2"
          >
            <Dropdown.Item
              // onChange={handleForm}
              onClick={handleClick}
              name="Event by Keyword"
            >
              Event By Keyword
            </Dropdown.Item>
            <Dropdown.Item
              // onChange={handleForm}
              onClick={handleClick}
              name="Event By Name"
            >
              Event By Name
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              // onChange={handleForm}
              onClick={handleClick}
              name="Person By Name"
            >
              Person By Name
            </Dropdown.Item>
            <Dropdown.Item
              // onChange={handleForm}
              onClick={handleClick}
              name="Person By Cell"
            >
              Person By Cell
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </Row>
      {/* <Row>
        <Col md={{ offset: 8 }}></Col>
        <Col md={2}>
          <Button as={InputGroup.Append} variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Home;
