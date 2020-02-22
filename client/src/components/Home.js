import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  Button
} from "react-bootstrap";

class Home extends React.Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      // Figure out how to handle click/ change the inner text of title in this button
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
              <Dropdown.Item href="#" onClick={handleClick}>
                Event By Keyword
              </Dropdown.Item>
              <Dropdown.Item href="#">Event By Name</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Person By Name</Dropdown.Item>
              <Dropdown.Item href="#">Person By Cell</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Row>
        <Row>
          <Col md={{ offset: 8 }}></Col>
          <Col md={2}>
            <Button as={InputGroup.Append} variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
