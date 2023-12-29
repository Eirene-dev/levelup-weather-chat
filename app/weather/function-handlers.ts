import { FunctionCallHandler, nanoid } from 'ai';
import { fetchWeatherData } from './weather-data';

interface FunctionCallArguments {
  location: string;
  nation: string;
  format: string;
  info: string;
}

const parseFunctionCallArguments = (args: string): FunctionCallArguments | null => {
  try {
    return JSON.parse(args);
  } catch (e) {
    console.error('Error parsing function call arguments:', e);
    return null;
  }
};

const createWeatherResponse = async (parsedArguments: FunctionCallArguments): Promise<any> => {
  const weatherData = await fetchWeatherData(parsedArguments.location);

  return {
    temperature: weatherData.main.temp,
    weather: weatherData.weather[0].main,
    info: weatherData.weather[0].description,
    feels_like: weatherData.main.feels_like,
    temp_min: weatherData.main.temp_min,
    temp_max: weatherData.main.temp_max,
    pressure: weatherData.main.pressure,
    humidity: weatherData.main.humidity,
    wind_speed: weatherData.wind.speed,
    wind_deg: weatherData.wind.deg,
    sunrise: weatherData.sys.sunrise,
    sunset: weatherData.sys.sunset,
    location: parsedArguments.location,
    nation: parsedArguments.nation,
    format: parsedArguments.format,
  };
};

export const functionCallHandler: FunctionCallHandler = async (chatMessages, functionCall) => {
  if (functionCall.name === 'get_current_weather' && functionCall.arguments) {
    const parsedArguments = parseFunctionCallArguments(functionCall.arguments);

    if (parsedArguments) {
      const weatherResponse = await createWeatherResponse(parsedArguments);

      const functionResponse = {
        messages: [
          ...chatMessages,
          {
            id: nanoid(),
            name: 'get_current_weather',
            role: 'function' as const,
            content: JSON.stringify(weatherResponse),
          },
        ],
      };

      return functionResponse;
    }
  }

  return { messages: chatMessages };
};
