import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { formatPhoneNumber } from "../utils/helperfunctions";
import { openNotification } from "./Notification";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  console.log(props);
  let myHeader = "6e58312b7486fd02fe7ecb1fba0cb612";

  function submitHandler(e) {
    e.preventDefault();
    // Makes axios call to text
    let textContent = e.target.textArea1.value;
    console.log(textContent);
    axios({
      method: "POST",
      url: "https://api.getclearstream.com/v1/messages",
      headers: { "X-Api-Key": myHeader },
      data: {
        message_header: "Attend",
        message_body: textContent,
        subscribers: props.res.mobile_number
      }
    })
      .then(res => {
        console.log(res);
        openNotification("success", "Your message has been sent");
      })
      .catch(err => {
        console.log(err);
      });
  }

  // handleClick = e => {
  //   e.preventDefault();
  //   props.show = false;
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Message to{" "}
          {/* if the user doesn't have name info, display mobile number */}
          {props.res.first === "Unknown"
            ? formatPhoneNumber(props.res.mobile_number)
            : `${props.res.first} ${props.res.last}`}
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
