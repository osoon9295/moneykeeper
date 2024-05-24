import React from "react";

const ExpenseItem = ({ data }) => {
  return (
    <div>
      <p>날짜 : {data.datum}</p>
      <p>항목</p>
      <p>금액</p>
      <p>내용</p>
    </div>
  );
};

export default ExpenseItem;
