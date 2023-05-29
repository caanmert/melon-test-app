import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import LottieView from "lottie-react-native";

import * as Location from "expo-location";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigation/stack-navigator";
import LocationContext from "../../context/location-context";

type LandingScreenNavigationProp = NativeStackNavigationProp<StackParamList, "Landing">;

type Props = {
  navigation: LandingScreenNavigationProp;
};

const LandingScreen = ({ navigation }: Props) => {
  const { setIsLocationPermissionGranted } = useContext(LocationContext);

  const onLocationAccessBtnPress = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      setIsLocationPermissionGranted(true);
    } else {
      showLocationDisabledAlert();
    }
  };

  const showLocationDisabledAlert = () => {
    Alert.alert(
      "Location Permission Required For Melon Weather",
      "Please enable location services in your device settings to use this app.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Settings", onPress: openSettings },
      ],
    );
  };

  const openSettings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require("../../../assets/earth-animation.json")}
        style={{
          height: 200,
          width: 200,
        }}
      />

      <Text style={styles.title}>Allow "Melon Weather" to access your location</Text>
      <TouchableOpacity style={styles.button} onPress={onLocationAccessBtnPress}>
        <Text style={styles.buttonText}>Allow to Access</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31ADDD",
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
