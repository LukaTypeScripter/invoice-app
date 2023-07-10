import React, { useContext } from 'react'
import { ArrowImg, DotGreen, FillterTitle, FillterWrap, Info, InvCont, InvFillterCont, InvTitle, InvTopCont, InvoiceLeft, InvoiceMoney, InvoiceRigth, InvoicesComp, Links, List, ListItem, NewBtn, PaidText, Plus, StatusCont, StatusWrap, Subtitle, Title } from './styles/invoices'
import { Pluss, arrowDown } from '../images'
import { ListContext } from '../contexts'

function Invoices() {
    const {data} = useContext(ListContext)
  return (
    <InvoicesComp>
        <InvCont>
            <InvTopCont>
                <InvTitle>
                    <Title>Invoices</Title>
                    <Subtitle>7 invoices</Subtitle>
                </InvTitle>
                <InvFillterCont>
                    <FillterWrap>
                        <FillterTitle>Filter</FillterTitle>
                            <ArrowImg src={arrowDown}/>
                    </FillterWrap>
                    <NewBtn>
                        <Plus src={Pluss}></Plus>
                        New Invoice
                    </NewBtn>
                </InvFillterCont>
               
            </InvTopCont>
            <List>
            {data.map((invoice) => (
        <ListItem key={invoice.id}>
          <Links to={`/invoices/${invoice.id}`}>
            <InvoiceLeft>
              <Info>{invoice.clientName}</Info>
              <Info>{invoice.createdAt}</Info>
              <Info>{invoice.description}</Info>
            </InvoiceLeft>
            <InvoiceRigth>
              <InvoiceMoney>{invoice.total}</InvoiceMoney>
              <StatusCont>
               
                <StatusWrap status={invoice.status}>
                  
                    <DotGreen status={invoice.status}/>
                 
                  <PaidText status={invoice.status}>{invoice.status}</PaidText>
                </StatusWrap>
              </StatusCont>
            </InvoiceRigth>
          </Links>
        </ListItem>
      ))}
            </List>
        </InvCont>
    </InvoicesComp>
  )
}

export default Invoices