import { Product, useProducts } from "../../context/productsContext";
import * as S from "./styles";
import Button from "../Button";
import ProductFilter from "../product-filter/ProductFilter";
import { useEffect, useState } from "react";
import Modal from "../component-modal/Modal";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const {
    products,
    setProducts,
    setExist,
    currentProduct,
    setCurrentProduct,
  } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [modalDetails, setModalDetails] = useState<boolean>(false);

  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.isActive));
  }, [products]);

  const getByIdProduct = (code: number) => {
    const product = products.find((p) => p.code === code);
    if (product) {
      setCurrentProduct(product);
      setExist(true);
      navigate(`/products/${code}`);
    }
  };
  const deleteProduct = (code: number) => {
    const productIndex = products.findIndex((product) => product.code === code);
    if (productIndex !== -1) {
      const updatedProducts = [...products];

      updatedProducts[productIndex].isActive = false;

      setProducts(updatedProducts);
    }
  };

  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };

  return (
    <S.Container isDarkMode={isDarkMode}>
      <div>
        <ProductFilter onFilter={handleFilter} />
      </div>
      <ul>
        <li className="title_list">
          <span>Produto</span>
          <span>Código</span>
          <span>Preço(R$)</span>
          <span>Categoria</span>
          <span>Quantidade</span>
          <span style={{ width: "40%" }}></span>
        </li>
        {filteredProducts.map((product) => (
          <li key={product.code}>
            <div>
              <Button
                className="button_name_product"
                onClick={() => {
                  setModalDetails(true);
                  setCurrentProduct(product);
                }}
              >
                {product.name}
              </Button>
            </div>
            <div>{product.code}</div>
            <div>R$ {product.price}</div>
            <div>{product.category}</div>
            <div>{product.quantity}</div>
            <span className="buttons">
              <Button
                className="button_edit"
                onClick={() => {
                  getByIdProduct(product.code);
                }}
              >
                Editar
              </Button>
              <Button
                className="button_delete"
                onClick={() => deleteProduct(product.code)}
              >
                Deletar
              </Button>
            </span>
          </li>
        ))}
      </ul>

      {modalDetails && (
        <Modal>
          <S.ContainerDetails isDarkMode={isDarkMode}>
            <div>
              <Button
                onClick={() => {
                  setCurrentProduct(null);
                  setModalDetails(false);
                }}
              >
                X
              </Button>
            </div>
            <h2>
              Nome: <span>{currentProduct?.name}</span>
            </h2>
            <h2>
              Código: <span>{currentProduct?.code}</span>
            </h2>
            <h2>
              Preço: <span>{currentProduct?.price}</span>
            </h2>
            <h2>
              Categoria: <span>{currentProduct?.category}</span>
            </h2>
            <h2>
              Quantidade: <span>{currentProduct?.quantity}</span>
            </h2>
            <h2>
              Descrição: <span>{currentProduct?.description}</span>
            </h2>
          </S.ContainerDetails>
        </Modal>
      )}
    </S.Container>
  );
};

export default ProductList;
