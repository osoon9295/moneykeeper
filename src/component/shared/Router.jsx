import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useSelector } from "react-redux";

const Router = () => {
  const data = useSelector((state) => state.data.data);
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home data={data} setData={setData} />} />
            <Route
              path="/detail/:id"
              element={<Detail data={data} setData={setData} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default Router;
