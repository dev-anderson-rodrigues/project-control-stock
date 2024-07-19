import { Link } from "react-router-dom";
import ProductForm from "../../components/product-form/ProductForm";
import { useProducts } from "../../context/productsContext";
import { useTheme } from "../../context/themeContext";
import * as S from "./styles";

const CreateProducts = () => {
  const { isDarkMode } = useTheme();
  const { exist } = useProducts();

  return (
    <>
      <S.Container isDarkMode={isDarkMode}>
        <div className="container_h3">
          {exist ? <h3>Atualizar Produto</h3> : <h3>Cadastrar Produto</h3>}
        </div>
        <div className="container_main">
          <div className="menu_left">
            <ul>
              <li>
                <Link to="/">
                  <h3>Home</h3>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <h3>Controle de Produtos</h3>
                </Link>
              </li>
              <li>
                <Link to="/entries">
                  <h3>Entradas</h3>
                </Link>
              </li>
              <li>
                <Link to="/outputs">
                  <h3>Saídas</h3>
                </Link>
              </li>
            </ul>
          </div>
          <ProductForm />
        </div>
      </S.Container>
    </>
  );
};

export default CreateProducts;
