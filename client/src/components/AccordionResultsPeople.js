import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import { viewKeywords, formatPhoneNumber } from "../utils/helperfunctions";
import "../css/Accordion.css";

function AccordionPeople(props) {
  return (
    <Container>
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
                {result.first === "Unknown"
                  ? formatPhoneNumber(result.mobile_number)
                  : `${result.first} ${result.last}`}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Mobile Number: {formatPhoneNumber(result.mobile_number)} <br />
                Email: {result.email} <br />
                Keywords Texted: {viewKeywords(result.keywordsTexted)}
                <br />
                <Link
                  to={{
                    pathname: `/people/${result._id}`,
                    state: "/"
                  }}
                >
                  See events this person has attended
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </Container>
  );
}
export default AccordionPeople;
