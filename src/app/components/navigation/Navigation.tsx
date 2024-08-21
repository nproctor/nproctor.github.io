"use client";

import { StyledLink, StyledNav } from "./Navigation.style";

const Navigation = () => {
    return (
        <StyledNav>
            <StyledLink href="/"> Home </StyledLink>
            <StyledLink href="/projects">Projects</StyledLink>
            <StyledLink href=""> Resume </StyledLink>
            <StyledLink href=""> Current Work </StyledLink>
        </StyledNav>
    );
}

export default Navigation;