import {
  WeatherAPIResponseFailed,
  WeatherAPIResponseSuccess,
  WeatherAPIResponseSuccessStamped
} from '@utils/commonProps';
const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const fetchWeatherFor = async (location: string) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${weatherAPIKey}`);
  const response = await fetch('https://api.m3o.com/v1/weather/Now', {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify({ location: location })
  });
  if (!response.ok) {
    return (await response.json()) as WeatherAPIResponseFailed;
  } else {
    const data: WeatherAPIResponseSuccess = await response.json();
    return {
      ...data,
      timestamp: Date.now()
    } as WeatherAPIResponseSuccessStamped;
  }
};

export { fetchWeatherFor };
