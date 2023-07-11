import React from 'react'
import {Btn} from './styles/button'
import {ButtonProps} from './buttonInterface'
function Buttons({text,width,height,bgColor,color}:ButtonProps) {
  return (
    <Btn width={width} height={height} bgColor={bgColor} color={color}>{text}</Btn>
  )
}

export default Buttons