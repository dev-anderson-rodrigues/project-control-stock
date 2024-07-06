import { ReactNode, createContext, useContext, useState } from "react";

export interface Product {
  code: number;
  name: string;
  description: string;
  isActive: boolean;
  quantity: number;
  price: number;
  category: string;
}

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  exist: boolean;
  setExist: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);
const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [exist, setExist] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    {
      code: 1,
      name: "Produto 1",
      description: "Descrição do produto 1",
      price: 100,
      category: "Categoria 1",
      isActive: true,
      quantity: 10,
    },
  ]);
  // console.log("aqui" + currentProductId);
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        showModal,
        setShowModal,
        exist,
        setExist,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export { ProductsProvider, useProducts };
