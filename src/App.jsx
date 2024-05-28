import React from "react";
import Router from "./component/shared/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setData } from "./component/redux/slices/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.data);

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
