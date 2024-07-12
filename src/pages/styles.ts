import styled from "styled-components";

export const Container = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: start;
  background-color: ${(props) => (props.isDarkMode ? "#282C33" : "#F5F5F5")};
  width: 100vw;
  max-width: 1280px;

  .container_h3 {
    background-color: ${(props) => (props.isDarkMode ? "#ABB2BF" : "#1e90ff")};
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    h3 {
      background-color: ${(props) =>
        props.isDarkMode ? "#ABB2BF" : "#1e90ff"};
      color: #fff;
      width: 100%;
      justify-content: left;
      font-family: "Poppins", sans-serif;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      padding-left: 20px;
    }
  }
  .container_Buttons {
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    height: 40px;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 5px;

    .b_cadastrar {
      background-color: ${(props) =>
        props.isDarkMode ? "#ABB2BF" : "#1e90ff"};
    }
    .b_entrada {
      background-color: ${(props) =>
        props.isDarkMode ? "#ABB2BF" : "#48d1cc"};
    }
    .b_saida {
      background-color: ${(props) =>
        props.isDarkMode ? "#ABB2BF" : "#dc143c"};
    }
    button {
      padding: 1em;
      color: #fff;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      align-items: center;
      &:hover {
        background-color: #000;
      }
    }
  }
`;
