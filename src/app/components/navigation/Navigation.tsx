"use client";

import { usePathname } from "next/navigation";
import { StyledLink, StyledNav } from "./Navigation.style";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

const Navigation = () => {

    return (
        <StyledNav>
            <NavLink href="/"> Home </NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resume"> Resume </NavLink>
            <NavLink href="/current"> Current Work </NavLink>
        </StyledNav>
    );
}

export default Navigation;