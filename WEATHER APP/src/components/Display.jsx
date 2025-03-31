import { useContext } from "react";
import { weatherInfo } from "./store/WeatherContext";

const Display = () => {
  const { result, changeBackground } = useContext(weatherInfo);
  if (!result) {
    return <h2>No City Found</h2>;
  }

  return (
    <>
      {result.map((result, index) => (
        <div
          key={index}
          className={
            result.weather_description === "Clear sky" ? "sky" : "white"
          }
        >
          <h1>City : {result.city}</h1>
          <h2>Country : {result.country}</h2>
          <h4>Humidity : {result.humidity}</h4>
          <h4>Temperature : {result.temperature}</h4>
          <h4>Description : {result.weather_description}</h4>
        </div>
      ))}
    </>
  );
};

export default Display;
