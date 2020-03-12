import React from "react";
import Chart from "react-google-charts";
import { Row, Col } from "react-bootstrap";

function ColumnChart(props) {
  const options = {
    title: "Keywords Texted over Time",
    vAxis: { title: "Keword Used", viewWindow: { min: 0, max: 15 } },
    hAxis: { title: "Number of Times Texted", viewWindow: { min: 0, max: 15 } }
  };

  return (
    <Row className="mb-4">
      <Col sm={12} className="mb-4 justify-content-sm-center">
        <Chart
          style={{ marginBottom: "5px" }}
          width={"500px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Element",
              "Density",
              { role: "style" },
              {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify"
              }
            ],
            ["Copper", 8.94, "#b87333", null],
            ["Silver", 10.49, "silver", null],
            ["Gold", 19.3, "gold", null],
            ["Platinum", 21.45, "color: #e5e4e2", null]
          ]}
          options={{
            title: "Density of Precious Metals, in g/cm^3",
            width: 600,
            height: 400,
            bar: { groupWidth: "95%" },
            legend: { position: "none" }
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
      </Col>
    </Row>
  );
}
export default ColumnChart;
