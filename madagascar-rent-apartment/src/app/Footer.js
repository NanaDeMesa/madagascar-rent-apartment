import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #f4f5f5;
  display: grid;
  font-size: 12px;
  font-weight: bold;
`;

const StyledInsideContainer = styled.section`
  background: #ffffff;
  color: #000000;
  width: 348px;
  height: 444px;
  font-size: 18px;
  margin: 16px auto;
  padding: 24px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledInsideContainer>Impressum</StyledInsideContainer>
    </StyledFooter>
  );
}

export default Footer;
