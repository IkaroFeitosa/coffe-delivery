import { Minus, Plus, Trash } from "phosphor-react";
import {
  CartItem,
  CartResumContainer,
  ConfirmButton,
  ContainerInput,
  ItemInfo,
  ItemInfoContainer,
  ItemOptions,
  RemoveButton,
  ValueItem,
  ValuesContainer,
} from "./styles";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { Coffee } from "../../../../reducers/cart/reducers";
import { useNavigate } from "react-router";

function formatCurrency(value: number) {
  const priceFormatCurrency = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return "R$ " + priceFormatCurrency;
}
interface ICartResumProps {
  formIdToSubmit: string;
}
export function CartResum({ formIdToSubmit }: ICartResumProps) {
  const {
    productsSelected,
    totalItem,
    total,
    delivery,
    updateQuantityProduct,
    removeProduct,
  } = useContext(CartContext);
  const navigate = useNavigate();

  function handleClickPlus(product: Coffee) {
    updateQuantityProduct(product.id, product.quantity + 1);
  }
  function handleClickMinus(product: Coffee) {
    if (product.quantity > 1)
      updateQuantityProduct(product.id, product.quantity - 1);
  }
  function handleClickRemove(poductId: number) {
    removeProduct(poductId);
  }

  useEffect(() => {
    if (productsSelected.length === 0) {
      navigate("/");
    }
  }, [productsSelected,navigate]);
  return (
    <CartResumContainer>
      {productsSelected.map((product) => (
        <CartItem key={product.id}>
          <ItemInfoContainer>
            <img src={`src/assets/images/coffee/${product.image}.png`} alt="" />
            <ItemInfo>
              <div className="title">{product.name}</div>
              <ItemOptions>
                <ContainerInput>
                  <button
                    className="minus"
                    onClick={() => handleClickMinus(product)}
                  >
                    <Minus size={14} />
                  </button>
                  <input
                    type="number"
                    placeholder="0"
                    value={product.quantity}
                    disabled
                    min={0}
                  />
                  <button
                    className="plus"
                    onClick={() => handleClickPlus(product)}
                  >
                    <Plus size={14} />
                  </button>
                </ContainerInput>
                <RemoveButton onClick={() => handleClickRemove(product.id)}>
                  <Trash size={16} />
                  <span>Remover</span>
                </RemoveButton>
              </ItemOptions>
            </ItemInfo>
          </ItemInfoContainer>
          <span className="price">{formatCurrency(product.price)}</span>
        </CartItem>
      ))}

      <ValuesContainer>
        <ValueItem>
          <span>Total de itens</span>
          <span>{formatCurrency(totalItem)}</span>
        </ValueItem>
        <ValueItem>
          <span>Entrega</span>
          <span>{formatCurrency(delivery)}</span>
        </ValueItem>
        <ValueItem>
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </ValueItem>
      </ValuesContainer>
      <ConfirmButton
        type="submit"
        form={formIdToSubmit}
        title="Confirmar Pedido"
      >
        Confirmar Pedido
      </ConfirmButton>
    </CartResumContainer>
  );
}
