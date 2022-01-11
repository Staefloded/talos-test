import { Timestamp } from "@/utils/types";
import * as Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

type CoinChartProps = {
  timestamp: Timestamp;
};

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const CoinChart = ({ timestamp, ...rest }: CoinChartProps) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    title: {
      text: "One Year chart",
    },
    plotOptions: {
      stochastic: {},
    },
    xAxis: {
      categories: timestamp.history_1y.map(({ timestamp }) =>
        new Date(timestamp).toLocaleDateString("en-US", { month: "short", year: "numeric" })
      ),
    },
    series: [
      {
        type: "line",
        data: timestamp.history_1y.map(({ price }) => [price]),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        constructorType={""}
        {...rest}
      />
    </div>
  );
};

export default CoinChart;
