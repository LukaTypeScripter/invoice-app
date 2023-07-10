import React from 'react'
import { ArrowImg, FillterTitle, FillterWrap, InvCont, InvFillterCont, InvTitle, InvTopCont, InvoicesComp, NewBtn, Plus, Subtitle, Title } from './styles/invoices'
import { Pluss, arrowDown } from '../images'

function Invoices() {
  return (
    <InvoicesComp>
        <InvCont>
            <InvTopCont>
                <InvTitle>
                    <Title>Invoices</Title>
                    <Subtitle>There are 7 total invoices</Subtitle>
                </InvTitle>
                <InvFillterCont>
                    <FillterWrap>
                        <FillterTitle>Filter by status</FillterTitle>
                            <ArrowImg src={arrowDown}/>
                    </FillterWrap>
                    <NewBtn>
                        <Plus src={Pluss}></Plus>
                        New Invoice
                    </NewBtn>
                </InvFillterCont>
               
            </InvTopCont>
        </InvCont>
    </InvoicesComp>
  )
}

export default Invoices