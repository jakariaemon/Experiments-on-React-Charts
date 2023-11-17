import "./styles.css";
import { useState } from "react";
import { VictoryPie } from "victory-pie";
import { VictoryChart } from "victory-chart";
import { VictoryTooltip } from "victory-tooltip";

const App = () => {
  const [data3, setData3] = useState([
    { x: "chrome", y: 30 },
    { x: "safari", y: 180 },
    { x: "firefox", y: 200 },
    { x: "edge", y: 120 },
    { x: "others", y: 100 }
  ]);

  const [label, setLabel] = useState(false);

  const handleClick = () => {
    const updated = [...data3];
    updated[0].y += 700;

    console.log(updated);

    setData3(updated);
  };

  const handleToggler = () => {
    setLabel((val) => !val);
  };

  return (
    <div className="App">
      <VictoryPie
        padAngle={({ datum }) => 2}
        animate={{
          duration: 2000
        }}
        innerRadius={(val) => {
          console.log(val.datum);
          return val.datum.x === "firefox" ? 170 : 130;
        }}
        width="800"
        tooltip={"dshv"}
        labelComponent={
          label ? <VictoryTooltip dy={0} centerOffset={{ x: 25 }} /> : undefined
        }
        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
        data={data3}
      />

      <button onClick={handleClick}>Live Update firefox</button>
      <button onClick={handleToggler}>Toggle Label type</button>
    </div>
  );
};

export default App;
