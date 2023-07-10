import styled from "styled-components";

 const SameStyles = styled.div`
align-items: center;
display: flex;
height: 100%;
width: 100%;
`
const FillterSameStyles = styled.div`
display: flex;
align-items: center;
justify-content:center;
`

export const InvoicesComp = styled(SameStyles)`
justify-content:center;
padding-bottom: 5px;
padding-top: 72px;
position: relative;
z-index: 1;
`
export const InvCont = styled(SameStyles)`
    flex-direction: column;
    gap: 65px;
    justify-content: flex-start;
    max-width: 730px;
`

export const InvTopCont = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
width: 100%;
`

export const InvTitle = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap:8px;
    justify-content: center;
`


export const Title = styled.h1`
color: #0c0e16;
font-size: 32px;
font-weight: 700;
letter-spacing: -1;
line-height: 36px;

`

export const Subtitle = styled.p`
font-size: 12px;
letter-spacing: -.25px;
line-height: 15px;
color: #888eb0;
`

export const InvFillterCont = styled(FillterSameStyles)`

`
export const FillterWrap = styled.div`
gap: 16px;
display: flex;
align-items: center;
`
export const FillterTitle = styled.p`
color: #0c0e16;
font-size: 12px;
font-weight: 700;
letter-spacing: -.25px;
line-height: 15px;
margin:0 ;
`
export const ArrowImg = styled.img`
    height: 4px;
    width: 8px;
`



