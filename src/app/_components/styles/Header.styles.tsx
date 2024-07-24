'use client'
import {  MenuMobileAtivado } from "@/lib/interface"
import styled from "styled-components"

export const HeaderSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    
    @media (min-width: 320px) and (max-width: 480px) {
      position: relative;
        }  
        @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0px 30px;
    }
`

export const HeaderLogo = styled.h2`
    font-family: var(--type-roboto);
    font-size: 24px;
    color: #643E1D;
    display: flex;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
   padding-left: 40px;
    }  
`

export const IconeLaranja = styled.span`
    width: 50px;
    height: 50px;
    top: 10px;
    border-radius: 50%;
    z-index: -10;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #FD9126;
    color: white;
`

export const HeaderUl = styled.ul<MenuMobileAtivado>`
   display: flex;
   gap: 20px;
   align-items: center;
   
   @media (min-width: 320px) and (max-width: 480px) {
    display: ${({ ativo }) => ativo ? 'flex' : 'none'};
      flex-direction: column;
      position: absolute;
      padding: 50px 0px;
      z-index: 1000;
      left: 0px;
      width: 100%;
      background-color: #fbe6d4;
      top: 90px;
    }  
`

export const HeaderLi = styled.li`
    font-size: 15px;
    font-family: var(--type-roboto);
    font-weight: 400;
    list-style: none;
    text-transform: uppercase;
    color:#402E32;
    padding: 7px 10px;
    border-radius: 15px;
    transition: .3s ease-in;
    cursor: pointer;

    &&:hover{
        background-color:#FD9126 ;
        color: #fff
    }
`

export const ButtonMobile = styled.button`
   display: none;
    
   @media (min-width: 320px) and (max-width: 480px) {
     display: flex;
     background-color: transparent;
     border: none;
     position: absolute;
     right: 30px;
}  
`