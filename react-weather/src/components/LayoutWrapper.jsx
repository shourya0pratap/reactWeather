import React, { useState } from "react";
import Hero from "./Hero";
import CityInput from "./CityInput";
import Info from "./Info";

const LayoutWrapper = () => {
  const API_KEY = "a6d33c42c42f7cd7aa93a115a6ac6fe0";
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.error("An error occured:", err);
    }
  };

  return (
    <div>
      <Hero />
      <div>
        <CityInput onSearch={fetchWeather} />
        <Info data={weatherData} />
      </div>
    </div>
  );
};

export default LayoutWrapper;
