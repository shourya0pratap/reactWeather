import React from "react";
import Hero from "./Hero";
import CityInput from "./CityInput";
import Info from "./Info";

const LayoutWrapper = () => {
  return (
    <div>
      <Hero />
      <div>
        <CityInput />
        <Info />
      </div>
    </div>
  );
};

export default LayoutWrapper;
