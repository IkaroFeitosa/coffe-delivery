import styled from "styled-components";
interface IBannerContainer {
  backgroundBanner: string;
}
interface IIcon {
  backgroundIcon: string;
}
export const BannerContainer = styled.div<IBannerContainer>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
  padding: 5.875rem 10rem;
  background-image: url(${({ backgroundBanner }) => backgroundBanner});

    img{
        width: 29.75rem;
        height: 22.5rem;
    }
`;

export const TextBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  font-family: "Baloo 2";
  font-weight: bold;
  font-size: 3rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
  margin-bottom: 1rem;
`;
export const SubTitle = styled.div`
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;
export const ListContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1.25rem 2.5rem;
margin-top: 4.125rem;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;
export const Icon = styled.div<IIcon>`
  padding: 0.5rem;
  background-color: ${(props) => props.backgroundIcon};
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: ${(props) => props.theme.white};
`;
