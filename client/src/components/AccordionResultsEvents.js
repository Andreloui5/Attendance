import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import moment from "moment";
import "../css/Accordion.css";

function AccordionEvents(props) {
  return (
    <Container className="mt-4">
      {props.results.map(result => (
        <Accordion
          className="result"
          defaultActiveKey="1"
          key={result._id}
          xl={12}
        >
          <Card className="rounded">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {result.name}: {moment(result.date).format("ll")}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Event Host: {result.host} <br />
                Type of Event: {result.type} <br />
                Keyword Used: {result.keyword} <br />
                <Link
                  to={{
                    pathname: `/events/${result._id}`,
                    state: "/"
                  }}
                >
                  See Attenders from this Event
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </Container>
  );
}
export default AccordionEvents;
