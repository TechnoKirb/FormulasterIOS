import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Formulaster</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Algebra1")
                    }>
                        <Text style={styles.routeText}>Algebra 1</Text>
                        <Image source={require("../assets/alg1bg.png")} style={styles.iconImage1}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Geometry")
                    }>
                        <Text style={styles.routeText}>Geometry</Text>
                        <Image source={require("../assets/geobg1.png")} style={styles.iconImage1}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Algebra2")
                    }>
                        <Text style={styles.routeText}>Algebra 2</Text>
                        <Image source={require("../assets/alg2bg.png")} style={styles.iconImage1}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Trigonometry")
                    }>
                        <Text style={styles.routeText}>Trigonometry</Text>
                        <Image source={require("../assets/trigbg.png")} style={styles.iconImage1}></Image>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Precal")
                    }>
                        <Text style={styles.routeText}>Pre-Calculus</Text>
                        <Image source={require("../assets/precalbg.png")} style={styles.iconImage1}></Image>
                    </TouchableOpacity>
                    


                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        height:800
    },
    routeCard: {
        flex: 0.15,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        marginTop: 60,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage1: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: 10,
        top: -10
    },
    iconImage2: {
        position: "absolute",
        height: 200,
        width: 150,
        resizeMode: "none",
        right: 20,
        top: -60,
    },
    iconImage3: {
        position: "absolute",
        resizeMode: "contain",
        right: 20,
        top: -60,
    }
});