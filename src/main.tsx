import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProductsProvider } from "./context/productsContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ProductsProvider>
  </React.StrictMode>
);
