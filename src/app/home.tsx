import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";

const { height } = Dimensions.get("window");

const LoginScreen = () => {
  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("assets/images/contadora.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Seu universo contábil ao alcance dos seus dedos
          </Text>
          <Text style={styles.subtitle}>Explore, controle, transforme!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {},
  container: {},
  imageBackground: {
    height: height / 2.5,
    marginTop: 70,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 35,
    color: "primary300",
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "black",
    fontFamily: "Oswald_400Regular",
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingTop: 40,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#d48594",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "60%",
    borderRadius: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Oswald_400Regular",
    fontWeight: "bold",
  },
});

export default LoginScreen;
