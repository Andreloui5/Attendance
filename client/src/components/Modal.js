import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  console.log(props);
  let myHeader = "6e58312b7486fd02fe7ecb1fba0cb612";

  function submitHandler(e) {
    e.preventDefault();
    // Makes axios call to text
    let meatball = e.target.textArea1.value;
    console.log(meatball);
    axios({
      method: "POST",
      url: "https://api.getclearstream.com/v1/messages",
      headers: { "X-Api-Key": myHeader },
      data: {
        message_header: "AttendApp",
        message_body: meatball,
        subscribers: props.res.mobile_number
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Message to {props.res.first} {props.res.last}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="textArea1">
            <Form.Label>Please write text below:</Form.Label>
            <Form.Control as="textarea" rows="3" maxLength="140" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send!
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button
          variant="primary"
          type="submit"
          onClick={(props.onHide, submitHandler)}
        >
          Send!
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
