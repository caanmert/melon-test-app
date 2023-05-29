import { StyleSheet, View } from "react-native";
import React from "react";
import { TextTemperaturePops } from "./text-temperature.props";
import Text from "../text/text";

const TextTemperature = ({ temperature, ...props }: TextTemperaturePops) => {
  return <Text {...props}>{temperature.toFixed() + "°"}</Text>;
};

export default TextTemperature;

const styles = StyleSheet.create({});
