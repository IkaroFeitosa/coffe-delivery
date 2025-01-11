import { CartContainer, FormContainer, ResumContainer } from "./styles";
import { CartResum } from "./components/CartResum";
import { PaymentMethods } from "./components/PaymentMethods";
import { AddressForm } from "./components/AddressForm";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const addressSchema = zod.object({
  cep: zod.string().nonempty("O CEP é obrigatório"),
  rua: zod.string().nonempty("A rua é obrigatória"),
  numero: zod.string().nonempty("O número é obrigatório"),
  complemento: zod.string().optional(),
  bairro: zod.string().nonempty("O bairro é obrigatório"),
  cidade: zod.string().nonempty("A cidade é obrigatória"),
  uf: zod.string().nonempty("A UF é obrigatória"),
});
type TAddress = zod.infer<typeof addressSchema>;

export function Cart() {
  const { paymentMethod } = useContext(CartContext);
  const [alertPaymentMethods,setAlertPaymentMethods] = useState(false);
  const addressForm = useForm<TAddress>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });
  const { handleSubmit } = addressForm;

  function onSubmit(data: TAddress) {
    if(!paymentMethod){
        setAlertPaymentMethods(true);
        return;
    }
    setAlertPaymentMethods(false);
    console.log(data);
  }
  return (
    <CartContainer>
      <FormContainer id="addressForm" onSubmit={handleSubmit(onSubmit)}>
        <h3>Complete seu pedido</h3>
        <FormProvider {...addressForm}>
          <AddressForm />
        </FormProvider>

        <PaymentMethods alertContainer={alertPaymentMethods}/>
      </FormContainer>
      <ResumContainer>
        <h3>Café selecionados</h3>
        <CartResum formIdToSubmit="addressForm" />
      </ResumContainer>
    </CartContainer>
  );
}
