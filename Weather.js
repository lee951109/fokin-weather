import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const weatherOptions = {
    Clouds: {
        IconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    }
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].IconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>

            <View style={styles.halfContainer}>
             
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired //필수적으로 있어야 하는 곳에 붙인다.
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp:{
        fontSize: 40,
        color: 'white'
    },  
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
});