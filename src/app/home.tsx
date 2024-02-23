import { StyleSheet, View } from "react-native";

import { GridMenu } from "components/gridMenu";
import { menuItems } from "components/gridMenu/helper";

import { Divider } from "@gluestack-ui/themed";

const HomeScreen = () => {
  return (
    <View>
      <Divider style={styles.divider} />
      <View style={styles.menuContainer}>
        <GridMenu items={menuItems} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  divider: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
  },
});
