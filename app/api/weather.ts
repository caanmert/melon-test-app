import { BASE_URL } from "@env";

export const getWeatherByCoordinates = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FSofia`,
  );
  const data = await response.json();
  return data;
};
