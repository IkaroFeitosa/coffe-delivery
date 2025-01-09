import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  BadgeContainer,
  BodyContent,
  ContainerButton,
  ContainerCard,
  ContainerInput,
  Content,
  FooterContent,
  HeaderImage,
} from "./styles";
import { useContext, useState } from "react";
import { Coffee } from "../../../../reducers/cart/reducers";
import { CartContext } from "../../../../contexts/CartContext";
export function ProductCard(coffee: Coffee) {
  const { description, image, name, price, quantity, type } = coffee;
  const { addProduct } = useContext(CartContext);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  // const totalPrice = price * currentQuantity
  const priceFormatCurrency = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function handleQuantityPlus() {
    setCurrentQuantity((current) => current + 1);
  }
  function handleQuantityMinus() {
    if (currentQuantity > 0) setCurrentQuantity((current) => current - 1);
  }
  function handleAddToCart() {
    if (currentQuantity > 0) {
      addProduct(coffee);
      setCurrentQuantity(0);
    }
  }
  return (
    <ContainerCard>
      <HeaderImage>
        <img src={`src/assets/images/coffee/${image}.png`} alt="" />
      </HeaderImage>
      <Content>
        <BadgeContainer>
          {type.map((tp) => (
            <span key={tp}>{tp}</span>
          ))}
        </BadgeContainer>
        <BodyContent>
          <div className="title">{name}</div>
          <div className="content">{description}</div>
        </BodyContent>
        <FooterContent>
          <div>
            <span className="prefix">R$</span>{" "}
            <span className="price">{priceFormatCurrency}</span>
          </div>
          <ContainerButton>
            <ContainerInput>
              <button className="minus" onClick={handleQuantityMinus}>
                <Minus size={14} />
              </button>
              <input
                type="number"
                placeholder="0"
                value={currentQuantity}
                disabled
                min={0}
              />
              <button className="plus" onClick={handleQuantityPlus}>
                <Plus size={14} />
              </button>
            </ContainerInput>
            <button
              className="addCartButton"
              title="Adicionar ao carrinho"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={22} />
            </button>
          </ContainerButton>
        </FooterContent>
      </Content>
    </ContainerCard>
  );
}
