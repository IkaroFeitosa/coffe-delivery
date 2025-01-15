import styled, { css } from "styled-components";

export const PaymentContainer = styled.div<{alertContainer: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  width: 100%;
  max-width: 40rem;
  svg {
    color: ${(props) => props.theme.purple};
  }
  .content-payment-methods {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
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
  @keyframes alertContainerAnimate {
    0%{
      outline: 2px solid ${(props) => props.theme["yellow"]};
      outline-offset: 1px;
    }
    50%{
      outline: 6px solid ${(props) => props.theme["yellow-light"]};
      outline-offset: 2.5px;
    }
    100%{
      outline: 6px solid ${(props) => props.theme["white"]};
      outline-offset: 5px;
    }
  }
  ${(props) =>
    props.alertContainer &&
    css`
     animation-name: alertContainerAnimate;
     animation-duration: 0.75s;
     animation-iteration-count: 3;
     animation-timing-function: linear;
     
    `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const ItemPaymentMethods = styled.button<{ active?: boolean }>`
  width: 100%;
  max-width: 11.166875rem;
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
  ${({ active }) =>
    !active &&
    css`
      &:hover {
        background-color: ${(props) => props.theme["base-hover"]};
      }
    `}

  ${({ active }) =>
    active &&
    css`
      background-color: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme.purple};
    `}
`;
