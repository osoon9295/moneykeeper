import React from "react";
import Form from "./component/Form";
import Months from "./component/Months";
import ExpenseList from "./component/ExpenseList";
import Header from "./component/Header";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <Header />
      <Form data={data} setData={setData} />
      <Months />
      <ExpenseList data={data} />
    </div>
  );
};

export default App;
