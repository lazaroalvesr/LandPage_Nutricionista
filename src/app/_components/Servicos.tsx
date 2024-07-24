import { GlobalStyle } from "./styles/Global.styles"
import { ButtonServicos, Card, CardImg, CardServicosContainer, CardText, CardTitulo, ContainerTextCard, DivTextServicos, ServicosContainer, ServicosTitulo, TextSpanServicos } from "./styles/Servicos.styles"

export const Servicos = () => {
    return (
        <GlobalStyle>
            <ServicosContainer>
                <DivTextServicos>
                    <ServicosTitulo>Serviços</ServicosTitulo>
                    <TextSpanServicos>O que eu posso fazer</TextSpanServicos>
                </DivTextServicos>
                <CardServicosContainer>
                    <Card>
                        <CardImg src="/img/Nutricao_infantil.png" alt="Foto criança observando um pedaço de bolo" />
                        <ContainerTextCard>
                            <CardTitulo>Nutrição Materno Infantil</CardTitulo>
                            <CardText>Desenvolvemos planos alimentares para crianças, ajudando a estabelecer hábitos alimentares saudáveis desde cedo. Oferecemos orientação sobre introdução alimentar, escolha de alimentos nutritivos e soluções para questões como seletividade alimentar.</CardText>
                        </ContainerTextCard>
                    </Card>
                    <Card>
                        <CardImg src="/img/Reducao_alimentar.png" alt="Foto de um prato de salada" />
                        <ContainerTextCard>
                            <CardTitulo>Reeducação Alimentar</CardTitulo>
                            <CardText>Ajudamos você a mudar seus hábitos alimentares de maneira sustentável e prazerosa. Oferecemos orientação sobre escolhas alimentares saudáveis, planejamento de refeições e estratégias para manter uma alimentação equilibrada.</CardText>
                        </ContainerTextCard>
                    </Card>
                    <Card>
                        <CardImg src="/img/Nutricao_esportiva.png" alt="Foto uma mulher fazendo uma caminhada" />
                        <ContainerTextCard>
                            <CardTitulo>Nutrição esportiva</CardTitulo>
                            <CardText>A Nutrição Esportiva é fundamental para otimizar o desempenho e a recuperação dos atletas. Desenvolvemos planos alimentares personalizados que atendem às suas necessidades específicas de treino e competição, garantindo energia, força e resistência.</CardText>
                        </ContainerTextCard>
                    </Card>
                </CardServicosContainer>
                <ButtonServicos>Agendar Consulta</ButtonServicos>
            </ServicosContainer>
        </GlobalStyle>
    )
}