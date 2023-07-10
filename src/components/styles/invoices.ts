import styled from "styled-components";
import { Link } from "react-router-dom";

const SameStyles = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;
const FillterSameStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InvoicesComp = styled(SameStyles)`
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 72px;
  position: relative;
  z-index: 1;
`;
export const InvCont = styled(SameStyles)`
  flex-direction: column;
  gap: 65px;
  justify-content: flex-start;
  max-width: 730px;
  @media screen and (max-width: 768px){
    gap: 32px;
    max-width: 327px;
  }
`;

export const InvTopCont = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InvTitle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #0c0e16;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1;
  line-height: 36px;
  @media screen and (max-width: 768px){
    font-size: 20px;
    line-height: 22px;
  }
`;

export const Subtitle = styled.p`
  font-size: 12px;
  letter-spacing: -0.25px;
  line-height: 15px;
  color: #888eb0;
`;

export const InvFillterCont = styled(FillterSameStyles)`
    gap: 40px;
    position: relative;
    @media screen and (max-width: 768px){
      gap: 18px;
    }
`;
export const FillterWrap = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;
export const FillterTitle = styled.p`
  color: #0c0e16;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 15px;
  margin: 0;
`;
export const ArrowImg = styled.img`
  height: 4px;
  width: 8px;
`;
export const NewBtn = styled.button`
  align-items: center;
  background: #7c5dfa;
  border: 0;
  border-radius: 24px;
  color: #fff;
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 15px;
`;
export const Plus = styled.img`
    height: 32px;
    width: 32px;
`

export const List = styled.ul`
display: flex;
align-items: center;
flex-direction: column;
gap: 16px;
justify-content: center;
list-style: none;
margin: 0;
max-width: 730px;
padding: 0;
width: 100%;
`
export const Links = styled(Link)`
align-items: center;
    background: #1E2139;
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px rgba(72,84,159,.1);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    text-decoration: none;
`
export const ListItem = styled.li`
width: 100%;
`
export const InvoiceLeft = styled.div`
display: flex;
align-items:center;
gap: 43px;
justify-content:center;
@media screen and (max-width: 768px){
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}
`
export const InvoiceRigth = styled.div`
display: flex;
align-items:center;
gap: 40px;
justify-content:center;
`
export const Info = styled.p`
    color: white;

    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -.25px;
    line-height: 15px;
    margin: 0;
`

export const InvoiceMoney = styled.p`
color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.8px;
    line-height: 24px;
    margin: 0;
    text-align: right;
`
export const StatusCont = styled(FillterSameStyles)`
  gap:20px;
`
export const StatusWrap = styled(FillterSameStyles)<{status:string}>`
background-color: ${props => props.status === "paid" ? "rgba(51,214,159,.06)" : ""};
background-color: ${props => props.status === "pending" ? "rgba(255,143,0,.06)" : ""};
background-color: ${props => props.status === "draft" ? "rgba(223,227,250,.0571)" : ""};
    border-radius: 6px;
    gap: 8px;
    height: 40px;
    mix-blend-mode: normal;
    width: 104px;
`
export const DotGreen = styled.div<{status:string}>`
border-radius: 50%;
height: 8px;
width: 8px;

background-color: ${props => props.status === "paid" ? "#33d69f" : ""};
background-color: ${props => props.status === "pending" ? "#ff8f00" : ""};
background-color: ${props => props.status === "draft" ? "white" : ""};
`
export const PaidText = styled.p<{status:string}>`
    background-color: transparent;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    margin: 0;
    color: #33d69f;
    color: ${props => props.status === "paid" ? "#33d69f" : ""};
color: ${props => props.status === "pending" ? "#ff8f00" : ""};
color: ${props => props.status === "draft" ? "white" : ""};
`
