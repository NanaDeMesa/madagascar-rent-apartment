import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box; 
}
body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    height: 100vh;
    margin: 0 auto;
}
`;

export default GlobalStyle;
