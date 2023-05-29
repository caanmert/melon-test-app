import { Image, StyleSheet, View } from "react-native";
import windIcon from "../../../assets/icons/wind.png";
import React from "react";
import Text from "../text/text";

const WindInfoBox = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Image style={styles.windImage} source={windIcon} /> 18%
      </Text>

      <Text>
        <Image style={styles.windImage} source={windIcon} /> 18%
      </Text>

      <Text>
        <Image style={styles.windImage} source={windIcon} /> 18%
      </Text>
    </View>
  );
};

export default WindInfoBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#298CC3",
  },
  windImage: {
    width: 20,
    height: 20,
  },
});
