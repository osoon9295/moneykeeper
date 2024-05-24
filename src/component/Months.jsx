import React from "react";
import styled from "styled-components";

const StMonthList = styled.div`
  margin: 30px auto;
  padding: 10px;
  width: 850px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;

const StMonthButton = styled.button`
  margin: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: none;
  background-color: darkgray;

  &:hover {
    background-color: rgb(237, 170, 45);
    cursor: pointer;
  }
`;

const Months = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const changeExpenseList = () => {};

  return (
    <StMonthList>
      {months.map((month, index) => (
        <StMonthButton onClick={changeExpenseList} key={index}>
          {month}
        </StMonthButton>
      ))}
    </StMonthList>
  );
};

export default Months;
