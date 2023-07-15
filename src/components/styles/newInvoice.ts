import styled from "styled-components";
import { arrowDown,calendar, delate } from "../../images";

export const PopUp = styled.div`
opacity: 1;
visibility: visible;
height: 100%; 
left: 103px;
position: fixed;
top: 0;
transition: all .2s ease-out;
width: 100%;
&::before {
    background: #000;
    bottom: 0;
    content: '';
    left: 0;
    mix-blend-mode: normal;
    opacity: .4;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
}
@media screen and (max-width: 1024px) {
    left: 0;
    overflow: hidden;
    z-index: 22222;
    position: absolute;
}
`

export const PopUpForm = styled.form<{darkMode:boolean}>`
align-items: flex-start;
background: ${props => props.darkMode ? "#1E2139" : "white"};
border-radius: 0 20px 20px 0;
display: flex;
flex-direction: column;
gap: 48px;
height: 100%;
justify-content: flex-start;
max-width: 691px;
overflow-y: scroll;
padding: 56px;
width: 100%;
box-sizing: border-box;
@media screen and (max-width: 1024px)  {
    padding:24px;
}
`

export const PopUpBillCOnt = styled.div`
align-items: flex-start;
display: flex;
flex-direction: column;
gap: 24px;
justify-content: center;
width: 100%;
`

export const PopUpBillLabel = styled.label`
color: #7c5dfa;
font-size: 12px;
font-style: normal;
font-weight: 700;
letter-spacing: -.25px;
line-height: 15px;
margin: 0;
`
export const PopUpInputWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
justify-content: center;
`
export const PopUpLabelWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const PopUpBillLabels = styled.label`
    color: #888eb0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -.25px;
    font-style: normal;
    line-height: 15px;
`
export const PopUpBillLabelError = styled.label`
        color: #ec5757;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: -.208333px;
    font-style: normal;
    line-height: 15px;
    display: none;
`

export const AdressInput = styled.input<{darkmode:boolean}>`
background: ${props => props.darkmode ? "#252945" : "transparent"};
    border: ${darkmode => darkmode ? "0" : "1px solid #dfe3fa"} ;
    border-radius: 4px;
    box-sizing: border-box;
    color:  ${darkmode => darkmode ? "white" : "#0c0e16"};
    font-family: Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    height: 48px;
    letter-spacing: -.25px;
    line-height: 15px;
    outline: 0;
    padding: 17px;
    width: 100%;

`
export const PopUpAdressCont = styled.div`
    align-items: flex-start;
    display: flex;
    gap: 24px;
    justify-content: center;
`
 
export const PopUpPaymentCont = styled.div`
flex-direction: column;
width: 100%;
display: flex;
align-items: flex-start;
gap:24px;
justify-content: center;
`
export const Calendars = styled.div<{darkmode:boolean}>`
    align-items: center;
    background: transparent;
    border: 1px solid #dfe3fa;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
background: ${props => props.darkmode ? "#252945" : "transparent"};
    border: ${darkmode => darkmode ? "0" : "1px solid #dfe3fa"} ;
        
`
export const CurrentDate = styled.p<{darkmode:boolean}>`
color: #0c0e16;
    font-family: Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    margin: 0;
    color:  ${darkmode => darkmode ? "white" : "#0c0e16"};
`
export const CalendarIcon = styled.i`
    background-image: url(${calendar});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 16px;
    width: 16px;
`

export const CalendarModal = styled.div`
    align-items: center;
    background: transparent;
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    max-width: 240px;
    padding: 25px;
    width: 100%;
`
export const PaymentList = styled.ul`
    align-items: flex-start;
    background: transparent;
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    box-sizing: border-box;
     display: flex; 
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0 16px;
    width: 100%;

`

export const PaymentItem = styled.li`
    border-bottom: 1px solid #dfe3fa;
    box-sizing: border-box;
    color: #0c0e16;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    padding: 15px 24px;
    width: 100%;
`
export const ArrowDown = styled.i`
    background-image: url(${arrowDown});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
height: 5px;
    width: 9px;
`
export const PopUpItems = styled.div`
    align-items: flex-start;
    display: flex;
    gap: 16px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`

export const PopUpItemsTable = styled.ul`
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: flex-start;
    display: flex;
    gap: 16px;
    width: 100%;
`

export const PopUpItemsTableWrap = styled.li`
align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    position: relative;
    max-width: 214px;

`

export const PopUpTableInput = styled.input<{darkmode:boolean}>`
box-sizing: border-box;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    padding: 17px;
    width: 100%;
 
  
    border-radius: 4px;
    color:#0c0e16;
    outline: 0;
    background: ${props => props.darkmode ? "#252945" : "transparent"};
    border: ${darkmode => darkmode ? "0" : "1px solid #dfe3fa"} ;
    color:  ${darkmode => darkmode ? "white" : "#0c0e16"};
`

export const DelateInp = styled.i`
    background-image: url(${delate});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 16px;
    width: 13px;
`
export const TotalWrap = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: center;
`

export const AddButton = styled.button`
align-self: center;
    background-color: transparent;
    border: 0;
    color: #7e88c3;
    margin: 0;
    text-align: center;    
    box-sizing: border-box;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    padding: 17px;
    width: 100%;
    &:hover {
        background-color: #888eb0;
        color: white;
        border-radius:15px ;
    }
`

export const PopupBtnCont = styled.div`
align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const PopUpBtn = styled.button`
    border: 0;
    border-radius: 24px;
    font-size: 12px;
    line-height: 15px;
    padding: 17px 24px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
`

export const BtnTypeBlack = styled(PopUpBtn)`
    background: #373b53;
    color: #888eb0;
`
export const BtnTypePurple = styled(PopUpBtn)`
    background: #7c5dfa;
    color: #fff;
`
export const BtnTypeWhite = styled(PopUpBtn)`
  background: #f9fafe;
    color: #7e88c3;
`
export const PopUpSaveWrap = styled.div`
align-items: center;
    background: transparent;
    box-shadow: 0 10px 10px -10px rgba(72,84,159,.1);
    display: flex;
    gap: 8px;
    justify-content: center;
`




