import React from "react";
import { Menu, Icon, Layout } from "antd";
import "antd/dist/antd.css";
import "../css/App.css";

const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
  render() {
    return (
      <div className="homescreen">
        <Layout>
          <Sider
            //closes when screen is smaller than 'lg'
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                <Icon type="search" />
                <span className="nav-text">New search</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="user" />
                <span className="nav-text">Create User</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="calendar" />
                <span className="nav-text">Create Event</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="setting" />
                <span className="nav-text">My Account</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <h1>Attend</h1>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                "Content goes here..."
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>©2020 Craig Gant</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;
