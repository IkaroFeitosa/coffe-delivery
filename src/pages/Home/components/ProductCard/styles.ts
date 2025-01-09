import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
  width: 16rem;
`;

export const HeaderImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75rem;
  gap: 0.5rem;
  padding-inline: 1rem;
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  span {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  div.title {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  div.content {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    text-align: center;
    line-height: 130%;
  }
`;
export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4375rem;
  margin-top: 2.0625rem;
  margin-bottom: 1rem;
  div {
    span.prefix {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
      line-height: 130%;
    }
    span.price {
      font-family: "Baloo 2";
      font-size: 1.5rem;
      font-weight: 800;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button.addCartButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme["purple-dark"]};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 4.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border: 0;
  border-radius: 6px;
  input[type="number"] {
    width: 100%;
    height: 2.375rem;
    border: 0;
    border-radius: 6px;
    background-color: transparent;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
    position: relative;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
      opacity: 0;
    }
  }
  button{
    appearance: none;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    padding: 0.5rem;
  }
`;
