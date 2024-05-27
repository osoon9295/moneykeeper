import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StExpenseItem = styled.button`
  background-color: transparent;
  width: 96%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  color: black;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;

const ExpenseItem = ({ datum }) => {
  const { id, date, category, amount, content } = datum;

  const navigate = useNavigate();

  return (
    <StExpenseItem
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      {date} &nbsp; 항목 : {category} &nbsp; 금액 : {amount} &nbsp; 내용 :
      {content}
    </StExpenseItem>
  );
};

export default ExpenseItem;
