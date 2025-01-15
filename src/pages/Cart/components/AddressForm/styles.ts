import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  width: 100%;
  max-width: 40rem;
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

export const ContentForm = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 0.75rem;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  flex-wrap: wrap;
  input {
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
    padding: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    &:invalid {
      border-color: ${(props) => props.theme.yellow};
    }
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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    input{
      grid-column: span 1 !important;
    }
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
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;
