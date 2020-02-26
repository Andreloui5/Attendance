import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  console.log(props);
  let myHeader = "6e58312b7486fd02fe7ecb1fba0cb612";

  function clickHandler(e) {
    e.preventDefault();
    // Makes axios call to text
    axios({
      method: "POST",
      url: "https://api.getclearstream.com/v1/messages",
      headers: { "X-Api-Key": myHeader },
      data: {
        message_header: "AttendApp",
        message_body: "test2",
        subscribers: "+14028806971"
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
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please write text below:</Form.Label>
            <Form.Control
              inputref="textarea"
              as="textarea"
              rows="3"
              maxLength="140"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="submit"
          onClick={(props.onHide, clickHandler)}
        >
          Send!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
