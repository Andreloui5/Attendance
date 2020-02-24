import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import "../css/App.css";

function NewPerson() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Row>
        <h1 sm={12} className="headerText mt-5">
          New Person
        </h1>
      </Row>
      <Form>
        <Form.Row className="mt-2">
          <Form.Group md={6} sm={12} as={Col} controlId="formPersonFirst">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="ex: Bob" />
          </Form.Group>

          <Form.Group md={6} sm={12} as={Col} controlId="formPersonLast">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="ex: Smith" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group md={6} sm={12} as={Col} controlId="formPersonEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@example.com" />
          </Form.Group>

          <Form.Group md={6} sm={12} as={Col} controlId="formPersonPhone">
            <Form.Label>Cell Number</Form.Label>
            <Form.Control placeholder="ex: 407-123-1234" />
          </Form.Group>
        </Form.Row>

        <Button
          className="float-right mb-4"
          variant="primary"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default NewPerson;
