import React, { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import "../css/App.css";
import { numberScrub } from "../utils/helperfunctions";

function NewPerson() {
  // const [formValue, setFormValue] = useState({});
  function handleClick(e) {
    e.preventDefault();
    // setFormValue({
    //   ...setFormValue,
    //   first: e.target.formPersonFirst.value,
    //   last: e.target.formPersonLast.value,
    //   email: e.target.formPersonEmail.value,
    //   mobile_number: numberScrub(e.target.formPersonPhone.value)
    // });

    // let mobile = req.body.data.subscriber.mobile_number;
    // let first = e.target.formPersonFirst.value;
    // let last = e.target.formPersonLast.value;
    // let email = e.target.formPersonEmail.value;
    // let date = ;
    // let keywordsTexted = req.body.data.keyword.name;

    // // console.log(typeof mobile);
    // API.create({
    //   mobile_number: mobile,
    //   first: first,
    //   last: last,
    //   email: email,
    //   date: date,
    //   keywordsTexted: keywordsTexted
    // })
    //   // upon success, send res of 200 to the origin of the webhook
    //   .then(res => {
    //     console.log(res);
    //   })
    //   // catch any errors
    //   .catch(err => res.status(422).json(err));
    // res.json();
  }

  return (
    <Container>
      <Row>
        <h1 sm={12} className="headerText mt-5">
          Create User
        </h1>
      </Row>
      <Form onSubmit={handleClick}>
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
    </Container>
  );
}
export default NewPerson;
