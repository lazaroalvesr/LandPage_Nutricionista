'use client'
import styled from "styled-components"

export const ContainerMain = styled.section`
    max-width: 1100px;
    margin: auto;
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-top: 50px;
    }
`

export const DivTextImg = styled.div`
    display: flex;
    padding-bottom: 25px;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
      padding-top: 50px;
      position: relative;
        } 
     
        @media (min-width: 768px) and (max-width: 1024px) {
       padding-left: 40px;
    }
`

export const DivText = styled.div`
   display: flex;
   flex-direction: column;
   @media (min-width: 320px) and (max-width: 480px) {
  align-items: center;
        } 
`

export const MainH1 = styled.h1`
    font-size: 45px;
    font-family: var(--type-roboto);
    font-weight: 600;
    color: black;
    width: 500px;
    @media (min-width: 320px) and (max-width: 480px) {
   text-align: center;
   font-size: 32px;
   width: 100%;
        } 
`

export const MainText = styled.p`
    padding-top: 20px;
    font-family: var(--type-roboto);
    font-weight: 400;
    font-size: 18px;
    color: black;
    width: 499px;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
      text-align: center;
      padding-top: 370px;
      font-size: 20px;
      width: 350px;
      } 
`

export const ButtonConsulta = styled.button`
    background-color: #FD9126;
    color: white;
    font-family: var(--type-roboto);
    font-size: 18px;
    border: none;
    margin-top: 20px;
    border-radius: 15px;
    width: 178px;
    padding: 12px 0px;
    cursor: pointer;
    font-weight: 300;
    transition: .3s ease-in;

    &&:hover{
        transform: scale(1.1);
    }
`

export const DivImg = styled.div`
   @media (min-width: 320px) and (max-width: 480px) {
        } 
`

export const Img = styled.img`
   width: 100%;
   margin-left: 120px;
   height: 100%;
   object-fit: cover;
   @media (min-width: 320px) and (max-width: 480px) {
     margin-left: 0px;
     width: 100%;
     height: 350px;
     position: absolute;
     left: 0px;
     top: 140px;
        } 
        @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: 0px;
    }
 `