import React from "react";

import { Accordion, Card, Button, Container } from "react-bootstrap";

function AccordionPeople(props) {
  return (
    <Container>
      {props.results.map(result => (
        <Accordion defaultActiveKey="1" key={result._id} xl={12}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {result.first} {result.last}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Mobile Number: {result.mobile_number} <br />
                Email: {result.email} <br />
                Keywords Texted: {result.keyword} <br />
                <a href={"people/" + result._id}>
                  See events this person has attended
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </Container>
  );
}
export default AccordionPeople;
