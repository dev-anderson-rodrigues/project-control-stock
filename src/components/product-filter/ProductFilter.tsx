import { useState } from "react";
import { Product, useProducts } from "../../context/productsContext";
import Button from "../Button";
import * as S from "./styles";
import { useTheme } from "../../context/themeContext";

type propsFilter = {
  onFilter: (filter: Product[]) => void;
};
const ProductFilter = ({ onFilter }: propsFilter) => {
  const { isDarkMode } = useTheme();
  const { products } = useProducts();
  const activeProducts = products.filter((product) => product.isActive);

  const [searchName, setSearchName] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilter = () => {
    const filtered = activeProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchName.toLowerCase()) &&
        (selectedCategory === "" || product.category === selectedCategory) &&
        product.code.toString().includes(searchCode.toString())
      );
    });
    onFilter(filtered);
  };

  return (
    <S.Container isDarkMode={isDarkMode}>
      <input
        type="text"
        placeholder="Search Name..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search Code..."
        value={searchCode}
        onChange={(e) => setSearchCode(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Filter by category</option>
        <option value="comida">Comida</option>
        <option value="bebida">Bebida</option>
        <option value="Não comestível">Não comestível</option>
      </select>
      <Button onClick={handleFilter}>Search</Button>
    </S.Container>
  );
};

export default ProductFilter;
