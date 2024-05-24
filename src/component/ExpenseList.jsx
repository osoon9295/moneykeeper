import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ data }) => {
  return (
    <div>
      <ExpenseItem data={data} />
      {data.content}

      {/* {data
        .filter((datum) => {
          return datum.date.getMonth() === EventTarget.getMonth();
        })
        .map((datum) => {
          return <ExpenseItem key={datum.id} datum={datum} />;
        })} */}
    </div>
  );
};

export default ExpenseList;
