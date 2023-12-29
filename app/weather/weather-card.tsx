import React from "react";

export default function WeatherCard({ data }: { data: string }) {
  const { temperature, weather, info, location, nation, format } = JSON.parse(data);

  function getWeatherIcon(weather: string) {
    switch (weather) {
      case 'Clear':
        return '☀️';
      case 'Clouds':
        return '☁️';
      case 'Rain':
        return '🌧️';
      case 'Snow':
        return '❄️';
      case 'Mist':
        return '🌫️';
      default:
        return '🌈';
    }
  }

  return (
    <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{location}, {nation}</h2>
      <div className="flex items-center justify-between">
        <span>{info}</span>
        <span className="text-4xl">{getWeatherIcon(weather)}</span>
      </div>
      <p className="mt-2 text-4xl font-semibold">
        {temperature}°{format === 'celsius' ? 'C' : 'F'}
      </p>
    </div>
  );
}
