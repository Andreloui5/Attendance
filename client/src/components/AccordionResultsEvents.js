import React from "react";

import { Accordion, Card, Button, Container } from "react-bootstrap";
import moment from "moment";

function AccordionEvents(props) {
  console.log(props);
  return (
    <Container>
      {props.results.map(result => (
        <Accordion defaultActiveKey="1" key={result._id} xl={12}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {result.name}, {moment(result.date).format("ll")}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Event Host: {result.host} <br />
                Type of Event: {result.type} <br />
                Keyword Used: {result.keyword} <br />
                <a href={"events/" + result._id}>
                  See Attenders from this Event
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </Container>
  );
}
export default AccordionEvents;
