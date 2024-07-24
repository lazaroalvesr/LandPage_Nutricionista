import { GlobalStyle } from "./styles/Global.styles"
import { ContainerDivSobreMim, DivImg, DivTextSobre, Img2, SobreMimContainer, SobreMimText, SobreMimTitulo, TextSobreMimInfos, TextSpan, TituloSobreMim } from "./styles/SobreMim.styles"

export const SobreMim = () => {
    return (
        <GlobalStyle>
            <SobreMimContainer id="sobre">
                <DivTextSobre>
                    <SobreMimTitulo>Sobre Mim</SobreMimTitulo>
                    <TextSpan>Nutricionista - CRN-8 12.345</TextSpan>
                </DivTextSobre>
                <ContainerDivSobreMim>
                    <SobreMimText>
                        <TituloSobreMim>Desenvolvendo Saúde e Bem-Estar com Dedicação e Conhecimento</TituloSobreMim>
                        <TextSobreMimInfos>
                            Sou [Seu Nome], nutricionista dedicada a
                            transformar sua saúde através da alimentação.
                            Com [X] anos de experiência, minha missão é
                            criar planos alimentares personalizados que
                            se encaixem no seu estilo de vida e objetivos.
                            Vamos trabalhar juntos para alcançar uma vida
                            mais equilibrada e saudável. Entre em contato
                            e comece sua jornada para o bem-estar!
                        </TextSobreMimInfos>
                    </SobreMimText>
                    <DivImg>
                        <Img2 src="/img/Foto_2.png" alt="Foto Nutricionista se apresentando" />
                    </DivImg>
                </ContainerDivSobreMim>
            </SobreMimContainer>
        </GlobalStyle>
    )
}