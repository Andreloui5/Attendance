import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";

function NewEvent() {
  return (
    <Container>
      <Row>
        <h1 sm={12} className="headerText mt-5">
          New Event
        </h1>
      </Row>
      <Form>
        <Form.Row className="mt-2">
          <Form.Group md={6} sm={12} as={Col} controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control placeholder="Event Name" />
          </Form.Group>

          <Form.Group md={6} sm={12} as={Col} controlId="formEventKeyword">
            <Form.Label>Texting Keyword Used</Form.Label>
            <Form.Control placeholder="ex: Keyword1" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group md={6} sm={12} as={Col} controlId="formEventType">
            <Form.Label>Type of Event</Form.Label>
            <Form.Control placeholder="ex: Meeting, Social, etc." />
          </Form.Group>

          <Form.Group md={6} sm={12} as={Col} controlId="formEventHost">
            <Form.Label>Event Host</Form.Label>
            <Form.Control placeholder="ex: ABC Company" />
          </Form.Group>
        </Form.Row>

        <Button className="float-right mb-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default NewEvent;
