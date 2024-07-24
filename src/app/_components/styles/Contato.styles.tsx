'use client'
import styled from "styled-components"

export const ContatoContainer = styled.section`
    width: 100%;
    margin-top: 120px;
    position: relative; 
    height: 800px;
    @media (min-width: 320px) and (max-width: 480px) {
      margin-bottom: 40px;
      height: 1300px;
        }  
`

export const ContatoMap = styled.img`
   width: 100%;
   height: auto;
   @media (min-width: 320px) and (max-width: 480px) {
      display: none;
        }  
`

export const DivForm = styled.div`
    background-color: white;
    width: 866px;
    position: absolute;
    height: 716px;
    border-radius: 15px;
    top: 40px;
    right: 130px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    @media (min-width: 320px) and (max-width: 480px) {
      right: 0px;
      width: 100%;
      height: 1280px;
        }  
        @media (min-width: 768px) and (max-width: 1024px) {
            right: 20px;
            width: 800px;
    }
`

export const FormContainer = styled.form`
    width: 740px;
    margin: 40px auto;
    height: 640px;
    @media (min-width: 320px) and (max-width: 480px) {
     width: 100%;
padding-left: 20px;
        } 
`

export const ContainerItens = styled.section`
    display: flex;
        gap: 30px;
        @media (min-width: 320px) and (max-width: 480px) {
   flex-direction: column;
        }  
`

export const DivItens1 = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   height: 100%;
`

export const TituloDiv1 = styled.h1`
  color: #643E1D;
  font-size: 48px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: var(--type-roboto);
  @media (min-width: 320px) and (max-width: 480px) {
  font-size: 40px;
  text-align: center;
        }  
`

export const SubtituloDiv1 = styled.p`
 color: #9C7D84;
  font-size: 14px;
  padding-top: 20px;
  width: 300px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: var(--type-roboto);
`

export const ContainerItensDiv1 = styled.div`
    display: flex;
    padding-top: 40px;
    gap: 20px;
    flex-direction: column;
`

export const ItenDIv1 = styled.span`
align-items: center;
width: 100%;
color: #9C7D84;
font-family: var(--type-roboo);
font-weight: 400;
display: flex;
gap: 20px;
@media (min-width: 320px) and (max-width: 480px) {
    width: 300px;
        }  
`

export const IconImgDiv1 = styled.img`
 width: 38px;
 height: 38px;
`

export const LogoForm = styled.h2`
    font-family: var(--type-roboto);
    padding-top: 30px;
    display: flex;
    font-size: 50px;
    width: 100%;
    color: #643E1D;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
   padding-left: 40px;
    }  
`

export const IconeLaranjaForm = styled.p`
    width: 100px;
    height: 100px;
    top: 10px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    left: 73px;
    background-color: #FD9126;
    color: white;
`

export const DivItens2 = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 330px;
    margin-left: 20px;
        }  
`

export const DivItenLabel = styled.label`
    font-family: var(--type-roboto);
    font-weight: 400;
    color: #402E32;
    font-size: 16px;
`

export const DivItenInput = styled.input`
    width: 100%;
    border-radius: 15px;
    margin-top: 12px;
    border: 2px solid white;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding-left: 12px;
`

export const DivItenTextarea = styled.textarea`
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 200px;
    border: 2px solid white;
    padding: 10px;
    resize: none;
    border-radius: 15px;
`

export const ButtonForm = styled.button`
font-size: 18px;
font-family: var(--type-roboto);
font-weight: 400;
color: white;
background-color: #DA8027;
width: 140px;
border: none;
border-radius: 15px;
padding: 4px;
margin-left: 220px;
cursor: pointer;
margin-top: -20px;
transition: .3s ease-in;

@media (min-width: 320px) and (max-width: 480px) {
    margin-left: 170px;
        } 

        &&:hover{
            background-color: white;
            color: #DA8027;
            border: 2px solid #DA8027;
        }
`