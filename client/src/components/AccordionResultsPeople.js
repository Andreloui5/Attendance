import React from "react";

import { Accordion, Card, Button, Container } from "react-bootstrap";

function AccordionPeople(props) {
  return (
    <Container>
      {props.results.map(
        (props.result,
        () => (
          <Accordion defaultActiveKey="1" key={props.result._id} xl={12}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {props.result.first} {props.result.last}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Mobile Number: {props.result.mobile_number} <br />
                  Email: {props.result.email} <br />
                  Keywords Texted: {props.result.keyword} <br />
                  <a href={"people/" + props.result._id}>
                    See Events this person has attended
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
export default AccordionPeople;
