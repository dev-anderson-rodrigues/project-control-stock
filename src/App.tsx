import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import GlobalStyle from "./styles/StyleGlobal";
import { useTheme } from "./context/themeContext";
import { ToggleButtonTheme } from "./components/toogle-theme/ToogleTheme";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <ToggleButtonTheme />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
