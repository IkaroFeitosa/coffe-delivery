import {  Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import {
  CartContainer,
  ContainerBase,
  ContentForm,
  ContentInput,
  FormContainer,
  HeaderForm,
  ItemPaymentMethods,
  ResumContainer,
} from "./styles";
import { CartResum } from "./components/CartResum";

export function Cart() {
  return (
    <CartContainer>
      <FormContainer>
        <h3>Complete seu pedido</h3>
        <ContainerBase>
          <form>
            <HeaderForm>
              <MapPin size={22} />
              <div className="content-header">
                <div className="title">Endereço de Entrega</div>
                <div className="subtitle">
                  Informe o endereço onde deseja receber seu pedido
                </div>
              </div>
            </HeaderForm>
            <ContentForm>
              <input type="text" placeholder="CEP" className="cep" />
              <input type="text" placeholder="Rua" className="rua" />
              <input type="text" placeholder="Número" />
              <ContentInput>
                <input
                  type="text"
                  placeholder="Complemento"
                  className="complemento"
                />
                <span>Opicional</span>
              </ContentInput>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </ContentForm>
          </form>
        </ContainerBase>

        <ContainerBase className="payment-methods">
          <HeaderForm>
            <CurrencyDollar size={22} />
            <div className="content-header">
              <div className="title">Pagamento</div>
              <div className="subtitle">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </div>
            </div>
          </HeaderForm>
        <div className="content-payment-methods">
            <ItemPaymentMethods active>
                <CreditCard size={16}/>
                <span>Cartão de crédito</span>
            </ItemPaymentMethods>
            <ItemPaymentMethods >
                <Bank size={16}/>
                <span>cartão de débito</span>
            </ItemPaymentMethods>
            <ItemPaymentMethods >
                <Money size={16}/>
                <span>Dinheiro</span>
            </ItemPaymentMethods>
        </div>
        </ContainerBase>
      </FormContainer>
      <ResumContainer>
        <h3>Café selecionados</h3>
        <CartResum />
      </ResumContainer>
    </CartContainer>
  );
}
