import React from "react";
import { Row, Col } from "react-materialize";
import "./style.css";

class BottomNav extends React.Component {
  // goToPage = event => {
  //   // prevents default behavior
  //   event.preventDefault();
  //   // logs out the value of the form
  //   console.log(this.myInput.current.value);
  //   // stores value to a variable
  //   const storeName = this.myInput.current.value;
  //   // pushes the input value of the form to the url, engaging the router
  //   this.props.history.push(`/store/${storeName}`);
  // };

  render() {
    return (
      <div className="navbar-bottom">
        <Row className="bacenter">
          <Col s={4}>
            <a href="/">
              <i className="fa fa-home"></i>
            </a>
          </Col>
          <Col s={4}>
            <a href="/newPerson" id="nav-menu">
              <i className="fas fa-user"></i>
            </a>
          </Col>
          <Col s={4}>
            <a href="/newEvent">
              <i className="far fa-calendar-alt"></i>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
export default BottomNav;
