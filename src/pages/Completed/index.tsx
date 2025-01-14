import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  Container,
  Content,
  Header,
  Icon,
  ItemInfo,
  ResumInfo,
  Text,
} from "./styles";

export function Completed() {
  return (
    <Container>
      <Header>
        <h2>Uhu! Pedido Confirmado</h2>
        Agora é só aguardar que logo o café chegará até você
      </Header>
      <Content>
        <ResumInfo>
          <ItemInfo>
            <Icon className="LocationIcon">
              <MapPin size={16} />
            </Icon>
            <Text>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />{" "}
              Farrapos - Porto Alegre, RS
            </Text>
          </ItemInfo>
          <ItemInfo>
            <Icon className="TimerIcon">
              <Timer size={16} />
            </Icon>
            <Text>
              Previsão de entrega <br />
              <strong>20 min - 30 min </strong>
            </Text>
          </ItemInfo>
          <ItemInfo>
            <Icon className="CurrencyIcon">
              <CurrencyDollar size={16} />
            </Icon>
            <Text>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </Text>
          </ItemInfo>
        </ResumInfo>
        <img src="/src/assets/images/Illustration-delivery.png" alt="" />
      </Content>
    </Container>
  );
}
