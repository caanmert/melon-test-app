import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HourlyForecastBoxItemProps } from "./hourly-forecast-box-item.props";
import TextTemperature from "../text-temperature/text-temperature";

import WeatherIcon from "../weather-icon/weather-icon";

const HourlyForecastBoxItem = ({ item }: HourlyForecastBoxItemProps) => {
  return (
    <View style={styles.container}>
      <TextTemperature temperature={item.temperature} />
      <WeatherIcon weatherCode={item.weatherCode} style={styles.image} />
      <Text style={styles.hour}>{item.hour}</Text>
    </View>
  );
};

export default HourlyForecastBoxItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 63,
    gap: 10,
  },

  image: {
    height: 50,
    resizeMode: "contain",
  },
  hour: {
    color: "white",
  },
});
