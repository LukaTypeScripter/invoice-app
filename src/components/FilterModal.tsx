import React, { useContext } from 'react'
import { InvoicesFilter, InvoicesFilterCheck, InvoicesFilterName, InvoicesFilterWrap } from './styles/fillterModalStyles'
import { DarkModeContext, ListContext } from '../contexts'

function FilterModal() {
    const {setSelect,select,isOpenFillter} = useContext(ListContext)
    const {darkMode} = useContext(DarkModeContext)
      const toggleFilter = (filterType:any) => {
        if (select === filterType) {
          setSelect('all'); 
        } else {
          setSelect(filterType); 
        }
      };
    
      const isChecked = (filterType:any) => {
        return select === filterType;
      };
  return (
    <InvoicesFilter darkMode={darkMode} isOpenFillterModal={isOpenFillter}>
        <InvoicesFilterWrap>
            <InvoicesFilterCheck onClick={() => toggleFilter('draft')}
              active={select === 'draft'}
              checked={isChecked('draft')}
            ></InvoicesFilterCheck>
            <InvoicesFilterName darkMode={darkMode}>Draft</InvoicesFilterName>
        </InvoicesFilterWrap>
        <InvoicesFilterWrap>
            <InvoicesFilterCheck  onClick={() => toggleFilter('pending')}
            active={select === 'pending'}
            checked={isChecked('pending')}
            ></InvoicesFilterCheck>
            <InvoicesFilterName darkMode={darkMode}>Pending</InvoicesFilterName>
        </InvoicesFilterWrap>
        <InvoicesFilterWrap>
            <InvoicesFilterCheck  onClick={() => toggleFilter('paid')}
            active={select === 'paid'}
            checked={isChecked('paid')}
            ></InvoicesFilterCheck>
            <InvoicesFilterName darkMode={darkMode}>Paid</InvoicesFilterName>
        </InvoicesFilterWrap>
    </InvoicesFilter>
  )
}

export default FilterModal