import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${(props) => props.theme.background};
    display: flex;
    align-items: center;
    padding-inline: 10rem;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const LocationButton = styled.button`
    display: flex;
    gap: 0.25rem;
    background-color: ${(props) => props.theme["purple-light"]};
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;
    

    svg{
        color: ${(props) => props.theme.purple};
    }
    span{
        color: ${(props) => props.theme["purple-dark"]};
        font-size: 0.875rem;
        line-height: 130%;
        font-weight: 400;
    }
`

export const CartButton = styled.button`
    background-color: ${props => props.theme["yellow-light"]};
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    position: relative;

    svg{
        color: ${props => props.theme["yellow-dark"]};
    }
    span{
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme.white};
        border-radius: 100%;
        top: -8px;
        right: -8px;
        font-size: .75rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 130%;
    }
`;
