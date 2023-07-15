import styled from "styled-components";

interface ButtonProps {
    width?: number;
    height?: number;
    bgColor:string;
    color?:string;
    padding?:string;
    status?:string;
  }

export const Btn = styled.button<ButtonProps>`
    background: ${props => props.status === "paid" ? "transperent" : props.bgColor};
    border: 0;
    border-radius: 24px;
    color: ${props => props.color};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.25px;
    line-height: 15px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    padding: ${(props) => props.padding};
`