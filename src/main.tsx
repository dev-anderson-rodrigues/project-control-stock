import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProductsProvider } from "./context/productsContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>
);
