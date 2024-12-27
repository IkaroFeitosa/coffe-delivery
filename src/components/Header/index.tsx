import { MapPin, ShoppingCart } from "phosphor-react";
import { CartButton, HeaderButtonsContainer, HeaderContainer, LocationButton } from "./styles";
import Logo from "@/assets/logo.svg"

export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo} alt="Coffe Delivery"/>
            <HeaderButtonsContainer>
                <LocationButton>
                    <MapPin/>
                    <span>Aracaju, SE</span>
                </LocationButton>
                <CartButton>
                    <ShoppingCart />
                    <span>0</span>
                </CartButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    )
}