import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { DailyForecastBoxProps } from "./daily-forecast-box.props";
import Text from "../text/text";

const DailyForecastBox = ({ children }: DailyForecastBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Next Forecast</Text>
        <FontAwesome name="calendar" size={20} color="white" />
      </View>
      {children}
    </View>
  );
};

export default DailyForecastBox;

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
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
