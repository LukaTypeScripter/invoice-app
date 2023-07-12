import React, { useContext, useEffect, useRef } from 'react'
import { ArrowImg, DotGreen, FillterTitle, FillterWrap, Info, InvCont, InvFillterCont, InvTitle, InvTopCont, InvoiceLeft, InvoiceMoney, InvoiceRigth, InvoicesComp, Links, List, ListItem, NewBtn, PaidText, Plus, StatusCont, StatusWrap, Subtitle, Title } from './styles/invoices'
import { Pluss, arrowDown } from '../images'
import { ListContext } from '../contexts'
import FilterModal from './FilterModal'
import NewInvoiceModal from './NewInvoiceModal'

function Invoices() {
    const {data,filtered,setIsOpenFillter,isOpenFillter} = useContext(ListContext)

    const modalRef = useRef<HTMLDivElement>(null);
   

    useEffect(() => {
      const handleOutsideClick = (event:MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          setIsOpenFillter(false);
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);
  return (
    <InvoicesComp>
        <InvCont ref={modalRef}>
            <InvTopCont>
                <InvTitle>
                    <Title>Invoices</Title>
                    <Subtitle>7 invoices</Subtitle>
                </InvTitle>
                <InvFillterCont>
                    <FillterWrap >
                        <FillterTitle>Filter</FillterTitle>
                            <ArrowImg src={arrowDown} onClick={() => setIsOpenFillter(!isOpenFillter)}/>
                    </FillterWrap>
                    <NewBtn>
                        <Plus src={Pluss}></Plus>
                        New Invoice
                    </NewBtn>
                    <FilterModal />
                </InvFillterCont>
               
            </InvTopCont>
            <List>
            {filtered.map((invoice) => (
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
        <NewInvoiceModal />
    </InvoicesComp>
  )
}

export default Invoices


