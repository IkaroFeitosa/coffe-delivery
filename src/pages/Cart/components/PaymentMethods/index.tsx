import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  HeaderContainer,
  ItemPaymentMethods,
  PaymentContainer,
} from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { paymentMethods } from "../../../../reducers/cart/reducers";
interface IpaymentsMethodList {
  icon: React.ReactElement;
  title: paymentMethods;
}
const paymentsMethodList: IpaymentsMethodList[] = [
  {
    icon: <CreditCard size={16} />,
    title: "Cartão de crédito",
  },
  {
    icon: <Bank size={16} />,
    title: "Cartão de débito",
  },
  {
    icon: <Money size={16} />,
    title: "Dinheiro",
  },
];
interface IPaymentMethodsProps {
  alertContainer?:boolean;
}
export function PaymentMethods({alertContainer = false}:IPaymentMethodsProps) {
  const { paymentMethod, insertPaymentMethod } = useContext(CartContext);
  function handlePaymentMethods(paymentMethod: paymentMethods) {
    insertPaymentMethod(paymentMethod);
  }
  return (
    <PaymentContainer alertContainer={alertContainer}>
      <HeaderContainer>
        <CurrencyDollar size={22} />
        <div className="content-header">
          <div className="title">Pagamento</div>
          <div className="subtitle">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </div>
        </div>
      </HeaderContainer>
      <div className="content-payment-methods">
        {paymentsMethodList.map((payment) => (
          <ItemPaymentMethods
            key={payment.title}
            onClick={() => handlePaymentMethods(payment.title)}
            active={paymentMethod === payment.title}
            type="button"
          >
            {payment.icon}
            <span>{payment.title}</span>
          </ItemPaymentMethods>
        ))}
      </div>
    </PaymentContainer>
  );
}
