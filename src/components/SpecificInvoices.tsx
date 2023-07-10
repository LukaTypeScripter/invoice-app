import React, { useContext } from 'react'
import { BackCont, BackIcon, GoBackTExt, Recipt, ReciptCont, StatusBar } from './styles/specific'
import { useNavigate } from 'react-router-dom'
import { arrowLeft } from '../images'
import { ListContext } from '../contexts'
import { DotGreen, StatusCont, StatusWrap } from './styles/invoices'
function SpecificInvoices() {
    const navigate = useNavigate()
    const {data} = useContext(ListContext)
  return (
    <Recipt>
        <ReciptCont>
            <BackCont onClick={() => navigate('/')}>
                <BackIcon src={arrowLeft} />
                <GoBackTExt >Go Back</GoBackTExt>
            </BackCont>
            <StatusBar>
                {data.map((invoice) =>(
                    <StatusCont key={invoice.id}>
                        <StatusWrap status={invoice.status}>
                    <DotGreen status={invoice.status}/>
                    </StatusWrap>
                    </StatusCont>
                ))}
            </StatusBar>
        </ReciptCont>
    </Recipt>
  )
}

export default SpecificInvoices