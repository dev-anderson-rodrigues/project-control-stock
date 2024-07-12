import { ReactNode } from "react";
import * as S from "./styles";
import { useTheme } from "../../context/themeContext";
type propsModal = {
  children: ReactNode;
};
export const Modal = ({ children }: propsModal) => {
  const { isDarkMode } = useTheme();

  return (
    <S.ModalBackdrop>
      <S.ModalContent isDarkMode={isDarkMode}>{children}</S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default Modal;
