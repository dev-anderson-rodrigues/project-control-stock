import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => (props.isDarkMode ? "#282C33" : "")};
  }
`;

export default GlobalStyle;
