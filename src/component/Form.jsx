import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StForm = styled.div`
  width: 750px;
  border: 1px solid black;
  margin: 0px auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const Form = ({ data, setData }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");

  const addValue = (e) => {
    e.preventDefault();

    const newData = {
      id: new Date().getTime(),
      date: date,
      category: category,
      amount: amount,
      content: content,
    };

    setData([...data, newData]);
    setDate("");
    setCategory("");
    setAmount("");
    setContent("");
  };

  return (
    <StForm>
      <div>
        <form onSubmit={addValue}>
          <label htmlFor="date">날짜: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <label htmlFor="category">항목: </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option>식비</option>
            <option>집세</option>
            <option>세금</option>
          </select>

          <label htmlFor="amount">금액:</label>
          <input
            type="number"
            id="amout"
            name="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <label htmlFor="content">내용: </label>
          <input
            type="text"
            id="content"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />

          <button type="submit"> 저장 </button>
        </form>
      </div>
    </StForm>
  );
};

export default Form;
