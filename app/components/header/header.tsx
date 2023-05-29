import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Text from "../text/text";

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={20} color="white" />
      <Text style={styles.city}>City</Text>
      <TouchableOpacity style={{ marginLeft: "auto" }}>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    gap: 10,
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
