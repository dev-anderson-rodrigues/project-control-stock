import { ReactNode, createContext, useContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";

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
  sending: boolean;
  setSending: React.Dispatch<React.SetStateAction<boolean>>;
  setExist: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: SubmitHandler<Product>;
  currentProduct: Product | null;
  setCurrentProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);
const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [exist, setExist] = useState(false);
  const [sending, setSending] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([
    {
      code: 123,
      name: "Produto 1",
      description: "Descrição do produto 1",
      price: 100,
      category: "Categoria 1",
      isActive: true,
      quantity: 10,
    },
  ]);

  const onSubmit: SubmitHandler<Product> = (payload) => {
    const productIndex = products.findIndex((p) => p.code === payload.code);

    if (productIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[productIndex] = payload;
      setProducts(updatedProducts);
    } else {
      setProducts([
        ...products,
        {
          code: payload.code,
          name: payload.name,
          description: payload.description,
          price: payload.price,
          category: payload.category,
          isActive: true,
          quantity: payload.quantity,
        },
      ]);
    }
    setSending(true);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        sending,
        setSending,
        showModal,
        setShowModal,
        exist,
        setExist,
        onSubmit,
        currentProduct,
        setCurrentProduct,
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
