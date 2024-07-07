import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: start;
  background-color: #ffff;
  width: 100vw;
  max-width: 1280px;

  .container_h3 {
    background-color: #4682b4;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    h3 {
      width: 100%;
      justify-content: left;
      font-family: "Poppins", sans-serif;
      align-items: center;
      color: #fff;
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
      background-color: #4682b4;
    }
    .b_entrada {
      background-color: #48d1cc;
    }
    .b_saida {
      background-color: #dc143c;
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

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
  z-index: 1000; /* Garante que o modal esteja na frente de outros elementos */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
