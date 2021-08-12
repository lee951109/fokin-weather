import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "efd88f078d10b3680f1707a27ec361c0";

export default class extends React.Component {
  state = {isLoding: true};

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
  }

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoding: false });

    } catch (error) {
      Alert.alert("Can't find you.", "What the fuck!");
      
    }

  }

  componentDidMount(){
   this.getLocation();
  }

  render() {
    const { isLoding } = this.state;
    return isLoding ? <Loading /> : null;
  }
}

