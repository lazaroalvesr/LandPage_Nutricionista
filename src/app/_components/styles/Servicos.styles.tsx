'use client'

import styled from "styled-components"

export const ServicosContainer = styled.section`
    display: flex;
    margin-top: 120px;
    padding-bottom: 120px;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
margin-top: 70px;
position: relative;
} 

@media (min-width: 768px) and (max-width: 1024px) {
       padding-left: 40px;
       margin-top: 70px;
    }
`

export const DivTextServicos = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
        } 
`

export const ServicosTitulo = styled.h1`
    font-family: var(--type-roboto);
    font-weight: 900;
    color: #643E1D;
    align-items: center;
    display: flex;
    font-size: 38px;
    text-transform: uppercase;
    

    &&::after{
        content: '';
        width: 74px;
        height: 5px;
        display: block;
        margin-left: 12px;
        background-color: #EA6C00;
        border-radius: 10px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 38px;
      
    &&::after{
        content: '';
        width: 134px;
        height: 5px;
        display: block;
        background-color: #EA6C00;
        border-radius: 10px;
        position: absolute;
        top: 50px;
        left: 110px;
    }
        } 
`

export const TextSpanServicos = styled.p`
    font-family: var(--type-roboto);
    font-weight: 300;
    font-size: 20px;
    display: flex;
    color: #979797;
`


export const CardServicosContainer = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
        } 
        @media (min-width: 768px) and (max-width: 1024px) {
      flex-wrap: wrap;
    }
`

export const Card = styled.div`
    width: 350px;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: white;
    cursor: pointer;
    transition: .3s ease-in;

    &&:hover{
        transform: scale(1.1);
    }
    @media (min-width: 320px) and (max-width: 480px) {
     width: 330px;
        } 
`

export const CardImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
`

export const ContainerTextCard = styled.div`
margin: 15px auto;
    gap: 17px;
    display: flex;
    flex-direction: column;
    width: 330px;
`

export const CardTitulo = styled.h2`
    font-family: var(--type-roboto);
    font-weight: 400;
    color: black;
    position: relative;
    font-size: 22px;
    text-align: center;
`

export const CardText = styled.p`
    font-family: var(--type-roboto);
    font-weight: 400;
    color: #9C7D84;
    text-align: center;
    padding-bottom: 20px;
    font-size: 14px;
    @media (min-width: 320px) and (max-width: 480px) {
    width: 320px;
    margin: auto;
        } 

`

export const ButtonServicos = styled.button`
    border: 2px solid #FD9126;
    color: white;
    font-family: var(--type-roboto);
    font-size: 18px;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #FD9126;
    background-color: transparent;
    margin: auto;
    margin-top: 20px;
    border-radius: 15px;
    width: 178px;
    padding: 12px 0px;
    cursor: pointer;
    font-weight: 300;
    transition: .3s ease-in;

    &&:hover{
        transform: scale(1.1);
        background-color: #FD9126;
        color: white;
    }

    @media (min-width: 320px) and (max-width: 480px) {
     margin-top: 30px;
        } 
`