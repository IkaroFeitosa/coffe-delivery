import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import { Content, HomeContainer, ProductsContainer } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <Banner/>
            <ProductsContainer>
                <h2>Nossos cafés</h2>
                <Content>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Content>
            </ProductsContainer>
        </HomeContainer>
    )
}