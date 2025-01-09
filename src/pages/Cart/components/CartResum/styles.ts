import styled from "styled-components";

export const CartResumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  display: flex;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
`;

export const CartItem = styled.div`
  display: flex;
  padding: 0 0.4rem;
  justify-content: space-between;
  .price {
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .title {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const ItemInfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  img {
    width: 4rem;
    height: 4rem;
  }
`;
export const ItemOptions = styled.div`
  display: flex;
  gap: 0.5rem;
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
  button {
    appearance: none;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 160%;
  }
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ValueItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};
  line-height: 130%;
  &:last-of-type {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ConfirmButton = styled.button`
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0.75rem;
  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
