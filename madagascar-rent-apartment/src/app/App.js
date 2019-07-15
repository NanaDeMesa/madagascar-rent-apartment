import GlobalStyle from "./GlobalStyle";
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  background: papayawhip;
`;

export default function App() {
  return (
    <Grid>
      <GlobalStyle />
      <Header>
        <p>Maison Nosy Be</p>
      </Header>
      <Main />
      <Footer />
    </Grid>
  );
}
