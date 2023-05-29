import { ImageStyle, StyleProp } from "react-native/types";

export interface WeatherIconProps {
  weatherCode: number;
  style?: StyleProp<ImageStyle>;
}
