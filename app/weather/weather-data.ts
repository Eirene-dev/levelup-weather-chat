export async function fetchWeatherData(city: string) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY; // OpenWeatherMap API 키
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data

  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return null;
  }
}