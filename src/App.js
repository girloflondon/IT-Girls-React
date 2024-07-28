import "./App.css";
import { Chart } from "react-google-charts";

const options = {
  title: "Most popular programmming languages",
  is3D: true,
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={[
          ["Language", "% of users"],
          ["JavaScript", 18.1],
          ["Java", 14.7],
          ["C#", 14.3],
          ["Python", 12.1],
          ["PHP", 10.1],
          ["TypeScript", 6.9],
          ["C++", 4.6],
          ["Swift", 3.1],
          ["Ruby", 3],
          ["Other", 13.1],
        ]}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
}

export default App;
