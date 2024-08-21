import Link from "next/link";
import styled from "styled-components";


export const StyledNav = styled.nav`
    display: flex;
`
export const StyledLink = styled(Link)`
    flex-grow: 1;
    padding: 10px;
    background-color: var(--color-surface);
    text-align: center;
    
    &:hover {
        text-decoration: underline;
    }

    &[aria-current] {
        background-color: var(--color-primary);
        text-decoration: underline;
    }

`
