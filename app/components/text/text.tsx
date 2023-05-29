import { StyleSheet, Text as ReactNativeText, View } from "react-native";
import React from "react";
import { TextProps } from "./text.props";

const Text = ({ children, ...props }: TextProps) => {
  return (
    <ReactNativeText style={styles.text} {...props}>
      {children}
    </ReactNativeText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
