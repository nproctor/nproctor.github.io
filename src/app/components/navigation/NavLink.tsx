import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StyledLink } from "./Navigation.style";

const NavLink = ({href, children}: {href: string, children: React.ReactNode}) => {
    const pathname = usePathname();
    return (
        <StyledLink href={href} aria-current={pathname === href? "page" : undefined}>
            {children}
        </StyledLink>
    );
}

export default NavLink;