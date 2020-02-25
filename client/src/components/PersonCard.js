import React from "react";
import { PageHeader, Button, Descriptions } from "antd";
import { viewKeywords } from "../utils/helperfunctions";
import API from "../utils/API";
import moment from "moment";
import { formatPhoneNumber } from "../utils/helperfunctions";

function PersonCard(props) {
  function handleText() {}
  function handleUpdate() {}
  function handleDelete() {
    API.deletePerson(props.res._id)
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
    >
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={`${props.res.first} ${props.res.last}`}
        extra={[
          <Button key="3" onClick={handleText}>
            Text this Person
          </Button>,
          <Button key="2" onClick={handleUpdate}>
            Update
          </Button>,
          <Button key="1" type="danger" onClick={handleDelete}>
            Delete
          </Button>
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Cell Number">
            {formatPhoneNumber(props.res.mobile_number)}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            <a href={`mailto: ${props.res.email}`}>{props.res.email}</a>
          </Descriptions.Item>
          <Descriptions.Item label="Date Joined">
            {moment(props.res.date).format("ll")}
          </Descriptions.Item>
          <Descriptions.Item label="Keywords Texted">
            {viewKeywords(props.res.keywordsTexted)}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}
export default PersonCard;
