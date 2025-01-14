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
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Completed() {
    const {address,paymentMethod} = useContext(CartContext)
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
              Entrega em <strong>{address?.rua}, {address?.numero}</strong> <br />{" "}
              {address?.bairro} - {address?.cidade}/{address?.uf}
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
              <strong>{paymentMethod}</strong>
            </Text>
          </ItemInfo>
        </ResumInfo>
        <img src="/src/assets/images/Illustration-delivery.png" alt="" />
      </Content>
    </Container>
  );
}
