import React, { useState } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "antd";
import MyVerticallyCenteredModal from "./Modal";

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
