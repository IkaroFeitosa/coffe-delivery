import { MapPin } from "phosphor-react";
import { FormContainer } from "./styles";
import { ContentForm, ContentInput, HeaderForm } from "./styles";
import { useFormContext } from "react-hook-form";


export function AddressForm(){
    const {register} = useFormContext()
    return(
        <FormContainer>
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
              <input type="text" placeholder="CEP" className="cep" {...register('cep')}/>
              <input type="text" placeholder="Rua" className="rua" {...register('rua')} />
              <input type="text" placeholder="Número" {...register('numero')} />
              <ContentInput>
                <input
                  type="text"
                  placeholder="Complemento"
                  className="complemento"
                  {...register('complemento')}
                />
                <span>Opicional</span>
              </ContentInput>
              <input type="text" placeholder="Bairro" {...register('bairro')}/>
              <input type="text" placeholder="Cidade" {...register('cidade')} />
              <input type="text" placeholder="UF" {...register('uf')} />
            </ContentForm>
        </FormContainer>
    )
}