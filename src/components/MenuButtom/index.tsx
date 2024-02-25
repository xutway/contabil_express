import { Pressable, Text, View } from "react-native";

import { Image } from "expo-image";
import { router } from "expo-router";

import { styles } from "./styles";

type MenuButtomProps = {
  title?: string;
  description?: string;
  source: string;
};

const MenuButtom = ({ title, description, source }: MenuButtomProps) => {
  return (
    <Pressable onPress={() => router.push("/home")} style={styles.container}>
      {source && (
        <View style={styles.buttom}>
          <Image source={source} style={{ width: 43, height: 43 }} />
        </View>
      )}
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default MenuButtom;
