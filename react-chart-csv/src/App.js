import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CSVLink } from "react-csv";
import { Line } from "react-chartjs-2";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";

let dat = [
  { x: 10, y: 40 },
  { x: 15, y: 50 },
  { x: 20, y: 76 },
  { x: 25, y: 65 },
  { x: 30, y: 80 },
  { x: 35, y: 90 }
];

const data = {
  labels: ["10", "15", "20", "25", "30", "35"],
  datasets: [
    {
      label: "First dataset",
      data: dat,
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

// Selecting the input element and get its value

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 16
  }
};

export default function App() {
  const [message, setMessage] = useState("");
  const [msg, setminMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const minhandleChange = (event) => {
    setminMessage(event.target.value);
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: "Chart Title"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: msg,
            suggestedMax: message
          }
        }
      ]
    }
  };
  return (
    <div className="App">
      <h1>React Line Chart with CSV</h1>

      <CSVLink data={dat}>
        <Button variant="contained" color="primary">
          DownLoad CSV
        </Button>
      </CSVLink>

      <Box>
        <TextField
          type="text"
          id="message"
          name="message"
          label="Set Y Axix Maximum"
          onChange={handleChange}
          value={message}
        />
        <TextField
          type="text"
          id="msg"
          name="msg"
          label="Set Y Axix Mimimum"
          onChange={minhandleChange}
          value={msg}
        />
      </Box>
      <Line data={data} legend={legend} options={options} />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
