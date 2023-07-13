export interface InvoicesModalContextValue {
    setIsOpenNewInvoice: React.Dispatch<React.SetStateAction<boolean>>
    isOpenNewInvoice: boolean
}


export const InvoicesContextValue: InvoicesModalContextValue = {
    setIsOpenNewInvoice:() => {},
    isOpenNewInvoice:false
};
