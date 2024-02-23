import { Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { router } from "expo-router";

import { styles } from "./styles";

import { View } from "@gluestack-ui/themed";

type GridMenuProps = {
  items: {
    title: string;
    icon: string;
    route: any;
    notification?: number;
  }[];
};

export const GridMenu = ({ items }: GridMenuProps) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Pressable
            onPress={() => router.push(item.route)}
            style={styles.buttom}
          >
            {(item?.notification ?? 0) > 0 && (
              <View style={styles.notification}>
                <Text style={styles.notificationText}>
                  {item?.notification || 0}
                </Text>
              </View>
            )}
            <Icon name={item.icon} size={40} color="white" />
          </Pressable>
          <Text style={styles.buttonText}>{item?.title}</Text>
        </View>
      ))}
    </View>
  );
};
