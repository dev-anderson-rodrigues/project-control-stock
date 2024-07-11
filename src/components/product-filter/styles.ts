import styled from "styled-components";

export const Container = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props.isDarkMode
      ? props.theme.background.gray
      : props.theme.background.blue};
  /* background-color: #4682b4; */
  border-radius: 4px;

  /* input, */
  /* button, */
  input {
    width: 100%;
    padding: 5px;
    margin: 5px;
    border-radius: 4px;
    border: none;
    outline: none;
    color: #fff;
    background-color: ${(props) =>
      props.isDarkMode
        ? props.theme.background.dark
        : props.theme.background.blue};
    /* background-color: #4682b4; */
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  select {
    width: 100%;
    padding: 5px;
    margin: 5px;
    border-radius: 4px;
    border: none;
    outline: none;
    color: #fff;
    background-color: ${(props) =>
      props.isDarkMode
        ? props.theme.background.dark
        : props.theme.background.blue};
    /* background-color: #4682b4; */
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  button {
    width: 100%;
    margin: 5px;
    border-radius: 4px;
    border: none;
    outline: none;
    color: #fff;
    background-color: ${(props) =>
      props.isDarkMode
        ? props.theme.background.gray
        : props.theme.background.orange};
    /* background-color: #ff6347; */
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) =>
        props.isDarkMode
          ? props.theme.background.dark
          : props.theme.background.orangeSecondary};
      /* background-color: #ff4500; */
      transition: background-color 0.5s ease-in-out;
    }
  }
`;
