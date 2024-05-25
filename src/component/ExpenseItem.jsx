import React from "react";
import styled from "styled-components";

const StExpenseItem = styled.div`
  background-color: transparent;
  width: 96%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
`;

const ExpenseItem = ({ datum }) => {
  const { date, category, amount, content } = datum;

  return (
    <StExpenseItem>
      <div>
        {date} &nbsp; 항목 : {category} &nbsp; 금액 : {amount} &nbsp; 내용 :
        {content}
      </div>
    </StExpenseItem>
  );
};

export default ExpenseItem;
