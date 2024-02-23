import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const InputScreen = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState("");

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Text style={styles.title}>Faça seu login</Text>
          <Text style={styles.subtitle}>
            Seja bem vindo(a) de volta! Sentimos a sua falta.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            autoCapitalize="none"
            secureTextEntry={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="grey"
            autoCapitalize="none"
            secureTextEntry={!senhaVisivel}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            style={styles.input}
          />
          <TouchableOpacity onPress={toggleSenhaVisivel} style={styles.eyeIcon}>
            <Icon
              name={senhaVisivel ? "eye" : "eye-slash"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.centeredView}>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Logar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {},
  container: {
    padding: 20,
  },
  centeredView: {
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    color: "#d48594",
    fontWeight: "bold",
    marginVertical: 20,
    marginTop: "50%",
  },
  subtitle: {
    color: "black",
    fontFamily: "Oswald_400Regular",
    textAlign: "center",
    maxWidth: "100%",
  },
  inputContainer: {
    marginVertical: 30,
  },
  input: {
    fontFamily: "Oswald_400Regular",
    fontSize: 14,
    padding: 20,
    backgroundColor: "#f6e7ea",
    borderRadius: 10,
    marginVertical: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 120,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    paddingBottom: 30,
  },
  forgotPasswordText: {
    color: "#d48594",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#d48594",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    borderRadius: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default InputScreen;
