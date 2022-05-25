import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CSVLink } from "react-csv";
import { Line } from "react-chartjs-2";
import Button from "@mui/material/Button";
const da = [
    { firstname: "Jakaria", lastname: "Emon", email: "jakariaemo1521@sgmail.com" },
    { firstname: "t", lastname: "Sawada", email: "hdk@gmai.com" },
    { firstname: "h", lastname: "anada", email: "hdk@gmail.com" }
];
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function App() {
  return (
      <div className="App">
          <h1>React Line Chart with CSV</h1>

          <CSVLink data={da}>
              <Button variant="contained" color="primary">
                  DownLoad CSV
              </Button>
          </CSVLink>
          
      <Line data={data} />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
