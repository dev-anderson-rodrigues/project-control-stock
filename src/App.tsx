import { Route, Routes } from "react-router-dom";
// import Products from "./pages/Products";
import GlobalStyle from "./styles/StyleGlobal";
import { useTheme } from "./context/themeContext";
import { ToggleButtonTheme } from "./components/toogle-theme/ToogleTheme";
import Products from "./pages/list_products/Products";
import CreateProducts from "./pages/create products/CreateProducts";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <ToggleButtonTheme />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<CreateProducts />} />
        <Route path="/createProducts" element={<CreateProducts />} />
      </Routes>
    </>
  );
}

export default App;
