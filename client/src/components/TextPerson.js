import React, { useState } from "react";
import { ButtonToolbar, Modal, Form } from "react-bootstrap";
import { Button } from "antd";

function MyVerticallyCenteredModal(props) {
  console.log(props);
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
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please write text below:</Form.Label>
          <Form.Control as="textarea" rows="3" maxlength="140" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button type="primary" onClick={props.onHide}>
          Send!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function TextPerson(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ButtonToolbar>
      <Button key="3" onClick={() => setModalShow(true)} res={props.res}>
        Text this Person
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        res={props.res}
      />
    </ButtonToolbar>
  );
}
export default TextPerson;
