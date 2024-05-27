import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StDetail = styled.div`
  background-color: rgb(237, 170, 45);
  height: fit-content;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0px auto;
`;

const StDetailForm = styled.form`
  background-color: transparent;
  border: 1px solid black;
  width: 80%;
  margin: 10px Auto;
  padding: 20px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Detail = ({ data, setData }) => {
  const { id } = useParams();
  const selectedData = data.find((datum) => {
    return datum.id === Number(id);
  });

  const { date, category, amount, content } = selectedData;

  const [editDate, setEditDate] = useState(date);
  const [editCategory, setEditCategory] = useState(category);
  const [editAmount, setEditAmount] = useState(amount);
  const [editContent, setEditContent] = useState(content);

  const submitHandler = (e) => {
    e.preventDefault();

    const updateData = data.map((item) =>
      item.id === Number(id)
        ? {
            ...item,
            date: editDate,
            category: editCategory,
            amount: editAmount,
            content: editContent,
          }
        : item
    );

    setData(updateData);
    localStorage.setItem("moneykeeper", JSON.stringify(updateData));
  };

  return (
    <StDetail>
      <StDetailForm onSubmit={submitHandler}>
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          id="date"
          name="date"
          value={editDate}
          onChange={(e) => setEditDate(e.target.value)}
        />
        <label htmlFor="category">항목</label>
        <select
          id="category"
          value={editCategory}
          onChange={(e) => {
            setEditCategory(e.target.value);
          }}
        >
          <option value="">항목을 선택해주세요</option>
          <option value="food">식비</option>
          <option value="rent">집세</option>
          <option value="tax">세금</option>
          <option value="etc">기타</option>
        </select>

        <label htmlFor="amount">금액</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={editAmount}
          onChange={(e) => {
            setEditAmount(e.target.value);
          }}
          min="1"
        />
        <label htmlFor="content"> 내용</label>
        <input
          type="text"
          id="content"
          name="content"
          value={editContent}
          onChange={(e) => {
            setEditContent(e.target.value);
          }}
        />
        <button type="submit">수정하기</button>
      </StDetailForm>
      <button>삭제하기</button>
      <button>뒤로가기</button>
    </StDetail>
  );
};

export default Detail;
