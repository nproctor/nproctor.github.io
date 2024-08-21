import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    background: linear-gradient(15deg, var(--color-accent-one) 10%, var(--color-accent-two) 90%);
    color: var(--color-on-accent);
    display: flex;
    flex-wrap: wrap;
`;

export const Container = styled.div`
    align-content: center;
    display: inline;
    min-width: 300px;
    margin: 20px;
`

export const RoundedImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 150px;
    margin: 20px;

    @media screen and (max-width: 700px) {
        height: 100px;
        width: 100px;
        border-radius: 100px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const BlockText = styled.p`
    display: block;
    padding: 3px;
`

export const ExternalLink = styled.a`
    display: block;
    padding: 3px;

    &:hover {
        text-shadow: 0px 0px 10px white;
    }
`