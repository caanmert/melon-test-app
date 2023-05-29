import { Image } from "react-native";
import { WeatherIconProps } from "./weather-icon.props";
import { weatherCodeIcons } from "../../constants/weather-code-icons";

const WeatherIcon = ({ weatherCode, ...props }: WeatherIconProps) => {
  //@ts-ignore
  const iconName = weatherCodeIcons[weatherCode];

  return <Image {...props} source={iconName} />;
};

export default WeatherIcon;
