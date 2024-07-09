import { Product, useProducts } from "../../context/productsContext";
import * as S from "./styles";
import Button from "../Button";
import ProductFilter from "../product-filter/ProductFilter";
import { useState } from "react";
import Modal from "../component-modal/Modal";

const ProductList = () => {
  const {
    products,
    setProducts,
    setShowModal,
    setExist,
    currentProduct,
    setCurrentProduct,
  } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [modalDetails, setModalDetails] = useState<boolean>(false);

  const getByIdProduct = (code: number) => {
    const product = products.find((p) => p.code === code);
    if (product) {
      setCurrentProduct(product);
      setExist(true);
      setShowModal(true);
    }
  };
  const deleteProduct = (code: number) => {
    const productIndex = products.findIndex((product) => product.code === code);
    if (productIndex !== -1) {
      const updatedProducts = [...products];

      updatedProducts[productIndex].isActive = false;

      setProducts(updatedProducts);
      console.log("aqui");
    }
  };

  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };
  return (
    <S.Container>
      <div>
        <ProductFilter onFilter={handleFilter} />
      </div>
      <ul>
        <li className="title_list">
          <span>Produto</span>
          <span>Código</span>
          <span>Preço(R$)</span>
          <span>Categoria</span>
          <span style={{ width: "100%" }}>Quantidade</span>
          <span style={{ width: "30%" }}></span>
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
            <div>{product.price}</div>
            <div>{product.category}</div>
            <div style={{ width: "80%" }}>{product.quantity}</div>
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
          <S.ContainerDetails>
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
