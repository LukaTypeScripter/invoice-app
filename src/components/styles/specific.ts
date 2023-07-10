import styled from "styled-components";



export const Recipt = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 72px;
    position: relative;
`

export const ReciptCont = styled(Recipt)`
    flex-direction: column;
    gap: 32px;
    max-width: 730px;
  
`

export const BackCont = styled.div`
    align-items: center;
    display: flex;
    gap: 12px;
    justify-content: center;
`
export const BackIcon = styled.img`
    height: 7px;
    width: 7px;
`

export const GoBackTExt = styled.p`
color: #0c0e16;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    margin: 0;
`
export const StatusBar = styled.div`
align-items: center;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px rgba(72,84,159,.1);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 24px 32px;
    width: 100%;
`