import React from "react";
import Router from "./component/shared/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setData } from "./component/redux/slices/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedData = localStorage.getItem("moneykeeper");
    const initialData = savedData ? JSON.parse(savedData) : [];
    dispatch(setData(initialData));
  }, [dispatch, setData]);

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
