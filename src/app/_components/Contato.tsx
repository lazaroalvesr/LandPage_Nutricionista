'use client'

import { FormEvent } from "react"
import { ButtonForm, ContainerItens, ContainerItensDiv1, ContatoContainer, ContatoMap, DivForm, DivItenInput, DivItenLabel, DivItens1, DivItens2, DivItenTextarea, FormContainer, IconeLaranjaForm, IconImgDiv1, ItenDIv1, LogoForm, SubtituloDiv1, TituloDiv1 } from "./styles/Contato.styles"

export const Contato = () => {

    const submit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <ContatoContainer>
            <ContatoMap src="/img/maps.png" />
            <DivForm id="contato">
                <FormContainer onSubmit={submit}>
                    <ContainerItens>
                        <DivItens1>
                            <TituloDiv1>Fale conosco</TituloDiv1>
                            <SubtituloDiv1>Fale Conosco e Transforme sua Saúde: Agende uma Consulta com Nossa Nutricionista e Descubra Como Melhorar sua Alimentação e Bem-Estar</SubtituloDiv1>
                            <ContainerItensDiv1>
                                <ItenDIv1>
                                    <IconImgDiv1 src="/icon/loc.svg" alt="Icone localização" />
                                    Rua Fulano de Tal, 999 - Santa Quiteria, Curitiba - PR, 80330-010
                                </ItenDIv1>
                                <ItenDIv1>
                                    <IconImgDiv1 src="/icon/phone.svg" alt="Icone Telefone" />
                                    +55 41 3333-3333
                                </ItenDIv1>
                                <ItenDIv1>
                                    <IconImgDiv1 src="/icon/mobile.svg" alt="Icone Smartphone" />
                                    +55 41 99999-9999
                                </ItenDIv1>
                                <ItenDIv1>
                                    <IconImgDiv1 src="/icon/email.svg" alt="Icone Email" />
                                    contato@nutribem.com.br
                                </ItenDIv1>
                            </ContainerItensDiv1>
                            <LogoForm>Nutri <IconeLaranjaForm>Bem</IconeLaranjaForm>
                            </LogoForm>
                        </DivItens1>
                        <DivItens2>
                            <DivItenLabel>
                                Nome Completo
                                <DivItenInput
                                    placeholder="EX: Maria Augusta"
                                />
                            </DivItenLabel>
                            <DivItenLabel>
                                Email
                                <DivItenInput
                                    placeholder="maria.augusta@gmail.com"
                                />
                            </DivItenLabel>
                            <DivItenLabel>
                                Assunto
                                <DivItenInput
                                    placeholder="Apenas Contato"
                                />
                            </DivItenLabel>
                            <DivItenLabel>
                                Mensagem
                                <DivItenTextarea />
                            </DivItenLabel>
                            <ButtonForm>Ok, Enviar</ButtonForm>
                        </DivItens2>
                    </ContainerItens>
                </FormContainer>
            </DivForm>
        </ContatoContainer>
    )
}