import React, { useState } from "react";

const CityInput = () => {
  const [city, setCity] = useState("");
  const handleSubmit = () => {};

  return (
    <form className="bg-white/90 backdrop-blur-xl w-1/3 p-8 rounded-[14px] flex flex-col gap-5 border border-white/10">
      <label for="cityName">Location Search</label>
      <input
        id="cityName"
        type="text"
        name="name"
        value={city}
        placeholder="Search city"
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default CityInput;
