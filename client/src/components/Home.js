import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  Button
} from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <InputGroup>
            <FormControl
              placeholder="Search Text"
              aria-label="Search Text"
              aria-describedby="basic-addon2"
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Search For: "
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#">Event By Keyword</Dropdown.Item>
              <Dropdown.Item href="#">Event By Name</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Person By Name</Dropdown.Item>
              <Dropdown.Item href="#">Person By Cell</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Row>
        <Row>
          <Col md={{ offset: 8 }}></Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

// <div id="index-banner" className="parallax-container">
//         <div className="section no-pad-bot">
//           <div className="container">
//             <br />
//             <br />
//             <h1 className="header center text-lighten-2">
//               Attend <i className="medium material-icons prefix">sms</i>
//             </h1>
//             <div className="row center">
//               <h5 className="header col s12 light">Who's at your event?</h5>
//             </div>

//             <form id="mainSearch" className="row bottom">
//               <div className="input-field col m8 s12 center">
//                 <input id="search" type="search" required />
//                 <label className="label-icon" for="search">
//                   <i className="material-icons">search</i>
//                 </label>
//                 <i className="material-icons">close</i>
//               </div>
//               <div className="input-field col m4 s12">
//                 <select required="required" id="searchParam">
//                   <option value="">Choose</option>
//                   <option value="eventName">Event by Name</option>
//                   <option value="eventKeyword">Event by Keyword</option>
//                   <option value="personName">Person by Name</option>
//                   <option value="personCell">Person by Cell</option>
//                 </select>
//                 <label>Search For:</label>
//               </div>
//               <button
//                 id="newSearch"
//                 className="btn waves-effect waves-light row right"
//                 type="submit"
//                 name="action"
//               >
//                 Submit
//                 <i className="material-icons right">send</i>
//               </button>
//             </form>
//             <br />
//             <br />
//           </div>
//         </div>
//       </div>
