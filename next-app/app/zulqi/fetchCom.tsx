"use client";
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

  return <div>{JSON.stringify(data)}</div>;
};

export default FetchCom;
