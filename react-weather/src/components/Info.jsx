import React, { useState } from "react";

const Info = ({ data }) => {
  if (!data) return <p>Search for a city to see the weather!</p>;
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default Info;
