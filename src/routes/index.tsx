import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "../pages/list_products/Products";
import CreateProducts from "../pages/create products/CreateProducts";
import { useTheme } from "../context/themeContext";
import GlobalStyle from "../styles/StyleGlobal";
import { ToggleButtonTheme } from "../components/toogle-theme/ToogleTheme";

export function Rotas() {
  const { isDarkMode } = useTheme();
  const pageEntries = "/products/entries";
  const pageOutputs = "/products/outputs";
  const productsActives = "/";
  const productsUpdated = "/products/:id";
  const productsCreated = "/createProducts";

  return (
    <BrowserRouter>
      <GlobalStyle isDarkMode={isDarkMode} />
      <ToggleButtonTheme />
      <Routes>
        <Route path={productsActives} element={<Products />} />
        <Route path={pageEntries} element={<Products />} />
        <Route path={pageOutputs} element={<Products />} />
        <Route path={productsUpdated} element={<CreateProducts />} />
        <Route path={productsCreated} element={<CreateProducts />} />
      </Routes>
    </BrowserRouter>
  );
}
