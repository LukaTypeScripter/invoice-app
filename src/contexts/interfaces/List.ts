export interface ListContextValue {
    setData: React.Dispatch<React.SetStateAction<Invoice[]>>
    data: Invoice[]
}


export const ListContextValue: ListContextValue = {
    setData:() => {},
    data:[]
};

interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }
  
  interface Item {
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
  }