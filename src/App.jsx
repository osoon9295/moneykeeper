import React from "react";
import Form from "./component/Form";
import Months from "./component/Months";
import ExpenseList from "./component/ExpenseList";
import Header from "./component/Header";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("moneykeeper");
    return savedData ? JSON.parse(savedData) : [];
  });

  return (
    <div>
      <Header />
      <Form data={data} setData={setData} />
      <Months data={data} />
    </div>
  );
};

export default App;
