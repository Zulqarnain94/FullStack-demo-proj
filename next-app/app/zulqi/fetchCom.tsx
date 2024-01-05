"use client"
import React, { useState, useEffect } from "react";


const FetchCom = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    console.log("ddf");
    const response = await fetch("http://0.0.0.0:8080/weatherforecast");
    const result = await response.json();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default FetchCom;
