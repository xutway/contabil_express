import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

import ChartCard from "components/ChartCard";
import { GridMenu } from "components/gridMenu";
import { menuItems } from "components/gridMenu/helper";
import MenuButtom from "components/MenuButtom";
import { Image } from "expo-image";

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <ScrollView>
      <Image
        style={{
          top: -10,
          zIndex: -9999,
          position: "absolute",
          width,
          height: 300,
        }}
        source={require("assets/images/home/bgBuble.png")}
      />
      <View style={styles.divider} />
      <View style={styles.menuContainer}>
        <GridMenu items={menuItems} />
        <View style={styles.chartContainer}>
          <ChartCard title="Log de Solicitações" series={[1, 1]} />
          <ChartCard title="Log de Processos" series={[1, 1]} />
        </View>
        <MenuButtom
          source={require("assets/images/home/eventIcon.png")}
          title="Calendário"
          description="Confira aqui suas dependências do mês"
        />
        <MenuButtom
          source={require("assets/images/home/cloudIcon.png")}
          title="GED"
          description="Seu Gerenciador Eletrônico de Documentos"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  divider: {
    marginVertical: 70,
    height: 1,
    width: "80%",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
    gap: 10,
    paddingBottom: 20,
  },
  chartContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
