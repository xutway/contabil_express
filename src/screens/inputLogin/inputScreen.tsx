import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

const InputScreen = () => {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [senha, setSenha] = useState('')

    const toggleSenhaVisivel = () => {
        setSenhaVisivel(!senhaVisivel)
    }


    return (
        <SafeAreaView>
            {/* <View>
            <Image 
                style={{
                    height: 100,
                    width: 100, 
                    resizeMode: "cover",
                    marginTop: "6%",
                    marginLeft: "35%",
                    position: "absolute",
                }}
                source={require("../../assets/images/randomLogo.png")}/>

            </View> */}
            <View style={{
                    padding: 20,
                }}>
            <View style={{
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontSize: 35,
                        color: "#d48594",
                        fontWeight: "bold",
                        marginVertical: 20,
                        marginTop: "50%",
                    }}
                    >Faça seu login</Text>

                    <Text style={{
                        color: "black",
                        fontFamily: "Oswald_400Regular",
                        textAlign: "center",
                        maxWidth: "100%"
                    }}
                    >Seja bem vindo(a) de volta! Sentimos a sua falta.</Text>
                </View>
                    <View style={{
                        marginVertical: 30,
                    }}>
                        <TextInput
                        placeholder="Email"
                        placeholderTextColor="grey"
                        autoCapitalize='none'
                        secureTextEntry={false}
                        style={{
                            fontFamily: "Oswald_400Regular",
                            fontSize: 14,
                            padding: 20,
                            backgroundColor: "#f6e7ea",
                            borderRadius: 10,
                            marginVertical: 10,
                        }}/>

                        <TextInput
                        placeholder="Senha"
                        placeholderTextColor="grey"
                        autoCapitalize='none'
                        secureTextEntry={!senhaVisivel}
                        value={senha}
                        onChange={(text) => setSenha(text)}
                        style={{
                            fontFamily: "Oswald_400Regular",
                            fontSize: 14,
                            padding: 20,
                            backgroundColor: "#f6e7ea",
                            borderRadius: 10,
                            marginVertical: 10,
                        }}/>
                        <TouchableOpacity onPress={toggleSenhaVisivel} style={{ position: 'absolute', right: 16, top: 120 }}>
                         <Icon name={senhaVisivel ? 'eye' : 'eye-slash'} size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View 
                    style={{
                    alignItems: "center",
                     }}>

                        <TouchableOpacity 
                        style={{
                            alignSelf: "flex-end",
                            paddingBottom: 30,
                        }}>
                            <Text style={{
                            color: "#d48594",
                            fontSize: 14,
                            textAlign:"center",
                            fontWeight: "bold",
                            }}>
                            Esqueceu sua senha?
                            </Text>
                        </TouchableOpacity>

                    <TouchableOpacity 
                        style={{
                            backgroundColor: "#d48594",
                            paddingVertical: 15,
                            paddingHorizontal: 20,
                            width: "100%",
                            borderRadius: 15,
                        }}>
                            <Text style={{
                            color: "white",
                            fontSize: 20,
                            textAlign:"center",
                            fontWeight: "bold",
                            }}>
                            Logar-se
                            </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default InputScreen;
const styles = StyleSheet.create({})