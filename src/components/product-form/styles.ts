import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 10000;
`;

export const Form = styled.form<{ hasError?: boolean; isDarkMode: boolean }>`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 80%;
  padding: 20px;
  background-color: ${(props) => (props.isDarkMode ? "#282C33" : "#fff")};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  div,
  div label {
    font-weight: bold;
    width: 90%;
    font-size: 16px;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
    gap: 5px;
    display: flex;
    align-items: start;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      max-width: 100%;
      height: 30px;
      font-family: "Poppins", sans-serif;
      border-radius: 5px;
      border: 2px solid ${(props) => (props.hasError ? "red" : "#87ceeb")};
      background-color: ${(props) => (props.isDarkMode ? "#ABB2BF" : "#fff")};
      font-size: 14px;
      font-weight: bold;
      color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
      padding-left: 10px;
      outline: none;
    }
    textarea {
      resize: vertical;
      min-height: 100px;
    }

    button {
      padding: 1em;
      color: #fff;
      font-weight: 600;
      background-color: ${(props) =>
        props.isDarkMode ? "#ABB2BF" : "#007bff"};
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
    .p_errors {
      color: red;
      display: flex;
      text-align: center;
    }
    .labelCode {
      width: 50%;
      display: flex;
      align-items: center;
    }
    .group_status {
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: 25px;
      color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
    }
  }
`;
