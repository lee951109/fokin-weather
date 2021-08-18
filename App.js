import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";



const API_KEY = "efd88f078d10b3680f1707a27ec361c0";

export default class extends React.Component {
  state = {isLoading: true};


  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: {temp},
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      console.log("weather : ", weather);
     this.setState({ 
       isLoading: false, 
       condition: weather[0].main, 
       temp
      });
  }

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "What the fuck!");
      
    }

  }

  componentDidMount(){
   this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
