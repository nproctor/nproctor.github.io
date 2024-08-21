"use client";

import { BlockText, ExternalLink, HeaderContainer, RoundedImage, Container } from "@/app/StyledComponents";
import { VscGithub  } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";

const Header = () => {
    return (
        <HeaderContainer>
            <RoundedImage src="https://avatars.githubusercontent.com/u/11726475"/>
            <Container>
                <BlockText>Natasha Proctor</BlockText>
                <ExternalLink href="https://github.com/nproctor"> <VscGithub/> github.com/nproctor</ExternalLink>
                <ExternalLink href="mailto:natasha.rose.proctor@gmail.com"> <MdEmail/> natasha.rose.proctor@gmail.com</ExternalLink>
            </Container>
        </HeaderContainer>
    );
}

export default Header;