import styled, { css } from "styled-components";

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  width: 40rem;
  &:first-of-type {
    margin-bottom: 0.75rem;
  }
  &.payment-methods {
    svg {
      color: ${(props) => props.theme.purple};
    }
    .content-payment-methods {
      display: flex;
      gap: 0.75rem;
    }
  }
`;
export const ItemPaymentMethods = styled.button<{ active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  span {
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 160%;
  }
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
  ${({active})=> active && css`
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme.purple};
  `}
`;
export const CartContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-inline: 10rem;
  margin-top: 2.5rem;

  h3 {
    font-size: 1.125rem;
    font-family: "Baloo 2";
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.9375rem;
  }
`;

export const ContentForm = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 0.75rem;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  flex-wrap: wrap;;
  input {
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
    padding: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
  }
  input.cep {
    grid-column: span 1;
  }
  input.rua {
    grid-column: span 3;
    width: auto;
  }
  input.complemento {
    width: 100%;
  }
`;
export const ContentInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  grid-column: span 2;
  width: 100%;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding-right: 0.75rem;
  input {
    border: none;
  }
  span {
    font-style: italic;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.75rem;
    right: 0.75rem;
  }
`;

export const FormContainer = styled.div`

  .content-header {
    display: flex;
    flex-direction: column;
    font-family: "Roboto";
    font-weight: 400;
    .title {
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 130%;
    }
    .subtitle {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
export const HeaderForm = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
export const ResumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
`;
