import { StyleSheet, View } from "react-native";
import React from "react";
import { DailyForecastBoxItemProps } from "./daily-forecast-box-item.props";
import TextTemperature from "../text-temperature/text-temperature";
import Text from "../text/text";
import WeatherIcon from "../weather-icon/weather-icon";

const DailyForecastBoxItem = ({ item }: DailyForecastBoxItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>{item.day}</Text>
      <WeatherIcon weatherCode={item.weatherCode} style={styles.image} />
      <View style={styles.minMaxTemps}>
        <TextTemperature temperature={item.lowTemp} />
        <TextTemperature temperature={item.highTemp} />
      </View>
    </View>
  );
};

export default DailyForecastBoxItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayText: {
    width: 80,
    color: "white",
  },
  image: {
    width: 40,
    height: 35,
    resizeMode: "contain",
  },
  minMaxTemps: {
    flexDirection: "row",
    gap: 10,
  },
});
