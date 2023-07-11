export interface ListContextValue {
    setData: React.Dispatch<React.SetStateAction<Invoice[]>>
    data: Invoice[]
    setSelect: React.Dispatch<React.SetStateAction<string>>
    filtered: Invoice[]
}


export const ListContextValue: ListContextValue = {
    setData:() => {},
    data:[],
    setSelect:() => {},
    filtered:[]
};

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

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
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
  paymentMethod: string;
  paymentStatus: string;
  currency: string;
  totalLabel: string;
  itemTotal: number;
  reference: string;
}
