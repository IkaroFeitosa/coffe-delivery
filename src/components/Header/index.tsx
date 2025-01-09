import { MapPin, ShoppingCart } from "phosphor-react";
import { CartButton, HeaderButtonsContainer, HeaderContainer, LocationButton } from "./styles";
import Logo from "@/assets/logo.svg"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router";


export function Header(){
    const {productsSelected} = useContext(CartContext)
    const quantityProductsSelecteds = productsSelected.length
    const navigate = useNavigate()
    function goToCart(){
        navigate('/cart')
    }
    function goToHome(){
        navigate('/')
    }
    return(
        <HeaderContainer>
            <img src={Logo} alt="Coffe Delivery" onClick={goToHome}/>
            <HeaderButtonsContainer>
                <LocationButton>
                    <MapPin/>
                    <span>Aracaju, SE</span>
                </LocationButton>
                <CartButton title="Ver carrinho" onClick={goToCart}>
                    <ShoppingCart />
                    <span>{quantityProductsSelecteds}</span>
                </CartButton>
            </HeaderButtonsContainer>
        </HeaderContainer>
    )
}