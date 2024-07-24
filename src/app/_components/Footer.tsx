import { ContainerInfos, DivIcons, FooterContainer, IconsImg, InfoCopy, InfoText } from "./styles/Footer.styles"
import { GlobalStyle } from "./styles/Global.styles"

export const Footer = () => {
    return (
        <FooterContainer>
            <GlobalStyle>
                <ContainerInfos>
                    <InfoCopy>Copyright 2017 - NutriVida. Todos os direitos reservados.</InfoCopy>
                    <DivIcons>
                        <IconsImg src="/icon/facebook.png" alt="Icone do Facebook"/>
                        <IconsImg src="/icon/insta.png" alt="Icone do Instagram"/>
                        <IconsImg src="/icon/tiktok.png" alt="Icone do TikTok"/>
                    </DivIcons>
                    <InfoText>Criado Por LázaroAlvesR</InfoText>
                </ContainerInfos>
            </GlobalStyle>
        </FooterContainer>
    )
}