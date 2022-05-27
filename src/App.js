import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { CSVLink } from "react-csv";
import { Line } from "react-chartjs-2";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

let dat = [
  { x: 10, y: 20 },
  { x: 15, y: 50 },
  { x: 20, y: 10 },
  { x: 25, y: 30 },
  { x: 30, y: 80 },
  { x: 35, y: 90 }
];

var em = 200;
const onAddBtnClick = (event) => {
  var inval = document.getElementById("outlined-basic").value;
  console.log(`Value of ${inval} clicked`);
  alert(`${inval}Value of max in y clicked`);
  return inval;
};

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

function valuetext(value) {
  return { value };
}

// Selecting the input element and get its value
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
          suggestedMin: 10,
          suggestedMax: em
        }
      }
    ]
  }
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

export default function App() {
  return (
    <div className="App">
      <h1>React Line Chart with CSV</h1>

      <CSVLink data={dat}>
        <Button variant="contained" color="primary">
          DownLoad CSV
        </Button>
      </CSVLink>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={10}
          getAriaValueText={valuetext}
          marks
          value={this.value}
          onChange={this.handleChange}
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Set Y Axix Maximum"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onAddBtnClick();
          }}
        >
          SET
        </Button>
      </Box>

      <Line data={data} legend={legend} options={options} />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
