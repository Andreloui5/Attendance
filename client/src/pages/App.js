import React from "react";
import { Menu, Icon, Layout } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home";
import Event from "../components/Event";
import NewEvent from "../components/NewEvent";
import Person from "../components/Person";
import NewPerson from "../components/NewPerson";
import Account from "../components/Account";
import NotFound from "../components/NotFound";
import Logo from "../assets/Logo.png";
import "antd/dist/antd.css";
import "../css/App.css";

const { Content, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="homescreen">
          <Layout>
            <Sider
              // closes when screen is smaller than 'lg'
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              {/* Navigation menu for the sider */}
              <div className="logo" theme="dark">
                <img id="appLogo" alt="logo" src={Logo} />
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                <Menu.Item key="1">
                  <Link to="/">
                    <Icon type="search" />
                    <span className="nav-text">New search</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/newPerson">
                    <Icon type="user" />
                    <span className="nav-text">Create User</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/newEvent">
                    <Icon type="calendar" />
                    <span className="nav-text">Create Event</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/account">
                    <Icon type="setting" />
                    <span className="nav-text">My Account</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ margin: "24px 16px 0" }}>
                <Switch>
                  <Route exact path={["/", "/home"]}>
                    <Home />
                  </Route>
                  <Route exact path="/people/:id">
                    <Person />
                  </Route>
                  <Route exact path="/newPerson">
                    <NewPerson />
                  </Route>
                  <Route exact path="/events/:id">
                    <Event />
                  </Route>
                  <Route exact path="/newEvent">
                    <NewEvent />
                  </Route>
                  <Route exact path="/account">
                    <Account />
                  </Route>
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
