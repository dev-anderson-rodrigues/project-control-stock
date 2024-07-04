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
    height: 50px;
    border-bottom: 1px solid #c0c0c0;
    position: relative;

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
      position: absolute;
      right: 30px;
      top: 50%;
      width: 10%;
      transform: translateY(-50%);

      Button {
        width: 100%;
        text-align: center;
        height: 70%;
        border-radius: 10px;
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
