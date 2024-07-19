import styled from "styled-components";

export const Container = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${(props) => (props.isDarkMode ? "#282C33" : "#F5F5F5")};
  width: 100vw;
  height: 100%;
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
  .container_main {
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    align-items: start;
    border: 1px solid #ddd;
  }
  .menu_left {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding: 10px;
    overflow-y: auto;
    z-index: 100;
    transition: 0.3s ease;
    transform: translateX(-1%);

    h3 {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: bold;
      color: #1e90ff;
    }

    ul {
      margin: 0;
      padding: 0;
      flex-direction: column;
      overflow-y: auto;

      li {
        margin-top: 10px;
        list-style-type: none;
        padding: 10px;
        cursor: pointer;
        transition: 0.3s ease;
        box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
        &:hover {
          background-color: #ddd;
        }
        a {
          text-decoration: none;
        }
      }
    }
  }
`;
