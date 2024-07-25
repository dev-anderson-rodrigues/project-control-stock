import buttonLua from "../../images/icons8-lua-brilhante-16.png";
import buttonSol from "../../images/icons8-sol-16.png";
import { useTheme } from "../../context/themeContext";
import { ToggleButton } from "./style";

export const ToggleButtonTheme = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ToggleButton isDarkMode={isDarkMode}>
      {isDarkMode ? (
        <img src={buttonLua} alt="botão verde" onClick={toggleTheme} />
      ) : (
        <img src={buttonSol} alt="botão vermelho" onClick={toggleTheme} />
      )}
    </ToggleButton>
  );
};
