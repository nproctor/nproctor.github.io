"use client";

import { HeaderContainer, RoundedImage, Container } from "./Header.style";
import { VscGithub  } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { BlockText, ExternalLink } from "@/app/style";

const Header = () => {
    return (
        <HeaderContainer>
            <RoundedImage src="https://avatars.githubusercontent.com/u/11726475"/>
            <Container>
                <BlockText>Natasha Proctor</BlockText>
                <div><ExternalLink href="https://github.com/nproctor"> <VscGithub/> github.com/nproctor</ExternalLink></div>
                <div><ExternalLink href="mailto:natasha.rose.proctor@gmail.com"> <MdEmail/> natasha.rose.proctor@gmail.com</ExternalLink></div>
            </Container>
        </HeaderContainer>
    );
}

export default Header;