'use client'

import { useState,MouseEvent } from "react";
import { BGLaranja, GlobalStyle } from "./styles/Global.styles"
import { ButtonMobile, HeaderLi, HeaderLogo, HeaderSection, HeaderUl, IconeLaranja } from "./styles/Header.styles"
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export const Header = () => {
    const [ativo, setAtivo] = useState(false)

    function Toggle() {
        setAtivo(!ativo)
    }

    function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
        event.preventDefault();
        const element = document.querySelector(id);

        if (element) {
            const headerOffset = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setAtivo(false)
        }
    }

    return (
        <BGLaranja>
            <GlobalStyle>
                <HeaderSection>
                    <HeaderLogo>Nutri <IconeLaranja>Bem</IconeLaranja></HeaderLogo>
                    <ButtonMobile onClick={Toggle} aria-label="Menu Mobile">
                        {ativo ? <IoClose size={40} /> : <IoMenuOutline size={40} />}
                    </ButtonMobile>
                    <HeaderUl className="animeLeftMobile" ativo={ativo}>
                        <HeaderLi><Link href="#home" onClick={(e) => scrollToSection(e, '#home')} style={{ textDecoration: "none", color: '#402E32' }}>Home</Link></HeaderLi>
                        <HeaderLi><Link href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')} style={{ textDecoration: "none", color: '#402E32' }}>Sobre Mim</Link></HeaderLi>
                        <HeaderLi><Link href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')} style={{ textDecoration: "none", color: '#402E32' }}>Serviços</Link></HeaderLi>
                        <HeaderLi><Link href="#depoimentos" onClick={(e) => scrollToSection(e, '#depoimentos')} style={{ textDecoration: "none", color: '#402E32' }}>Depoimentos</Link></HeaderLi>
                        <HeaderLi><Link href="#contato" onClick={(e) => scrollToSection(e, '#contato')} style={{ textDecoration: "none", color: '#402E32' }}>Contato</Link></HeaderLi>
                    </HeaderUl>
                </HeaderSection>
            </GlobalStyle>
        </BGLaranja >
    )
}