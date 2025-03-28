import { createContext, useEffect, useState } from "react";

export const weatherInfo = createContext();

const API_URL = "./data.json";

export const InfoProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);

  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data.slice(0, 50));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <weatherInfo.Provider value={{ weatherData, result, setResult }}>
      {children}
    </weatherInfo.Provider>
  );
};
