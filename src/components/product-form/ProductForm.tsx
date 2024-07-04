import * as S from "./styles";
import Button from "../Button";
import { Product, useProducts } from "../../context/productsContext";
import { SubmitHandler, useForm } from "react-hook-form";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  const { exist } = useProducts();

  const onSubmit: SubmitHandler<Product> = (data) => {
    // const product = products.find((p) => p.name === data.name);
    console.log(data.name);
  };

  return (
    <S.Form
      onSubmit={handleSubmit(onSubmit)}
      hasError={!!Object.keys(errors).length}
    >
      <div>
        {exist ? <h2>Atualizar Produto</h2> : <h2>Cadastrar Produto</h2>}
      </div>
      <div>
        <label htmlFor="name">
          Nome do produto
          <input
            type="text"
            id="name"
            placeholder="Produto"
            {...register("name", {
              required: "Nome do produto é obrigatório",
            })}
          />
          {exist && (
            <p className="p_errors">
              Product Already Exists Continue to update the product
            </p>
          )}
          {errors.name && <p className="p_errors">{errors.name.message}</p>}
        </label>
      </div>
      <div>
        <label htmlFor="category">
          Categoria
          <input
            type="text"
            id="category"
            placeholder="Categoria"
            {...register("category", {
              required: "Categoria é obrigatória",
            })}
          />
          {errors.category && (
            <p className="p_errors">{errors.category.message}</p>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="quantity">
          Quantidade
          <input
            type="text"
            id="quantity"
            placeholder="Quantidade"
            {...register("quantity", {
              required: "Quantidade é obrigatória",
              min: {
                value: 1,
                message: "Quantidade deve ser maior que zero",
              },
            })}
          />
          {errors.quantity && (
            <p className="p_errors">{errors.quantity.message}</p>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="price">
          Preço
          <input
            type="text"
            id="price"
            placeholder="Preço"
            {...register("price", {
              required: "Preço é obrigatório",
              min: {
                value: 0.01,
                message: "Preço mínimo é 0.01",
              },
            })}
          />
          {errors.price && <p className="p_errors">{errors.price.message}</p>}
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            {...register("description", {
              required: "Descrição é obrigatória",
            })}
          />
          {errors.description && (
            <p className="p_errors">{errors.description.message}</p>
          )}
        </label>
      </div>
      <div>
        {exist ? (
          <Button type="submit">Atualizar</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
      </div>
    </S.Form>
  );
};

export default ProductForm;
