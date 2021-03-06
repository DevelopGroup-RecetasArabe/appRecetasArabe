import React from "react";
import { ImageBackground, View, StyleSheet, Dimensions, Image, ActivityIndicator } from "react-native";

const { width, height } = Dimensions.get("screen");

const Load = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={{ uri: require('../../assets/fondo.png') }} style={styles.image}>
            <Image 
            style={styles.logo}
            source={{ uri: require('../../assets/logo.png') }}
            />
            <View style={styles.carg}>
                <ActivityIndicator size="large" color="#b580ba" />
            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    carg: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    logo: {
        borderRadius: 20,
        width: width * 0.6,
        height: height * 0.3,
        alignSelf: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});

export default Load;