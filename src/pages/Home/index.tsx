
import { Coffee } from "../../reducers/cart/reducers";
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import { Content, HomeContainer, ProductsContainer } from "./styles";


  
  const coffeeMenu: Coffee[] = [
    {
      id: 1,
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      type: ["TRADICIONAL"],
      price: 9.90,
      quantity: 1,
      image: "Type=Expresso"
    },
    {
      id: 2,
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      type: ["TRADICIONAL"],
      price: 9.90,
      quantity: 1,
      image: "Type=Americano"
    },
    {
      id: 3,
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      type: ["TRADICIONAL"],
      price: 9.90,
      quantity: 1,
      image: "Type=Expresso Cremoso"
    },
    {
      id: 4,
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      type: ["TRADICIONAL", "GELADO"],
      price: 9.90,
      quantity: 1,
      image: "Type=Café Gelado"
    },
    {
      id: 5,
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      type: ["TRADICIONAL", "COM LEITE"],
      price: 9.90,
      quantity: 1,
      image: "Type=Café com Leite"
    },
    {
      id: 6,
      name: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      type: ["TRADICIONAL", "COM LEITE"],
      price: 9.90,
      quantity: 1,
      image: "Type=Latte"
    },
    {
      id: 7,
      name: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      type: ["TRADICIONAL", "COM LEITE"],
      price: 9.90,
      quantity: 1,
      image: "Type=Capuccino"
    },
    {
      id: 8,
      name: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      type: ["TRADICIONAL", "COM LEITE"],
      price: 9.90,
      quantity: 1,
      image: "Type=Macchiato"
    },
    {
      id: 9,
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      type: ["TRADICIONAL", "COM LEITE"],
      price: 9.90,
      quantity: 1,
      image: "Type=Mocaccino"
    },
    {
      id: 10,
      name: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      type: ["ESPECIAL", "COM LEITE"],
      price: 9.90,
      quantity: 1,
      image: "Type=Chocolate Quente"
    },
    {
      id: 11,
      name: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      price: 9.90,
      quantity: 1,
      image: "Type=Cubano"
    },
    {
      id: 12,
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      type: ["ESPECIAL"],
      price: 9.90,
      quantity: 1,
      image: "Type=Havaiano"
    },
    {
      id: 13,
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      type: ["ESPECIAL"],
      price: 9.90,
      quantity: 1,
      image: "Type=Árabe"
    },
    {
      id: 14,
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      type: ["ESPECIAL", "ALCOÓLICO"],
      price: 9.90,
      quantity: 1,
      image: "Type=Irlandês"
    }
  ];
  
  

export function Home(){

    return(
        <HomeContainer>
            <Banner/>
            <ProductsContainer>
                <h2>Nossos cafés</h2>
                <Content>
                    {coffeeMenu.map(coffe => (
                        <ProductCard key={coffe.id} {...coffe}/>
                    ))}
                </Content>
            </ProductsContainer>
        </HomeContainer>
    )
}