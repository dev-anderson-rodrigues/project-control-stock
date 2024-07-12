import styled from "styled-components";

export const Container = styled.div<{ isDarkMode: boolean }>`
  border: 2px solid #87ceeb;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isDarkMode ? "#ABB2BF" : "#F5F5F5")};
  padding: 10px;

  ul li {
    display: flex;
    height: 65px;
    border-bottom: 1px solid #c0c0c0;

    &.title_list {
      border-bottom: 2px solid #c0c0c0;
    }

    span,
    div,
    .button_name_product {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      color: ${(props) => (props.isDarkMode ? "#fff" : "#1e90ff")};
      font-family: "Poppins", sans-serif;
    }

    div,
    .button_name_product {
      font-weight: 500;

      button {
        width: 100%;
        text-align: center;
        height: 100%;
        background: none;
        border: none;
        color: ${(props) => (props.isDarkMode ? "#fff" : "#1e90ff")};
        cursor: pointer;
        display: flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;

        &:hover {
          transition: all 0.5s ease-in-out;
          color: #87ceeb;
        }
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-right: 20px;
      width: 20%;
      Button {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        height: 100%;
        border-radius: 5px;
        border: none;
        color: ${(props) => (props.isDarkMode ? "#fff" : "#1e90ff")};
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        display: flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;

        &:hover {
          transition: all 0.5s ease-in-out;
          color: #fff;
          background-color: ${(props) =>
            props.isDarkMode ? "#ABB2BF" : "#1e90ff"};
        }
      }
    }
  }
`;

export const ContainerDetails = styled.div<{ isDarkMode: boolean }>`
  padding: 20px;
  width: 100%;
  height: 100%;

  h2 {
    color: ${(props) => (props.isDarkMode ? "#ABB2BF" : "")};
    padding: 10px;

    span {
      word-wrap: break-word;
      font-weight: bold;
      font-size: 18px;
      flex-wrap: wrap;
      color: ${(props) => (props.isDarkMode ? "#fff" : "#1e90ff")};
      font-family: "Poppins", sans-serif;
    }
  }

  div {
    display: grid;
    width: 100%;
    justify-content: flex-end;

    button {
      width: 100%;
      padding: 7px 15px 7px 15px;
      text-align: center;
      height: 100%;
      border-radius: 5px;
      background: none;
      border: none;
      color: #fff;
      background-color: ${(props) =>
        props.isDarkMode ? "#ABB2BF" : "#1e90ff"};
      cursor: pointer;
      font-family: "Poppins", sans-serif;
      display: flex;
      font-weight: 800;
      justify-content: center;
      align-items: center;

      &:hover {
        transition: all 0.5s ease-in-out;
        background-color: #dc143c;
      }
    }
  }
`;
