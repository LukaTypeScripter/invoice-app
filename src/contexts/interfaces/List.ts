export interface ListContextValue {
    setData: React.Dispatch<React.SetStateAction<Invoice[]>>
    data: Invoice[]
    setSelect: React.Dispatch<React.SetStateAction<string>>
    filtered: Invoice[]
    select: string
    setIsOpenFillter: React.Dispatch<React.SetStateAction<boolean>>
    isOpenFillter:boolean
    handleAddInvoice: (newInvoice: Invoice) => void
}


export const ListContextValue: ListContextValue = {
    setData:() => {},
    data:[],
    setSelect:() => {},
    filtered:[],
    select:'',
    setIsOpenFillter:() => {},
    isOpenFillter:false,
    handleAddInvoice:() => {}
};



export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress?: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: Item[];
  total: number;
}
