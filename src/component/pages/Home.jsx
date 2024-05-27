import React from "react";
import Form from "../Form";
import Months from "../Months";
import { useContext } from "react";
import { Context } from "../context/Context";

const Home = () => {
  const { data, setData } = useContext(Context);

  return (
    <div>
      <Form data={data} setData={setData} />
      <Months data={data} />
    </div>
  );
};

export default Home;
