import * as S from "./styles";
import Button from "../../components/Button";
import ProductList from "../../components/product-list/ProductList";
import { useProducts } from "../../context/productsContext";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { isDarkMode } = useTheme();
  const { setCurrentProduct, setExist } = useProducts();
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentProduct(null);
    setExist(false);
    navigate("/createProducts");
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
      </S.Container>
    </>
  );
};

export default Products;
