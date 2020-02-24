import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import API from "../utils/API";

function NewEvent() {
  function handleClick(e) {
    e.preventDefault();

    let name = e.target.formEventName.value;
    let keyword = e.target.formEventKeyword.value;
    let host = e.target.formEventHost.value;
    let type = e.target.formEventType.value;
    API.saveEvent({
      name: name,
      keyword: keyword,
      host: host,
      type: type
    })
      // upon success, send res of 200 to the origin of the webhook
      .then(res => {
        console.log(res);
      })
      .then(alert("saved"));
  }
  return (
    <Container>
      <Row>
        <h1 sm={12} className="headerText mt-5">
          New Event
        </h1>
      </Row>
      <Form onSubmit={handleClick}>
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
            <Form.Control placeholder="ex: Bob Smith, ABC Company, etc." />
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
