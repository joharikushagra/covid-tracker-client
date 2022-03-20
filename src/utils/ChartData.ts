import { GlobalType } from "./types";

export const PieChartData = (global: GlobalType | null) => {
  const data = {
    labels: ["TotalDeaths", "TotalCases", "TotalRecovered", "NewConfirmed","NewDeaths"],
    datasets: [
      {
        label: "WorldWide Covid Cases",
        data: [global?.TotalDeaths, global?.TotalConfirmed, global?.TotalRecovered, global?.NewConfirmed, global?.NewDeaths],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return data;
};
