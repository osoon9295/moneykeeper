import React from "react";
import styled from "styled-components";

const StHeader = styled.header`
  background-color: rgb(237, 170, 45);
  color: white;
  font-size: 30px;
  height: 100px;
  width: 500px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <div>
      <StHeader>
        <header>MONEYKEEPER</header>
      </StHeader>
    </div>
  );
};

export default Header;
