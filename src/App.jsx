import React from "react";
import Router from "./component/shared/Router";
import { useState } from "react";
import { Context } from "./component/context/Context";

const App = () => {
  const getData = () => {
    const savedData = localStorage.getItem("moneykeeper");
    return savedData ? JSON.parse(savedData) : [];
  };
  const [data, setData] = useState(getData);

  return (
    <div>
      <Context.Provider value={{ data, setData }}>
        <Router />
      </Context.Provider>
    </div>
  );
};

export default App;
