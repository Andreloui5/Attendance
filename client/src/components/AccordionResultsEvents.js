import React from "react";

import { Accordion, Card, Button, Container } from "react-bootstrap";
import moment from "moment";

function AccordionEvents(props) {
  return (
    <Container>
      {props.results.map(
        (props.result,
        () => (
          <Accordion defaultActiveKey="1" key={props.result._id} xl={12}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {props.result.name}, {moment(props.result.date).format("ll")}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Event Host: {props.result.host} <br />
                  Type of Event: {props.result.type} <br />
                  Keyword Used: {props.result.keyword} <br />
                  <a href={"events/" + props.result._id}>
                    See Attenders from this Event
                  </a>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))
      )}
    </Container>
  );
}
export default AccordionEvents;
