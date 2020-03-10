import React from "react";
import { PageHeader, Button, Descriptions } from "antd";
import API from "../utils/API";
import moment from "moment";
import "../css/TopCard.css";

function EventCard(props) {
  // function handleUpdate() {}

  function handleDelete() {
    API.deleteEvent(props.res._id)
      // .then(<Success />);
      .then(() => (document.location.href = "/"));
  }

  return (
    <div
      style={{
        // backgroundColor: "#F5F5F5",
        backgroundColor: "#001529",
        padding: 24
      }}
      className="topCard"
    >
      <PageHeader
        style={{ borderRadius: "5px" }}
        ghost={false}
        onBack={() => window.history.back()}
        title={`${props.res.name}`}
        extra={[
          // <Button key="2" onClick={handleUpdate}>
          //   Update
          // </Button>,
          <Button key="1" type="danger" onClick={handleDelete}>
            Delete
          </Button>
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Host">{props.res.host}</Descriptions.Item>
          <Descriptions.Item label="Type of Event">
            {props.res.type}
          </Descriptions.Item>
          <Descriptions.Item label="Date of Event">
            {moment(props.res.date).format("ll")}
          </Descriptions.Item>
          <Descriptions.Item label="Keyword Used">
            {props.res.keyword}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}
export default EventCard;
