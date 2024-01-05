"use client";
import { Result } from "postcss";
import React, { useState, useEffect } from "react";

const FetchCom = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    console.log("ddf");
    const response = await fetch(
      "https://fullstack-demo-proj-e3uzzxqbva-uc.a.run.app/weatherforecast"
    );
    const result = await response.json();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log({ data });

  return (
    <div className="weather-forecast">
      <h1>Weather Forecast</h1>
      {data && (
        <ul className="forecast-list">
          {data.map((item, index) => (
            <li key={index} className="forecast-item">
              <strong>Date:</strong> {item.date}, &nbsp;
              <strong>Temperature (C):</strong> {item.temperatureC}, &nbsp;
              <strong>Summary:</strong> {item.summary}, &nbsp;
              <strong>Temperature (F):</strong> {item.temperatureF}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchCom;
