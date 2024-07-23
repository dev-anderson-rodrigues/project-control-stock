import * as S from "./styles";
import Button from "../Button";
import { Product, useProducts } from "../../context/productsContext";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/themeContext";

const ProductForm = () => {
  const { isDarkMode } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Product>({ mode: "onChange" });
  const {
    exist,
    products,
    onSubmit,
    currentProduct,
    setShowModal,
    sending,
    setSending,
  } = useProducts();
  const [warningMessage, setWarningMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (currentProduct) reset(currentProduct);
  }, [currentProduct, reset]);

  useEffect(() => {
    const handleSending = () => {
      if (sending) {
        setTimeout(() => {
          setSending(() => false);
          setShowSuccessMessage(() => true);
        }, 1000);
      }
      if (showSuccessMessage) setTimeout(() => setShowModal(false), 1000);
    };

    handleSending();
  }, [sending, setSending, setShowModal, showSuccessMessage]);

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
      isDarkMode={isDarkMode}
      onSubmit={handleSubmit(onSubmit)}
      hasError={!!Object.keys(errors).length}
    >
      <div>
        <h2>Código do produto</h2>
      </div>
      <div>
        <label htmlFor="code" className="labelCode">
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
                  ? "Este produto já existe, o mesmo se encontra na listagem ou em saída."
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
              min: 1,
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
          {currentProduct ? (
            <input
              type="text"
              id="category"
              placeholder="Categoria"
              {...register("category", {
                required: "Categoria é obrigatória",
                min: 1,
              })}
            />
          ) : (
            <select
              id="category"
              {...register("category", {
                required: "Categoria é obrigatória",
              })}
            >
              <option value="">Selecione uma categoria</option>
              <option value="comida">Comida</option>
              <option value="bebida">Bebida</option>
              <option value="naoComestivel">Não Comestível</option>
            </select>
          )}
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
              min: 1,
            })}
          />
          {errors.description && (
            <p className="p_errors">{errors.description.message}</p>
          )}
        </label>
        {sending && !showSuccessMessage && (
          <p className="group_status">Enviando....</p>
        )}
        {showSuccessMessage && exist && (
          <p className="group_status">Produto atualizado com sucesso...</p>
        )}
        {showSuccessMessage && !exist && (
          <p className="group_status">Produto cadastrado com sucesso...</p>
        )}
      </div>
      <div
        className="button_group"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "40%",
        }}
      >
        <Button
          type="submit"
          disabled={(!isValid && exist) || isSubmitting}
          style={{
            backgroundColor: isValid && !isSubmitting ? "" : "#cccccc",
          }}
        >
          {exist ? "Atualizar" : "Cadastrar"}
        </Button>
        <Button
          onClick={() => {
            setSending(false);
            setShowSuccessMessage(false);
          }}
          style={{ backgroundColor: isDarkMode ? "#ABB2BF" : "red" }}
          className="button_cancel"
        >
          Cancelar
        </Button>
      </div>
    </S.Form>
  );
};

export default ProductForm;
