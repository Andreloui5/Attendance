import React from "react";
import { Form, Button, Col, Container, Row, Jumbotron } from "react-bootstrap";
import API from "../utils/API";
import { openNotification } from "./Notification";

function NewEvent() {
  function handleClick(e) {
    e.preventDefault();

    let name = e.target.formEventName.value;
    let keyword = e.target.formEventKeyword.value;
    let host = e.target.formEventHost.value;
    let type = e.target.formEventType.value;
    let date = e.target.formDate.value;

    // validates against empty fields
    if (name === "" || keyword === "" || date === "") {
      return openNotification(
        "error",
        "Name, Keyword, and Date fields must be completed prior to submission."
      );
    }
    //validates correct date entry
    function checkDate(date) {
      const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
      if (dateRegex.test(date) === false) {
        return openNotification("error", "Please enter a valid date.");
      } else {
        API.saveEvent({
          name: name,
          keyword: keyword,
          host: host,
          type: type,
          date: date
        })
          // upon success, send res of 200 to the origin of the webhook
          .then(res => {
            console.log(res);
          })
          .then(openNotification("success", "Your submission has been saved."));
      }
    }
    checkDate(date);
  }
  return (
    <Container>
      <Jumbotron id="homeJumbo" className="bg-transparent">
        <Row>
          <h1 sm={12} className="headerText">
            New Event
          </h1>
        </Row>
        <Form onSubmit={handleClick} className="mb-3">
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
          <Form.Row>
            <Form.Group md={6} sm={12} as={Col} controlId="formDate">
              <Form.Label>Date of Event</Form.Label>
              <Form.Control placeholder="Please format date as 'MM/DD/YYYY'" />
            </Form.Group>
          </Form.Row>
          <Button className="float-right mb-5" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
}
export default NewEvent;
