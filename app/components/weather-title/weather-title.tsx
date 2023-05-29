import { StyleSheet, View } from "react-native";
import React from "react";
import { WeatherTitleProps } from "./weather-title.props";
import TextTemperature from "../text-temperature/text-temperature";
import WeatherIcon from "../weather-icon/weather-icon";

const WeatherTitle = ({ weather }: WeatherTitleProps) => {
  return (
    <View style={styles.container}>
      <WeatherIcon style={styles.image} weatherCode={weather.weathercode} />
      <TextTemperature temperature={weather.temperature} style={styles.weatherTitle} />
    </View>
  );
};

export default WeatherTitle;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  weatherTitle: {
    color: "white",
    fontSize: 60,
  },
});
