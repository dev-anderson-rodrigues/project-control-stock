import * as S from "./styles";
import Button from "../../components/Button";
import ProductList from "../../components/product-list/ProductList";
import { useProducts } from "../../context/productsContext";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { isDarkMode } = useTheme();
  const { setCurrentProduct, setExist, setPage, page } = useProducts();
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentProduct(null);
    setExist(false);
    navigate("/createProducts");
  };
  const handleClickPageEntries = () => {
    navigate("/products/entries");
    setPage(() => "entries");
  };

  const handleClickPageOutputs = () => {
    navigate("/products/outputs");
    setPage(() => "outputs");
  };

  return (
    <>
      <S.Container isDarkMode={isDarkMode}>
        <div className="container_h3">
          {page === "" && <h3>Controle de Produtos</h3>}
          {page === "entries" && <h3>Entrada de Produtos</h3>}
          {page === "outputs" && <h3>Saída de Produtos</h3>}
        </div>

        <div className="container_Buttons">
          {page === "entries" || page === "outputs" ? (
            <Button
              className="b_voltar"
              onClick={() => {
                navigate("/");
                setPage(() => "");
              }}
            >
              Voltar
            </Button>
          ) : (
            <Button className="b_cadastrar" onClick={handleClick}>
              Cadastrar produto
            </Button>
          )}
          <Button className="b_entrada" onClick={handleClickPageEntries}>
            Entrada
          </Button>
          <Button className="b_saida" onClick={handleClickPageOutputs}>
            Saida
          </Button>
        </div>
        <ProductList />
      </S.Container>
    </>
  );
};

export default Products;
