import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  BannerContainer,
  Icon,
  ListContainer,
  ListItem,
  SubTitle,
  TextBannerContainer,
  Title,
} from "./styles";
import bannerImage from "@assets/images/bannerImage.png";
import backgroundBanner from "@assets/images/background.png";
import { useTheme } from "styled-components";

export function Banner() {
  const theme = useTheme();
  return (
    <BannerContainer backgroundBanner={backgroundBanner}>
      <TextBannerContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubTitle>
        <ListContainer>
          <ListItem>
            <Icon backgroundIcon={theme["yellow-dark"]}>
              <ShoppingCart />
            </Icon>
            <span>Compra simples e segura</span>
          </ListItem>
          <ListItem>
            <Icon backgroundIcon={theme["base-text"]}>
              <Package />
            </Icon>
            <span>Embalagem mantém o café intacto</span>
          </ListItem>
          <ListItem>
            <Icon backgroundIcon={theme["yellow"]}>
              <Timer />
            </Icon>
            <span>Entrega rápida e rastreada</span>
          </ListItem>
          <ListItem>
            <Icon backgroundIcon={theme["purple"]}>
              <Coffee />
            </Icon>
            <span>O café chega fresquinho até você</span>
          </ListItem>
        </ListContainer>
      </TextBannerContainer>
      <img src={bannerImage} alt="Banner" />
    </BannerContainer>
  );
}
