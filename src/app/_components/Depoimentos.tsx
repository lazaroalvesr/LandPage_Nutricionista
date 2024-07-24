'use client'

import { useState } from "react";
import { Comentarios, ComentariosContainer, ComentarioTexto, ContainerTextDepoimentos, DepoimentosContainer, DepoimentosTitulo, IconeAspas, IconSetaLeft, IconSetaRight, NomePessoaDepoimento } from "./styles/Depoimentos.styles"
import { GlobalStyle } from "./styles/Global.styles"

export const Depoimentos = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TextoComentario.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TextoComentario.length) % TextoComentario.length);
    };


    const TextoComentario = [
        { id: 1, nome: "Samanta", texto: 'Amei o trabalho da  Dra. “”, muito profissional e competente, sabe o que faz. Emagreci 14kg com a dieta que ela planejou para mim. Estou muito satisfeita!' },
        { id: 2, nome: "Carlos", texto: 'A Dra. “” é incrível! Com a orientação dela, consegui controlar minha diabetes de uma forma que nunca pensei ser possível. Recomendo de olhos fechados!' },
        { id: 3, nome: "Mariana", texto: 'Nunca imaginei que seguir uma dieta pudesse ser tão fácil e prazeroso. A Dra. “” fez um plano perfeito para minhas necessidades e já perdi 10kg em 3 meses!' },
        { id: 4, nome: "Felipe", texto: 'A Dra. “” é muito atenciosa e dedicada. Com sua ajuda, melhorei significativamente minha saúde e estou com mais disposição no dia a dia. Excelente profissional!' },
    ]

    return (
        <GlobalStyle>
            <DepoimentosContainer>
                <DepoimentosTitulo>Depoimentos</DepoimentosTitulo>
                <ContainerTextDepoimentos>
                    <IconSetaLeft src="/icon/ArrowCircleLeft.svg" alt="Icone seta esquerda" onClick={handlePrev} />
                    <Comentarios  className="animeLeft">
                        <IconeAspas src="/icon/aspas.png" alt="Icone aspas" />
                        <ComentariosContainer key={TextoComentario[currentIndex].id}>
                            <ComentarioTexto>{TextoComentario[currentIndex].texto}</ComentarioTexto>
                            <NomePessoaDepoimento>{TextoComentario[currentIndex].nome}</NomePessoaDepoimento>
                        </ComentariosContainer>
                    </Comentarios>
                    <IconSetaRight src="/icon/ArrowCircleRight.svg" alt="Icone seta direita" onClick={handleNext} />
                </ContainerTextDepoimentos>
            </DepoimentosContainer>
        </GlobalStyle>
    )
}