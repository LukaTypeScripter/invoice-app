
import {Btn} from './styles/button'
import {ButtonProps} from './buttonInterface'
function Buttons({text,width,height,bgColor,color,onCLick,padding}:ButtonProps) {
  return (
    <Btn width={width} height={height} bgColor={bgColor} color={color} onClick={onCLick} padding={padding}>{text}</Btn>
  )
}

export default Buttons