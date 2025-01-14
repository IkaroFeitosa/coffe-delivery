import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-inline: 10rem;
  margin-top: 2.5rem;
`;

export const Header = styled.header`
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
  h2 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ResumInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid transparent;
  border-radius: 6px 44px;
  padding: 2.5rem;

  background-image: linear-gradient(${(props) => props.theme.background}, ${(props) => props.theme.background}),
  linear-gradient(
      -63deg,
      ${(props) => props.theme.purple},
      ${(props) => props.theme.yellow}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

`;
export const ItemInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 100%;
  color: ${(props) => props.theme.white};
  line-height: 0%;
  &.LocationIcon {
    background-color: ${(props) => props.theme.purple};
  }
  &.TimerIcon {
    background-color: ${(props) => props.theme.yellow};
  }
  &.CurrencyIcon {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Text = styled.div`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;
  line-height: 130%;
`;
