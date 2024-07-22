import { useEffect, useState } from "react";
import { Product, useProducts } from "../../context/productsContext";
import Button from "../Button";
import * as S from "./styles";
import { useTheme } from "../../context/themeContext";

type propsFilter = {
  onFilter: (filter: Product[]) => void;
};
const ProductFilter = ({ onFilter }: propsFilter) => {
  const { isDarkMode } = useTheme();
  const { products, page } = useProducts();
  const [searchName, setSearchName] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (page === "entries") setFilteredProducts(products);
    if (page === "outputs")
      setFilteredProducts(
        products.filter((product) => product.isActive === false)
      );
    if (page === "")
      setFilteredProducts(products.filter((product) => product.isActive));
  }, [page, products]);

  const handleFilter = () => {
    const filtered = filteredProducts.filter((product) => {
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
