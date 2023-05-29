import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HourlyForecastBoxProps } from "./hourly-forecast-box.props";

const HourlyForecastBox = ({ children }: HourlyForecastBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.dayText}>Today</Text>
        <Text style={styles.dateText}>Mar, 10</Text>
      </View>
      {children}
    </View>
  );
};

export default HourlyForecastBox;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#298CC3",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  dateText: {
    color: "white",
  },
});
