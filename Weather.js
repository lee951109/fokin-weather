import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const weatherOptions = {
    Clouds: {
        IconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subTitle: "kakao bank 10만 가즈아~"
    },
    Thunderstorm: {
        IconName: "weather-lightning",
        gradient: ["#373B44", "#4286F4"],
        title: "Thunderstorm in the house",
        subTitle: "Actually, outside of the house"
    },
    Drizzle: {
        IconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subTitle: "Is list rain, but gay~~"
    },
    Rain: {
        IconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subTitle: "For more info look outside"
    },
    Snow: {
        IconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "cold as balls",
        subTitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        IconName: "weather-hail",
        gradient: ["#89F6FE", "#66A6FF"],
        title: "Clouds",
        subTitle: "I know, fucking boring"
    },
    Clear: {
        IconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subTitle: "Go get your ass burnt"
    },
    Haze: {
        IconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subTitle: "Just don't go outside"
    },
    Mist: {
        IconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subTitle: "아주스틸 따상상 가즈아~"
    },
    Dust: {
        IconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subTitle: "영차영차"
    }
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                name={weatherOptions[condition].IconName} 
                size={96} 
                color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>

                {/*style을 두개 가지기 위해 */}
             <View style={{...styles.halfContainer, ...styles.textContainer}}> 
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
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
    },
    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: "300",  
        marginBottom: 10,
        textAlign: 'left'
    },
    subTitle: {
        color: 'white',
        fontWeight: "600",     
        fontSize: 25,
        textAlign: 'left'
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
});