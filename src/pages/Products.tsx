import * as S from "./styles";
import Button from "../components/Button";
import ProductList from "../components/product-list/ProductList";
import ProductForm from "../components/product-form/ProductForm";
import { FormEvent } from "react";
import { useProducts } from "../context/productsContext";

const Products = () => {
  const { showModal, setShowModal, setExist } = useProducts();

  const handleModalClick = (event: FormEvent) => {
    event.stopPropagation();
  };
  const handleClick = () => {
    setShowModal(!showModal);
    setExist(false);
  };

  return (
    <>
      <S.Container>
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
          <S.ModalBackdrop onClick={handleClick}>
            <S.ModalContent onClick={handleModalClick}>
              <ProductForm />
            </S.ModalContent>
          </S.ModalBackdrop>
        )}
      </S.Container>
    </>
  );
};

export default Products;
