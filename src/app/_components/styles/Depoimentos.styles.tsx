'use client'
import styled from "styled-components"

export const DepoimentosContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    padding-bottom: 40px;
    margin-top: 120px;
    position: relative;
    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 50px;
        position: relative;
        }  
`

export const DepoimentosTitulo = styled.h1`
    color: #643E1D;
    font-size: 40px;
    font-family: var(--type-roboto);
    font-weight: 400;
    text-transform: uppercase;
`

export const ContainerTextDepoimentos = styled.div`
    display: flex;
    padding-top: 90px;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        }  
        @media (min-width: 768px) and (max-width: 1024px) {
height: 300px;
    }

`

export const Comentarios = styled.div`
display:flex;
width: 770px;
@media (min-width: 320px) and (max-width: 480px) {
        width: 100%
        }  
        @media (min-width: 768px) and (max-width: 1024px) {
        width: 640px;
    }
`

export const IconSetaLeft = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 480px) {
        position: absolute;
        top: 400px;
        left: 140px;
        } 
`

export const IconSetaRight = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 480px) {
        position: absolute;
        top: 400px;
        right: 140px;
        }  
`

export const IconeAspas = styled.img`
    width: 30px;
    height: 30px;
    align-items: start;
    display: flex;
    @media (min-width: 320px) and (max-width: 480px) {
 position: absolute;
 top: -20px;
 left: 20px;
        }  
`

export const ComentariosContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ComentarioTexto = styled.p`
    font-size: 26px;
    font-family: var(--type-roboto);
    font-weight: 400;
    line-height: 35px;
    width: 732px;
    align-items: center;
    margin: auto;
    color: #383838;
    &&::after{
        content: '';
        width: 74px;
        height: 5px;
        display: block;
        background-color: #EA6C00;
        border-radius: 10px;
        position: absolute;
        bottom: 40px;
        left: 359px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        padding: 18px;
        font-size: 18px;

        &&::after{
        content: '';
        width: 74px;
        height: 5px;
        display: block;
        background-color: #EA6C00;
        border-radius: 10px;
        position: absolute;
        bottom: 40px;
        left: 159px;
    }
        }  

        @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        
        &&::after{
        content: '';
        width: 74px;
        height: 5px;
        display: block;
        background-color: #EA6C00;
        border-radius: 10px;
        position: absolute;
        bottom: 40px;
        left: 299px;
    }
    }

`

export const NomePessoaDepoimento = styled.p`
    font-size: 18px;
    padding-top: 40px;
    font-family: var(--type-roboto);
    font-weight: 400;
    color: #383838;
`