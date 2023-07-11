import React, { useContext } from 'react'
import { InvoicesFilter, InvoicesFilterCheck, InvoicesFilterName, InvoicesFilterWrap } from './styles/fillterModalStyles'
import { ListContext } from '../contexts'

function FilterModal() {
    const {data,setSelect} = useContext(ListContext)
  return (
    <InvoicesFilter>
        <InvoicesFilterWrap>
            <InvoicesFilterCheck onClick={() => setSelect('draft')}></InvoicesFilterCheck>
            <InvoicesFilterName>Draft</InvoicesFilterName>
        </InvoicesFilterWrap>
        <InvoicesFilterWrap>
            <InvoicesFilterCheck  onClick={() => setSelect('pending')}></InvoicesFilterCheck>
            <InvoicesFilterName>Pending</InvoicesFilterName>
        </InvoicesFilterWrap>
        <InvoicesFilterWrap>
            <InvoicesFilterCheck  onClick={() => setSelect('paid')}></InvoicesFilterCheck>
            <InvoicesFilterName>Paid</InvoicesFilterName>
        </InvoicesFilterWrap>
    </InvoicesFilter>
  )
}

export default FilterModal