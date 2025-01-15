import styled from "styled-components";


export const CartContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 70rem;
  margin-top: 2.5rem;

  h3 {
    font-size: 1.125rem;
    font-family: "Baloo 2";
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.9375rem;
  }

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const ResumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 28rem;
`;
