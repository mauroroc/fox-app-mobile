import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import bg from '../../assets/img/bg-fox-entregas-mobile.png';

export function HomeView() {
    return (
        <ImageBackground source={bg} style={styles.background}>
            <SafeAreaView style={styles.view}>
                <Text>Logo</Text>
                <Text>Faça login e escolha os pedidos que quer entregar</Text>
                <Text>Fazer Login</Text>
            </SafeAreaView>
        </ImageBackground>    
    )
}

const styles = StyleSheet.create({
    background: {                
        flex: 1,        
    },
    view: {
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 16,
        flex: 1,
    }
});