import React from "react";
import Form from "../Form";
import Months from "../Months";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.data.data);

  return (
    <div>
      <Form />
      <Months />
    </div>
  );
};

export default Home;
