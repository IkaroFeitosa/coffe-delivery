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
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
function formatCurrency(value: number) {
  const priceFormatCurrency = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return "R$ " + priceFormatCurrency;
}
export function CartResum() {
  const {
    productsSelected,
    totalItem,
    total,
    delivery,
    updateQuantityProduct,
    removeProduct,
  } = useContext(CartContext);
  console.log({ productsSelected, totalItem, total, delivery });

  function handleClickPlus(product: Coffee) {
    updateQuantityProduct(product.id, product.quantity + 1);
  }
  function handleClickMinus(product: Coffee) {
    if (product.quantity > 0)
      updateQuantityProduct(product.id, product.quantity - 1);
  }
  function handleClickRemove(poductId: number) {
    removeProduct(poductId);
  }
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
      <ConfirmButton>Confirmar Pedido</ConfirmButton>
    </CartResumContainer>
  );
}
