'use client'
import styled from "styled-components"

export const SobreMimContainer = styled.section`
    display: flex;
    margin-top: 120px;
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

export const DivTextSobre = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;

        } 
`

export const SobreMimTitulo = styled.h1`
    font-family: var(--type-roboto);
    font-weight: 600;
    color: black;
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
      font-size: 32px;
      &&::after{
        content: '';
        width: 120px;
        height: 5px;
        display: block;
        background-color: #EA6C00;
        border-radius: 10px;
        position: absolute;
        top: 50px;
        left: 120px;
    }
        } 
`

export const TextSpan = styled.p`
    font-family: var(--type-roboto);
    font-weight: 300;
    font-size: px;
    display: flex;
    color: #979797;
`

export const ContainerDivSobreMim = styled.div`
    display: flex;
    padding: 40px;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
     padding: 20px;
     flex-direction: column;
        } 
        @media (min-width: 768px) and (max-width: 1024px) {
       padding: 20px;
    }
`

export const SobreMimText =styled.div`
    display: flex;
    flex-direction: column;
`

export const TituloSobreMim = styled.h4`
     font-family: var(--type-roboto);
     font-weight: 600;
     padding-bottom: 30px;
     color: black;
     font-size: 20px;
     @media (min-width: 320px) and (max-width: 480px) {
   text-align: center;
        } 
`

export const TextSobreMimInfos = styled.p`
     font-family: var(--type-roboto);
     font-weight: 400;
     font-size: 20px;
     color: black;
     width: 600px;
     @media (min-width: 320px) and (max-width: 480px) {
   width: 100%;
   font-size: 18px;
   text-align: center;
   padding-bottom: 30px;
        } 
        @media (min-width: 768px) and (max-width: 1024px) {
       width: 500px;
       font-size: 20px;
    }
`

export const DivImg = styled.div`
    background-color: rgb(234,108,0, 17%);
    width: 283px;
    height: 272px;
    border-radius: 10px;
`

export const Img2 = styled.img`
   width: 100%;
   padding: 4px;
   height: 100%;
   object-fit: cover;
`