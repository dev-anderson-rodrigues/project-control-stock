import * as S from "./styles";
import Button from "../Button";
import { Product, useProducts } from "../../context/productsContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
// import { useRef, useState } from "react";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Product>({ mode: "onChange" });
  const { exist, products } = useProducts();
  const [warningMessage, setWarningMessage] = useState(false);

  const onSubmit: SubmitHandler<Product> = (payload) => {
    console.log(payload);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const productExists = products.some((product) => product.name === value);
    if (productExists) {
      setWarningMessage(true);
    } else {
      setWarningMessage(false);
    }
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
        <label htmlFor="code" className="labelCode">
          Código do produto
          <input
            type="text"
            id="code"
            placeholder="Produto"
            {...register("code", {
              required: "Code do produto é obrigatório",
              pattern: {
                value: /^[0-9]+$/,
                message: "O código deve ser um número",
              },
              minLength: {
                value: 3,
                message: "O código deve ter no mínimo 3 caracteres",
              },
              maxLength: {
                value: 10,
                message: "O código deve ter no máximo 10 caracteres",
              },
              validate: (value) => {
                return products.some((product) => product.code === value) &&
                  exist === false
                  ? "Este código já existe"
                  : true;
              },
            })}
          />
          {errors.code && <p className="p_errors">{errors.code.message}</p>}
        </label>
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
              onChange: handleNameChange,
            })}
          />
          {errors.name && <p className="p_errors">{errors.name.message}</p>}
          {warningMessage && (
            <p className="p_errors">
              Este nome já existe, não é recomendável continuar
            </p>
          )}
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
              pattern: {
                value: /^[0-9]+$/,
                message: "Valor de quantidade inválido",
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
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Formato de preço inválido",
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
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            style={{
              backgroundColor: isValid && !isSubmitting ? "#007bff" : "#cccccc",
            }}
          >
            Atualizar
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            style={{
              backgroundColor: isValid && !isSubmitting ? "#007bff" : "#cccccc",
            }}
          >
            Cadastrar
          </Button>
        )}
      </div>
    </S.Form>
  );
};

export default ProductForm;
