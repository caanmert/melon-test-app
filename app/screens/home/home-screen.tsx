import { ScrollView, StyleSheet, View, FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { getWeatherByCoordinates } from "../../api/weather";
import { getDailyData, getHourlyData } from "../../services/weather";
import {
  CenteredActivityIndicator,
  DailyForecastBox,
  DailyForecastBoxItem,
  ErrorRenderer,
  Header,
  HourlyForecastBox,
  HourlyForecastBoxItem,
  WeatherTitle,
  WindInfoBox,
} from "../../components";

import { SafeAreaView } from "react-native-safe-area-context";
import { WeatherHourly } from "../../types/hourly-weather";
import { WeatherDaily } from "../../types/daily-weather";
import { Root } from "../../types/weather";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigation/stack-navigator";
import * as Device from "expo-device";

type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, "Home">;

type Props = NativeStackScreenProps<StackParamList, "Home">;

//Mocked Location on Emulator
const mockedLocation = {
  latitude: 43.204,
  longitude: 27.917,
};

const HomeScreen = ({ route }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Root>();
  const [hourlyTemp, setHourlyTemp] = useState<WeatherHourly[]>([]);
  const [dailyTemp, setDailyTemp] = useState<WeatherDaily[]>([]);
  const [error, setError] = useState<unknown>();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const fetchData = async () => {
    // Checking if it is real device or emulator
    const { latitude, longitude } = Device.isDevice ? route.params.location.coords : mockedLocation;

    try {
      setIsLoading(true);
      const data = await getWeatherByCoordinates(latitude, longitude);
      setData(data);
      const hourlyData = getHourlyData(data);
      const dailyData = getDailyData(data);

      setHourlyTemp(hourlyData);
      setDailyTemp(dailyData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (error) {
    return <ErrorRenderer onContinue={() => fetchData()} error={error} />;
  }
  if (isLoading) {
    return <CenteredActivityIndicator />;
  }

  if (!data) {
    return null;
  }

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      style={{ backgroundColor: "#31ADDD" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Header />

          <WeatherTitle weather={data.current_weather} />
          {/* INFO: This only for design purposes, API response doesnt give much information about wind */}
          <WindInfoBox />

          <HourlyForecastBox>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={hourlyTemp}
              renderItem={({ item, index }) => <HourlyForecastBoxItem key={index} item={item} />}
            />
          </HourlyForecastBox>

          <DailyForecastBox>
            {dailyTemp.map((data, index) => {
              return <DailyForecastBoxItem key={index} item={data} />;
            })}
          </DailyForecastBox>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
