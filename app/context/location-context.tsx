import { ReactNode, createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
type LocationContextType = {
  isLoading: boolean;
  isLocationPermissionGranted: boolean;
  setIsLocationPermissionGranted: (bool: boolean) => void;
};

const initialContextValue: LocationContextType = {
  isLoading: false,
  isLocationPermissionGranted: true,
  setIsLocationPermissionGranted: (bool) => {},
};

const LocationContext = createContext<LocationContextType>(initialContextValue);

interface Props {
  children: ReactNode;
}

export const LocationContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLocationPermissionGranted, setIsLocationPermissionGranted] = useState<boolean>(false);

  useEffect(() => {
    getLocation();
    return () => {};
  }, []);

  const getLocation = async () => {
    try {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setIsLocationPermissionGranted(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LocationContext.Provider value={{ isLoading, isLocationPermissionGranted, setIsLocationPermissionGranted }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
