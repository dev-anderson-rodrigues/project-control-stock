import { useProducts } from "../../context/productsContext";
import * as S from "./styles";
import Button from "../Button";

const ProductList = () => {
  const {
    products,
    setProducts,
    setShowModal,
    setExist,
    setCurrentProduct,
  } = useProducts();
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
  const activeProducts = products.filter((product) => product.isActive);
  return (
    <S.Container>
      <ul>
        <li className="title_list">
          <span>Produto</span>
          <span>Código</span>
          <span>Preço(R$)</span>
          <span>Categoria</span>
          <span style={{ width: "100%" }}>Quantidade</span>
          <span style={{ width: "30%" }}></span>
        </li>
        {activeProducts.map((product) => (
          <li key={product.code}>
            <div>
              <Button className="button_name_product">{product.name}</Button>
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
    </S.Container>
  );
};

export default ProductList;
