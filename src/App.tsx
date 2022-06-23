import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeView } from "./views/Home";

export default function App () {
    return (
    <View style={styles.background}>
        <HomeView />
    </View>
    );
}

const styles = StyleSheet.create({
    background: {                
        flex: 1,
    },
});
