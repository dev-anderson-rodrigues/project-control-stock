import { useProducts } from "../../context/productsContext";
import * as S from "./styles";
import Button from "../Button";

const ProductList = () => {
  const { products, setShowModal, showModal, setExist } = useProducts();
  const getByIdProduct = (id: number) => {
    console.log(id);
    // const product = products.filter(p => p.id === id);
    setShowModal(!showModal);
    setExist(true);
  };

  return (
    <S.Container>
      <ul>
        <li className="title_list">
          <span>Produto</span>
          <span>Preço</span>
          <span>Quantidade</span>
        </li>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <Button className="button_name_product">{product.name}</Button>
            </div>
            <div>{product.price}</div>
            <div>{product.quantity}</div>
            <span className="buttons">
              <Button
                className="button_edit"
                onClick={() => {
                  getByIdProduct(product.id);
                }}
              >
                Editar
              </Button>
              <Button className="button_delete">Deletar</Button>
            </span>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ProductList;
