import Link from "next/link";
import styled from "styled-components";


export const StyledNav = styled.nav`
    display: flex;
`
export const StyledLink = styled(Link)`
    margin: auto;
    padding: 10px;
    
    &:hover {
        text-decoration: underline;
    }

`
