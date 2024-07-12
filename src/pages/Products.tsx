import * as S from "./styles";
import Button from "../components/Button";
import ProductList from "../components/product-list/ProductList";
import ProductForm from "../components/product-form/ProductForm";
import { useProducts } from "../context/productsContext";

import Modal from "../components/component-modal/Modal";
import { useTheme } from "../context/themeContext";

const Products = () => {
  const { isDarkMode } = useTheme();
  const {
    showModal,
    setExist,
    setShowModal,
    setCurrentProduct,
  } = useProducts();

  const handleClick = () => {
    setCurrentProduct(null);
    setShowModal(!showModal);
    setExist(false);
  };

  return (
    <>
      <S.Container isDarkMode={isDarkMode}>
        <div className="container_h3">
          <h3>Controle de Produtos</h3>
        </div>

        <div className="container_Buttons">
          <Button className="b_cadastrar" onClick={handleClick}>
            Cadastrar produto
          </Button>
          <Button className="b_entrada">Entrada</Button>
          <Button className="b_saida">Saida</Button>
        </div>
        <ProductList />
        {showModal && (
          <Modal>
            <ProductForm />
          </Modal>
        )}
      </S.Container>
    </>
  );
};

export default Products;
