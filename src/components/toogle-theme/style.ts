import styled from "styled-components";

export const ToggleButton = styled.button<{ isDarkMode: boolean }>`
  position: fixed;
  border: none;
  width: 40px;
  border-radius: 8px;
  height: 20px;
  left: 81%;
  top: 10px;

  img {
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-top: 1px;
    border-radius: 7px;
    cursor: pointer;
    background-color: ${(props) => (props.isDarkMode ? "#1e90ff" : "#F5F5F5")};
  }

  &:hover {
    opacity: 0.9;
  }
`;
