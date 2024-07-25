'use client'
import styled from "styled-components"

export const FooterContainer = styled.footer`
    width: 100%;
    margin-top: 120px;
    background-color: #fbe6d4;

`

export const ContainerInfos = styled.div`
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
    }  
`

export const InfoCopy = styled.p`
    font-size: 14px;
    color: #383838;
    font-family: var(--type-roboto);
    font-weight: 400;
    width: 200px;
    @media (min-width: 320px) and (max-width: 480px) {
  width: 100%;
  text-align: center;
    }   
`

export const DivIcons = styled.div`
    display: flex;
    gap: 18px;
`

export const IconsImg = styled.img`
    width: 26px;
    height: 26px;
    cursor: pointer;
`

export const InfoText = styled.p`
    font-size: 14px;
    color: #383838;
    font-family: var(--type-roboto);
    font-weight: 400;
    text-align: end;
`