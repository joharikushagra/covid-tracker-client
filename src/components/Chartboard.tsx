import { useQuery } from "@apollo/client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { GET_GLOBAL } from "../utils/gqlQuery";

import  { PieChartData } from "../utils/ChartData";

import "../styles/Chartboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function Chartboard() {
  const { data, loading } = useQuery(GET_GLOBAL);
  let pieData = PieChartData(null);
  if (!loading) {
    pieData = PieChartData(data.global);
  }

  return (
    <div className="chartboard">
      <div className="chartboard__heading">
        <h2>WorldWide Covid 19 Stats</h2>
      </div>
      {!loading && (
        <div className="chartboard__stats">
          <div className="chartboard__totalconfirmed">
            <p>Total Confirmed Cases</p>
            <p className="chartboard__totalconfirmed__count">
              {data.global.TotalConfirmed}
            </p>
          </div>
          <div className="chartboard__totaldeaths">
            <p>Total Confirmed Cases</p>
            <p className="chartboard__totaldeaths__count">
              {data.global.TotalDeaths}
            </p>
          </div>
          <div className="chartboard__pie">
            <Pie data={pieData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chartboard;
