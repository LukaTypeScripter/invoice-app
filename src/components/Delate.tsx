
import styled from 'styled-components'
import Buttons from './Reusable/Button'
function Delate() {
  return (
    <Tooltip>
        <div className='tool-tip__cont'>
        <p className='tool-tip-title'>weee</p>
        <p className='tool-tip__text'>weeee</p>
        <div className='tool-tip_btn-cont'>
        <Buttons text={'Cancel'}  bgColor={'#f9fafe'} padding='17px 24px' color='#7e88c3'/>
        <Buttons text={'Delate'}  bgColor={'#ec5757'} padding='17px 24px' color='#fff'/>
        </div>
        </div>
    </Tooltip>
  )
}

const Tooltip = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all .2s ease-in-out;
    width: 100%;
    &::before{
        background: #000;
    bottom: 0;
    content: "";
    left: 0;
    mix-blend-mode: normal;
    opacity: .4;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    }
.tool-tip__cont {
    align-items: flex-start;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px rgba(72,84,159,.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 13px;
    justify-content: center;
    max-width: 480px;
    padding: 48px;
    width: 100%;
}
.tool-tip-title {
    color: #0c0e16;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -.5px;
    line-height: 32px;
    font-style: normal;
    margin: 0;
}
.tool-tip__text {
    color: #888eb0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -.25px;
    line-height: 22px;
}
.tool-tip_btn-cont {
    align-items: center;
    align-self: flex-end;
    display: flex;
    gap: 8px;
    justify-content: center;
}
`



export default Delate