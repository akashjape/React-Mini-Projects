import { useRef } from "react";

const searchCity = ({ handleSearch }) => {
  const inputRef = useRef();

  return (
    <div className="search-section">
      <h1>Enter the city Name to search</h1>
      <input type="text" ref={inputRef} name="city" />
      <button type="button" onClick={() => handleSearch(inputRef)}>
        Search
      </button>
    </div>
  );
};

export default searchCity;
