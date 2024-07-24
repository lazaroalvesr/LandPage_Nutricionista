import { BGLaranja } from "./styles/Global.styles"
import { ButtonConsulta, ContainerMain, DivImg, DivText, DivTextImg, Img, MainH1, MainText } from "./styles/Main.styles"

export const Main = () => {
    return (
        <BGLaranja>
            <ContainerMain>
                <DivTextImg>
                    <DivText>
                        <MainH1>Comida saudável, vida saudável</MainH1>
                        <MainText>Descubra o equilíbrio perfeito entre sabor e nutrição com planos alimentares personalizados e entregas convenientes, feitas especialmente para você</MainText>
                        <ButtonConsulta>Agendar Consulta</ButtonConsulta>
                    </DivText>
                    <DivImg>
                        <Img src="/img/Foto_1.png" alt="Foto nutricionista " />
                    </DivImg>
                </DivTextImg>
            </ContainerMain>
        </BGLaranja>
    )
}