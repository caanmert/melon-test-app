import { Root } from "../types/weather";

export const getHourlyData = (data: Root) => {
  const currentTime = data.current_weather.time;

  const { time, temperature_2m, weathercode } = data.hourly;

  const startIndex = time.findIndex((timestamp) => timestamp === currentTime);

  const formattedHourlyData = time.slice(startIndex).map((timestamp, index) => {
    const dateObj = new Date(timestamp);
    return {
      hour: dateObj.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }),
      temperature: temperature_2m[startIndex + index],
      weatherCode: weathercode[startIndex + index],
    };
  });

  const limitedHourlyData = formattedHourlyData.slice(0, 10);

  return limitedHourlyData;
};

export const getDailyData = (data: Root) => {
  const { time, temperature_2m_min, temperature_2m_max, weathercode } = data.daily;
  const formattedDailyData = time.map((timestamp, index) => {
    return {
      day: new Date(timestamp).toLocaleDateString("en-US", { weekday: "long" }).split(",")[0],
      lowTemp: temperature_2m_min[index],
      highTemp: temperature_2m_max[index],
      weatherCode: weathercode[index],
    };
  });
  return formattedDailyData;
};
