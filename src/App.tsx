import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Products from "./pages/Products";
import GlobalStyle from "./styles/StyleGlobal";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle isDarkMode={false} />
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
