import React, { useEffect } from "react";
import * as Location from "expo-location";
import { CenteredActivityIndicator } from "../../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigation/stack-navigator";

type LocationFetchScreenProp = NativeStackNavigationProp<StackParamList, "LocationFetch">;

type Props = {
  navigation: LocationFetchScreenProp;
};

const LocationFetchScreen = ({ navigation }: Props) => {
  useEffect(() => {
    fetchLocation();
    return () => {};
  }, []);

  const fetchLocation = async () => {
    const lastKnownPosition = await Location.getLastKnownPositionAsync({});
    if (lastKnownPosition) {
      navigation.navigate("Home", { location: lastKnownPosition });
    } else {
      const location = await Location.getCurrentPositionAsync();
      navigation.navigate("Home", { location });
    }
  };
  return <CenteredActivityIndicator />;
};

export default LocationFetchScreen;
