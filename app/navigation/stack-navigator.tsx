import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LandingScreen, LocationFetchScreen } from "../screens";
import type { RouteProp } from "@react-navigation/native";
import * as Location from "expo-location";
import { useContext } from "react";
import { CenteredActivityIndicator } from "../components";
import LocationContext from "../context/location-context";

export type StackParamList = {
  Loading: undefined;
  Landing: undefined;
  LocationFetch: undefined;
  Home: {
    location: Location.LocationObject;
  };
};

type StackRouteProp = RouteProp<StackParamList, keyof StackParamList>;

const Stack = createNativeStackNavigator<StackParamList>();

const getNavigatorStacks = (isLoading: boolean, isLocationPermissionGranted: boolean) => {
  return isLoading ? (
    <Stack.Screen name="Loading" component={CenteredActivityIndicator} />
  ) : (
    <>
      {isLocationPermissionGranted ? (
        <>
          <Stack.Screen name="LocationFetch" component={LocationFetchScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <Stack.Screen name="Landing" component={LandingScreen} />
      )}
    </>
  );
};

export function StackNavigator() {
  const { isLoading, isLocationPermissionGranted } = useContext(LocationContext);

  const stacks = getNavigatorStacks(isLoading, isLocationPermissionGranted);
  return <Stack.Navigator screenOptions={{ headerShown: false }}>{stacks}</Stack.Navigator>;
}
