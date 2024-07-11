import { ReactNode } from "react";
import * as S from "./styles";
type propsModal = {
  children: ReactNode;
};
export const Modal = ({ children }: propsModal) => {
  return (
    <S.ModalBackdrop>
      <S.ModalContent isDarkMode={false}>{children}</S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default Modal;
