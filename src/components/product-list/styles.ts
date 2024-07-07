import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #87ceeb;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;

  ul li {
    display: flex;
    width: 100%;
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
      color: #1e90ff;
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
        color: #1e90ff;
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
        background: none;
        border: none;
        color: #1e90ff;
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        display: flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;

        &:hover {
          transition: all 0.5s ease-in-out;
          color: #fff;

          background-color: #1e90ff;
        }
      }
    }
  }
`;
