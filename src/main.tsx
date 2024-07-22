import React from "react";
import ReactDOM from "react-dom/client";
import { ProductsProvider } from "./context/productsContext.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import { Rotas } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <ThemeProvider>
        <Rotas />
      </ThemeProvider>
    </ProductsProvider>
  </React.StrictMode>
);
