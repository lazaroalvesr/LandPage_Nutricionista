'use client'

import { useState } from "react";
import { BGLaranja, GlobalStyle } from "./styles/Global.styles"
import { ButtonMobile, HeaderLi, HeaderLogo, HeaderSection, HeaderUl, IconeLaranja } from "./styles/Header.styles"
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const Header = () => {
    const [ativo, setAtivo] = useState(false)

    function Toggle() {
        setAtivo(!ativo)
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
                        <HeaderLi>Home</HeaderLi>
                        <HeaderLi>Sobre Mim</HeaderLi>
                        <HeaderLi>Serviços</HeaderLi>
                        <HeaderLi>Depoimentos</HeaderLi>
                        <HeaderLi>Contato</HeaderLi>
                    </HeaderUl>
                </HeaderSection>
            </GlobalStyle>
        </BGLaranja>
    )
}