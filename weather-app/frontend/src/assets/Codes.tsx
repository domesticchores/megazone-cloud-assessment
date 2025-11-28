export interface WeatherCode {
  code: number;
  day: string;
  night: string;
  iconDay: string;
  iconNight: string;
}

export const weatherCodes: Record<number, WeatherCode> = {
  1000: { code: 1000, day: "Sunny", night: "Clear", iconDay: "clear_day", iconNight: "clear_night" },
  1003: { code: 1003, day: "Partly cloudy", night: "Partly cloudy", iconDay: "partly_cloudy_day", iconNight: "partly_cloudy_night" },
  1006: { code: 1006, day: "Cloudy", night: "Cloudy", iconDay: "cloud", iconNight: "cloud" },
  1009: { code: 1009, day: "Overcast", night: "Overcast", iconDay: "cloud", iconNight: "cloud" },
  1030: { code: 1030, day: "Mist", night: "Mist", iconDay: "foggy", iconNight: "foggy" },
  1063: { code: 1063, day: "Patchy rain possible", night: "Patchy rain possible", iconDay: "rainy", iconNight: "rainy" },
  1066: { code: 1066, day: "Patchy snow possible", night: "Patchy snow possible", iconDay: "snowing", iconNight: "snowing" },
  1069: { code: 1069, day: "Patchy sleet possible", night: "Patchy sleet possible", iconDay: "weather_mix", iconNight: "weather_mix" },
  1072: { code: 1072, day: "Patchy freezing drizzle possible", night: "Patchy freezing drizzle possible", iconDay: "rainy", iconNight: "rainy" },
  1087: { code: 1087, day: "Thundery outbreaks possible", night: "Thundery outbreaks possible", iconDay: "thunderstorm", iconNight: "thunderstorm" },
  1114: { code: 1114, day: "Blowing snow", night: "Blowing snow", iconDay: "snowing", iconNight: "snowing" },
  1117: { code: 1117, day: "Blizzard", night: "Blizzard", iconDay: "snowing_heavy", iconNight: "snowing_heavy" },
  1135: { code: 1135, day: "Fog", night: "Fog", iconDay: "foggy", iconNight: "foggy" },
  1147: { code: 1147, day: "Freezing fog", night: "Freezing fog", iconDay: "foggy", iconNight: "foggy" },
  1150: { code: 1150, day: "Patchy light drizzle", night: "Patchy light drizzle", iconDay: "rainy_light", iconNight: "rainy_light" },
  1153: { code: 1153, day: "Light drizzle", night: "Light drizzle", iconDay: "rainy_light", iconNight: "rainy_light" },
  1168: { code: 1168, day: "Freezing drizzle", night: "Freezing drizzle", iconDay: "rainy", iconNight: "rainy" },
  1171: { code: 1171, day: "Heavy freezing drizzle", night: "Heavy freezing drizzle", iconDay: "rainy_heavy", iconNight: "rainy_heavy" },
  1180: { code: 1180, day: "Patchy light rain", night: "Patchy light rain", iconDay: "rainy_light", iconNight: "rainy_light" },
  1183: { code: 1183, day: "Light rain", night: "Light rain", iconDay: "rainy_light", iconNight: "rainy_light" },
  1186: { code: 1186, day: "Moderate rain at times", night: "Moderate rain at times", iconDay: "rainy", iconNight: "rainy" },
  1189: { code: 1189, day: "Moderate rain", night: "Moderate rain", iconDay: "rainy", iconNight: "rainy" },
  1192: { code: 1192, day: "Heavy rain at times", night: "Heavy rain at times", iconDay: "rainy_heavy", iconNight: "rainy_heavy" },
  1195: { code: 1195, day: "Heavy rain", night: "Heavy rain", iconDay: "rainy_heavy", iconNight: "rainy_heavy" },
  1198: { code: 1198, day: "Light freezing rain", night: "Light freezing rain", iconDay: "rainy", iconNight: "rainy" },
  1201: { code: 1201, day: "Moderate or heavy freezing rain", night: "Moderate or heavy freezing rain", iconDay: "rainy_heavy", iconNight: "rainy_heavy" },
  1204: { code: 1204, day: "Light sleet", night: "Light sleet", iconDay: "weather_mix", iconNight: "weather_mix" },
  1207: { code: 1207, day: "Moderate or heavy sleet", night: "Moderate or heavy sleet", iconDay: "weather_mix", iconNight: "weather_mix" },
  1210: { code: 1210, day: "Patchy light snow", night: "Patchy light snow", iconDay: "snowing", iconNight: "snowing" },
  1213: { code: 1213, day: "Light snow", night: "Light snow", iconDay: "snowing", iconNight: "snowing" },
  1216: { code: 1216, day: "Patchy moderate snow", night: "Patchy moderate snow", iconDay: "snowing", iconNight: "snowing" },
  1219: { code: 1219, day: "Moderate snow", night: "Moderate snow", iconDay: "snowing", iconNight: "snowing" },
  1222: { code: 1222, day: "Patchy heavy snow", night: "Patchy heavy snow", iconDay: "snowing_heavy", iconNight: "snowing_heavy" },
  1225: { code: 1225, day: "Heavy snow", night: "Heavy snow", iconDay: "snowing_heavy", iconNight: "snowing_heavy" },
  1237: { code: 1237, day: "Ice pellets", night: "Ice pellets", iconDay: "hail", iconNight: "hail" },
  1240: { code: 1240, day: "Light rain shower", night: "Light rain shower", iconDay: "rainy_light", iconNight: "rainy_light" },
  1243: { code: 1243, day: "Moderate or heavy rain shower", night: "Moderate or heavy rain shower", iconDay: "rainy", iconNight: "rainy" },
  1246: { code: 1246, day: "Torrential rain shower", night: "Torrential rain shower", iconDay: "rainy_heavy", iconNight: "rainy_heavy" },
  1249: { code: 1249, day: "Light sleet showers", night: "Light sleet showers", iconDay: "weather_mix", iconNight: "weather_mix" },
  1252: { code: 1252, day: "Moderate or heavy sleet showers", night: "Moderate or heavy sleet showers", iconDay: "weather_mix", iconNight: "weather_mix" },
  1255: { code: 1255, day: "Light snow showers", night: "Light snow showers", iconDay: "snowing", iconNight: "snowing" },
  1258: { code: 1258, day: "Moderate or heavy snow showers", night: "Moderate or heavy snow showers", iconDay: "snowing_heavy", iconNight: "snowing_heavy" },
  1261: { code: 1261, day: "Light showers of ice pellets", night: "Light showers of ice pellets", iconDay: "hail", iconNight: "hail" },
  1264: { code: 1264, day: "Moderate or heavy showers of ice pellets", night: "Moderate or heavy showers of ice pellets", iconDay: "hail", iconNight: "hail" },
  1273: { code: 1273, day: "Patchy light rain with thunder", night: "Patchy light rain with thunder", iconDay: "thunderstorm", iconNight: "thunderstorm" },
  1276: { code: 1276, day: "Moderate or heavy rain with thunder", night: "Moderate or heavy rain with thunder", iconDay: "thunderstorm", iconNight: "thunderstorm" },
  1279: { code: 1279, day: "Patchy light snow with thunder", night: "Patchy light snow with thunder", iconDay: "thunderstorm", iconNight: "thunderstorm" },
  1282: { code: 1282, day: "Moderate or heavy snow with thunder", night: "Moderate or heavy snow with thunder", iconDay: "thunderstorm", iconNight: "thunderstorm" }
};

export function getWeatherIcon(
  code: number,
  isDay?: boolean
): string {
  const entry = weatherCodes[code];
  if (!entry) return "help";

  return isDay || false ? entry.iconDay : entry.iconNight;
}

export function getWeatherData(
  code: number,
  options?: { isDay?: boolean }
): {icon: string, status: string} {
  const entry = weatherCodes[code];
  if (!entry) return {icon:"help",status:"Unknown"};

  const icon = options?.isDay ? entry.iconNight : entry.iconDay;
  const status = options?.isDay ? entry.day : entry.night
  return {icon,status};
}