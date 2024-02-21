import { Text, View, SafeAreaView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Oswald_400Regular, useFonts } from '@expo-google-fonts/oswald';


const {height} = Dimensions.get("window")

const LoginScreen = () => {
    const [fontLoaded] = useFonts({
        Oswald_400Regular
    })

    if(!fontLoaded){
        return null;
    }

    return(
        <SafeAreaView>
            <View>
                <ImageBackground 
                style={{
                    height: height / 2.5,
                    marginTop: 70
                }}
                resizeMode='contain'
                source={require("../../images/contadora.png")}/>
                
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 40,
                }}>

                    <Text style={{
                        fontSize: 35,
                        color: "#d48594",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                    >Seu universo contábil ao alcance dos seus dedos</Text>

                    <Text style={{
                        fontSize: 14,
                        color: "black",
                        fontFamily: "Oswald_400Regular",
                        textAlign: "center",
                        marginTop: 20,
                    }}
                    >Explore, controle, transforme!</Text>
                </View>
                <View 
                style={{
                    paddingHorizontal: 10,
                    paddingTop: 40,
                    alignItems: "center",
                }}>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: "#d48594",
                            paddingVertical: 15,
                            paddingHorizontal: 20,
                            width: "60%",
                            borderRadius: 15,
                        }}>
                        <Text style={{
                        color: "white",
                        fontSize: 20,
                        textAlign:"center",
                        fontFamily: "Oswald_400Regular",
                        fontWeight: "bold",
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen
const styles = StyleSheet.create({})