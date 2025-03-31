import SearchCity from "./components/SearchCity";
import "./App.css";
import Display from "./components/Display";
import UpcomingDays from "./components/UpcomingDays";
import { weatherInfo } from "./components/store/WeatherContext";
import { useContext } from "react";

function App() {
  const { weatherData, result, setResult } = useContext(weatherInfo);

  const handleSearch = (inputRef) => {
    const cityName = inputRef.current.value;
    const result = weatherData.filter(
      (item) => item.city.toLowerCase() === cityName.toLowerCase()
    );
    setResult(result);
  };

  return (
    <>
      <SearchCity handleSearch={handleSearch} />
      <Display result={result}></Display>
      <UpcomingDays></UpcomingDays>
    </>
  );
}

export default App;
