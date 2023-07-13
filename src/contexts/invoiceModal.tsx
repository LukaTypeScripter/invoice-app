import React, { createContext, useEffect, useState } from "react";
import { InvoicesContextValue, InvoicesModalContextValue } from "./interfaces/invoicesModal";
const InvoicesModalContext = createContext<InvoicesModalContextValue>(InvoicesContextValue);
export const InvoicesModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [isOpenNewInvoice,setIsOpenNewInvoice] = useState(false)
  const value: InvoicesModalContextValue = {
    setIsOpenNewInvoice,
    isOpenNewInvoice
  };
 
  return <InvoicesModalContext.Provider value={value}>{children}</InvoicesModalContext.Provider>;
};

export default InvoicesModalContext;