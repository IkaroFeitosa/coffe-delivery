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
import SrcImg from "@assets/images/coffee/Type=expresso.png";
import { useState } from "react";
export function ProductCard() {
    const [quantity,setQuantity] = useState(0)

    function handleQuantityPlus(){
        setQuantity((current)=> current + 1)
    }
    function handleQuantityMinus(){
        if(quantity>0)
            setQuantity((current)=> current - 1)
    }
  return (
    <ContainerCard>
      <HeaderImage>
        <img src={SrcImg} alt="" />
      </HeaderImage>
      <Content>
        <BadgeContainer>
          <span>Expresso</span>
        </BadgeContainer>
        <BodyContent>
          <div className="title">Café com Leite</div>
          <div className="content">
            Meio a meio de expresso tradicional com leite vaporizado
          </div>
        </BodyContent>
        <FooterContent>
          <div>
            <span className="prefix">R$</span>{" "}
            <span className="price">9,90</span>
          </div>
          <ContainerButton>
            <ContainerInput>
                <button className="minus" onClick={handleQuantityMinus}><Minus size={14}/></button>
                <input type="number" placeholder="0" value={quantity} disabled />
                <button className="plus" onClick={handleQuantityPlus}><Plus size={14}/></button>
            </ContainerInput>
            <button className="addCartButton">
              <ShoppingCart size={22}/>
            </button>
          </ContainerButton>
        </FooterContent>
      </Content>
    </ContainerCard>
  );
}
