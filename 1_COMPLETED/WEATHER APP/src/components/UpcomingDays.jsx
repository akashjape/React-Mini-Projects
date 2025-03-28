import { useContext } from "react";
import { weatherInfo } from "./store/WeatherContext";

const UpcomingDays = () => {
  const { result } = useContext(weatherInfo);

  // Check if result exists and contains data
  if (!result || result.length === 0 || !result[0].forecast) {
    return <h2>No forecast data available</h2>;
  }

  return (
    <>
      {result[0].forecast.map((day, index) => (
        <div key={index}>
          <h1>Upcoming Forecast</h1>
          <h2>Date: {day.date}</h2>
          <h4>Humidity: {day.humidity}%</h4>
          <h4>Temperature: {day.temperature}°C</h4>
          <h4>Description: {day.weather_description}</h4>
        </div>
      ))}
    </>
  );
};

export default UpcomingDays;
