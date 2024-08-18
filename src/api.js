// cee74db3c17638132c0bf4a8cf1bf0c6

export async function getWeatherApi(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cee74db3c17638132c0bf4a8cf1bf0c6`
  );
  const data = await response.json();
  return data;
}
