import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Image } from "expo-image";

import { Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";

type HeaderProps = {
  user: {
    name: string;
    avatar: string;
  };
  notifications: number;
};
const Header = ({ user, notifications }: HeaderProps) => {
  const { name } = user;

  return (
    <View style={styles.container}>
      <View style={styles.notifications}>
        <Image
          style={{
            width: 190,
            height: 155,
            left: -25,
            top: -60,
            position: "absolute",
          }}
          source={require("assets/images/home/nameBuble.png")}
        />
        <Text style={styles.notificationsTitle}>
          Olá,<Text style={styles.name}>{name}!</Text>{" "}
        </Text>
        <Text style={styles.notificationMsg}>
          Você tem {notifications} comunicado(s)
        </Text>
      </View>
      <View>
        <Image
          style={{
            width: 160,
            height: 117,
            left: -65,
            top: -35,
            position: "absolute",
          }}
          source={require("assets/images/home/userBuble.png")}
        />
        <Avatar bgColor="$amber600" size="md" borderRadius="$full">
          <AvatarFallbackText>{name}</AvatarFallbackText>

          <AvatarImage
            alt="Fernanda"
            source={require(`assets/images/TestImages/fernanda.png`)}
          />
        </Avatar>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  notifications: {
    display: "flex",
    flexDirection: "column",
  },
  notificationMsg: {
    fontFamily: "Inter_300Light",
    color: "white",
    fontSize: 13,
  },
  notificationsTitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Inter_300Light",
  },
  name: {
    color: "white",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },
});
