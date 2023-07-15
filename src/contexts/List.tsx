import React, { createContext, useEffect, useState } from "react";
import { Invoice, ListContextValue } from "./interfaces/List";
import {invoiceData} from '../data'
import { useNavigate } from "react-router-dom";
const ListContext = createContext<ListContextValue>(ListContextValue);
export const ListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data,setData] = useState<Invoice[]>(invoiceData)
  const [select,setSelect] = useState('all')
  const [isOpenFillter,setIsOpenFillter] = useState(false)
  const navigate = useNavigate();
  //be able to toggle
  const filtered = select === "all" ? data : data.filter(data => data.status.toLowerCase() === select.toLowerCase())
  const handleAddInvoice = (newInvoice: Invoice) => {
    setData((prevData) => [...prevData, newInvoice]);
  };
  const [delate,setDelate] = useState(false)

  function handleDelete(invoiceId:string) {
    // Assuming you have an array of invoices in your data state
    setData((prevData) => {
      const updatedData = prevData.filter((invoice) => invoice.id !== invoiceId);
      return updatedData;
    });
    setDelate(false);
    navigate('/')
  }
  const value: ListContextValue = {
    data,
    setData,
    setSelect,
    filtered,
    select,
    setIsOpenFillter,
    isOpenFillter,
    handleAddInvoice,
    handleDelete,
    delate,
    setDelate,
    
  };


  useEffect(() => {
    const savedData = localStorage.getItem("invoiceData");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      setData(invoiceData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("invoiceData", JSON.stringify(data));
  }, [data]);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export default ListContext;