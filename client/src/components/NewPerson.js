import React from "react";
import { Form, Button, Col, Container, Row, Jumbotron } from "react-bootstrap";
import { openNotification } from "./Notification";
import "../css/App.css";
import { numberScrub, capitalize } from "../utils/helperfunctions";
import API from "../utils/API";

function NewPerson() {
  // const [formValue, setFormValue] = useState({});
  function handleClick(e) {
    e.preventDefault();

    let mobile = numberScrub(e.target.formPersonPhone.value);
    let first = capitalize(e.target.formPersonFirst.value);
    let last = capitalize(e.target.formPersonLast.value);
    let email = e.target.formPersonEmail.value;

    // adding validations to above
    if (
      mobile === "" ||
      mobile === "+1" ||
      first === "" ||
      last === "" ||
      email === ""
    ) {
      return openNotification(
        "error",
        "All fields must be completed prior to submission."
      );
    }

    API.savePerson({
      mobile_number: mobile,
      first: first,
      last: last,
      email: email
    })
      // upon success, send res of 200 to the origin of the webhook
      .then(res => {
        res.status === 200
          ? openNotification("success", "Your submission has been saved.")
          : openNotification(
              "error",
              "There was an error processing your submission. Please try again later."
            );
      })
      .catch(err => {
        openNotification(
          "error",
          "There was an error processing your submission. Please try again later."
        );
        throw err;
      });
  }

  return (
    <Container>
      <Jumbotron id="homeJumbo" className="bg-transparent">
        <Row>
          <h1 sm={12} className="headerText">
            Create User
          </h1>
        </Row>
        <Form onSubmit={handleClick} className="mb-3">
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

          <Button className="float-right mb-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
}
export default NewPerson;
