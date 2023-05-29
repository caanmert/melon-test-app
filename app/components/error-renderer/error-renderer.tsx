import { Alert, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { ErrorRendererProps } from "./error-renderer.props";
import Text from "../text/text";

const ErrorRenderer = ({ onContinue, error }: ErrorRendererProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{error}</Text>
      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Try Again!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31ADDD",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    gap: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 20,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});

export default ErrorRenderer;
