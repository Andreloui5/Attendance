import React from "react";
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
        <div className="row center">
          <div className="col s4">
            <a href="/">
              <i className="fa fa-home"></i>
            </a>
          </div>
          <div className="col s4">
            <a href="/newPerson" id="nav-menu">
              <i className="fas fa-user"></i>
            </a>
          </div>
          <div className="col s4">
            <a href="/newEvent">
              <i className="far fa-calendar-alt"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default BottomNav;
