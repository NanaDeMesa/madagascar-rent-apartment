import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #ffffff;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Heading = styled.h1`
  color: #036cad;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const StyledContactIcon = styled.img`
  display: flex;
  align-self: center;
  justify-self: flex-end;
  margin: 30px;
`;

function Header() {
  return (
    <StyledHeader>
      <Heading>Maison Nosy Be</Heading>
      <StyledContactIcon src="/assets/ContactIcon.svg" alt="Home" />
    </StyledHeader>
  );
}

export default Header;
