import React from "react";
import { Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

import { getTheme } from "../../tokens/theme";
import { styles } from "./styles";

interface ChartCardProps {
  series: number[];
  title: string;
}

const ChartCard = ({ series, title }: ChartCardProps) => {
  const open = series[0] ?? 0;
  const closed = series[1] ?? 0;

  const { tokens } = getTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.chartContainer}>
        <PieChart
          coverRadius={0.85}
          coverFill="#FFF"
          widthAndHeight={110}
          series={series}
          style={styles.pieChart}
          sliceColor={[tokens.primary100, "#dedede"]}
        />
        <View style={styles.absoluteCenter}>
          <Text style={styles.pieText}>50%</Text>
        </View>
      </View>
      <Text>Abertas:{open}</Text>
      <Text>Encerradas:{closed}</Text>
    </View>
  );
};

export default ChartCard;
