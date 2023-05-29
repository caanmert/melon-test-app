import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

const CenteredActivityIndicator = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default CenteredActivityIndicator;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    backgroundColor: "#31ADDD",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
});
