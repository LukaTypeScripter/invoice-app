import styled from "styled-components";
import { check } from "../../images";

export const InvoicesFilter = styled.div<{isOpenFillterModal:boolean}>`
display: ${props => props.isOpenFillterModal ? 'flex' : 'none'};
    background: #ffffff;
    border-radius: 8px;
    bottom: -130px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    box-sizing: border-box;
    flex-direction: column;
    gap: 17px;
    padding: 24px;
    position: absolute;
    right: 90px;
    width: 192px;
    z-index: 2222;
`


export const InvoicesFilterWrap = styled.div`
    align-items: center;
    display: flex;
    gap: 13px;
    justify-content: flex-start;
    width: 100%;
`

export const InvoicesFilterCheck = styled.div<{active: boolean; checked?: boolean}>`
    background-color:${props => props.active ? "#7c5dfa" : '#dfe3fa'} ;
    background-image: ${(props) => (props.checked ? `url(${check})` : "none")};
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 7px 7px;
    border-radius: 2px;
    height: 16px;
    width: 16px;
`

export const InvoicesFilterName = styled.div`
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    color: #0c0e16;
`
