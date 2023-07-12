import React, { Fragment, useContext, useState } from 'react'
import { AdressInput,  Calendars,  CalendarIcon,  CurrentDate, PopUp, PopUpAdressCont, PopUpBillCOnt, PopUpBillLabel, PopUpBillLabelError, PopUpBillLabels, PopUpForm, PopUpInputWrap, PopUpLabelWrap, PopUpPaymentCont, PaymentItem, PaymentList, ArrowDown, PopUpItems, PopUpItemsTable, PopUpItemsTableWrap, PopUpTableInput, DelateInp, TotalWrap, AddButton, PopupBtnCont, BtnTypeWhite, PopUpSaveWrap, BtnTypeBlack, BtnTypePurple } from './styles/newInvoice'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ListContext } from '../contexts';
import { Invoice, Item } from '../contexts/interfaces/List';
import Buttons from './Reusable/Button';

function NewInvoiceModal() {
    const {data,setData,handleAddInvoice} = useContext(ListContext)
    const [value, onChange] = useState(new Date());
    const [isOpenCalendar,setIsOpenCalendar] = useState(false)
    const [paymentList,setPaymentList] = useState(false)
  const handleCalendarChange = (date:any) => {
    onChange(date);
    setIsOpenCalendar(false)
  };
  const [items, setItems] = useState<Item[]>([
    { name: '', quantity: 0, price: 0, total: 0 }
  ]);

  

  const handleInputChange = (
    index: number,
    name: keyof Item,
    value: string
  ) => {
    const updatedItems = [...items];
    if (name === "quantity" || name === "price") {
      const quantity = parseFloat(updatedItems[index].quantity.toString());
      const price = parseFloat(updatedItems[index].price.toString());
      const total = isNaN(quantity) || isNaN(price) ? 0 : quantity * price;
      updatedItems[index] = {
        ...updatedItems[index],
        [name]: parseFloat(value) || 0,
        total: total
      };
    } else {
      updatedItems[index] = {
        ...updatedItems[index],
        [name]: value
      };
    }
    setItems(updatedItems);
  };
  const handleAddItem = (e:any) => {
    e.preventDefault();
    setItems([...items, { name: '', quantity: 0, price: 0,total:0 }]);
  };

  const handleRemoveItem = (index:any) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  const handleSaveInvoice = (e:any) => {
e.preventDefault();
    // Create a new invoice object
    const newInvoice: Invoice = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      paymentDue: value.toISOString(),
      description: '', // Update with the actual description value
      paymentTerms: 0, // Update with the actual payment terms value
      clientName: '', // Update with the actual client name value
      clientEmail: '', // Update with the actual client email value
      status: 'draft', // or any other default status
      senderAddress: {
        street: '', // Update with the actual sender street value
        city: '', // Update with the actual sender city value
        postCode: '', // Update with the actual sender post code value
        country: '' // Update with the actual sender country value
      },
      clientAddress: {
        street: '', // Update with the actual client street value
        city: '', // Update with the actual client city value
        postCode: '', // Update with the actual client post code value
        country: '' 
      },
      items: items,
      total: 0 // Update with the actual total value
    };

    // Call the addInvoice function from ListContext to add the new invoice to the data array
    handleAddInvoice(newInvoice);

    // Clear the form or navigate to a different page
    // Reset the state variables as needed
    setItems([{ name: '', quantity: 0, price: 0, total: 0 }]);
    console.log(data)
  };
  console.log(data)
  return (
    <PopUp>
        <PopUpForm>
            <PopUpBillCOnt>
                <PopUpBillLabel>Bill Form</PopUpBillLabel>
                <PopUpInputWrap>
                    <PopUpLabelWrap>
                        <PopUpBillLabels>Street Adress</PopUpBillLabels>
                        <PopUpBillLabelError></PopUpBillLabelError>
                    </PopUpLabelWrap>
                    <AdressInput />
                </PopUpInputWrap>
                <PopUpAdressCont>
                <PopUpInputWrap>
                    <PopUpBillLabels>City</PopUpBillLabels>
                    <AdressInput />
                    </PopUpInputWrap>
                    <PopUpInputWrap>
                    <PopUpBillLabels>Post Code</PopUpBillLabels>
                    <AdressInput />
                    </PopUpInputWrap>
                    <PopUpInputWrap>
                    <PopUpBillLabels>Country</PopUpBillLabels>
                    <AdressInput />
                    </PopUpInputWrap>
                </PopUpAdressCont>
                
            </PopUpBillCOnt>
            <PopUpBillCOnt>
            <PopUpBillLabel>Bill To</PopUpBillLabel>
            <PopUpInputWrap>
                    <PopUpLabelWrap>
                        <PopUpBillLabels>Client's Name</PopUpBillLabels>
                        <PopUpBillLabelError></PopUpBillLabelError>
                    </PopUpLabelWrap>
                    <AdressInput />
                </PopUpInputWrap>
                <PopUpInputWrap>
                    <PopUpLabelWrap>
                        <PopUpBillLabels>Client's Email</PopUpBillLabels>
                        <PopUpBillLabelError></PopUpBillLabelError>
                    </PopUpLabelWrap>
                    <AdressInput />
                </PopUpInputWrap>
                <PopUpInputWrap>
                    <PopUpLabelWrap>
                        <PopUpBillLabels>Client's Adress</PopUpBillLabels>
                        <PopUpBillLabelError></PopUpBillLabelError>
                    </PopUpLabelWrap>
                    <AdressInput />
                </PopUpInputWrap>
                <PopUpAdressCont>
                <PopUpInputWrap>
                    <PopUpBillLabels>City</PopUpBillLabels>
                    <AdressInput />
                    </PopUpInputWrap>
                    <PopUpInputWrap>
                    <PopUpBillLabels>Post Code</PopUpBillLabels>
                    <AdressInput />
                    </PopUpInputWrap>
                    <PopUpInputWrap>
                    <PopUpBillLabels>Country</PopUpBillLabels>
                    <AdressInput />
                    </PopUpInputWrap>
                </PopUpAdressCont>
            </PopUpBillCOnt>
            <PopUpPaymentCont>
            <PopUpInputWrap>
                    
                        <PopUpBillLabels >Calendar</PopUpBillLabels>
                        <Calendars onClick={() => setIsOpenCalendar(!isOpenCalendar)}>
                            <CurrentDate>{value.toLocaleDateString()} </CurrentDate>
                            <CalendarIcon></CalendarIcon>
                        </Calendars>
                </PopUpInputWrap>
                {/**callendar */}
                {isOpenCalendar && (
    <Calendar
    onChange={handleCalendarChange}
    value={value}
/>
                )}
            <PopUpInputWrap onClick={() => setPaymentList(!paymentList)}>
            <PopUpBillLabels >Payment Terms</PopUpBillLabels>
                <Calendars>
                    <CurrentDate>1</CurrentDate>
                    <ArrowDown />
                </Calendars>
            </PopUpInputWrap>
            {paymentList && (
 <PaymentList>
 <PaymentItem>Net 1 Day</PaymentItem>
 <PaymentItem>Net 7 Day</PaymentItem>
 <PaymentItem>Net 14 Day</PaymentItem>
 <PaymentItem>Net 30 Day</PaymentItem>
</PaymentList>
            )}
           
            <PopUpInputWrap>
                    <PopUpLabelWrap>
                        <PopUpBillLabels>Project Description</PopUpBillLabels>
                        <PopUpBillLabelError></PopUpBillLabelError>
                    </PopUpLabelWrap>
                    <AdressInput />
                </PopUpInputWrap>

                <PopUpItems>
                <PopUpBillLabels>Items List</PopUpBillLabels>
                    <PopUpItemsTable>
                    <PopUpItemsTableWrap >
                  
                    <PopUpBillLabels>name</PopUpBillLabels>
                   
                    {items.map((item, index) => (
              
                <PopUpTableInput
                key={index}
                  name="name"
                  value={item.name}
                  onChange={(e) => handleInputChange(index, "name",e.target.value)}
                />
               
              
            ))}
            </PopUpItemsTableWrap>
         
                   
                  
            <PopUpItemsTableWrap >
            <PopUpBillLabels>qti</PopUpBillLabels>
                 {items.map((item, index) => (
              
                <PopUpTableInput
                  name="quantity"
                  value={item.quantity.toString()}
                  onChange={(e) => handleInputChange(index, "quantity",e.target.value)}
                  key={index}
                />
               
              
            ))}
            </PopUpItemsTableWrap>
         
            <PopUpItemsTableWrap >
            <PopUpBillLabels>price</PopUpBillLabels>
                 {items.map((item, index) => (
              
                <PopUpTableInput
                  name="price"
                  value={item.price.toString()}
                  onChange={(e) => handleInputChange(index, "price",e.target.value)}
                  key={index}
                />
               
              
            ))}
            </PopUpItemsTableWrap>
          
            <PopUpItemsTableWrap >
            <PopUpBillLabels>total</PopUpBillLabels>
                 {items.map((item, index) => (
              <TotalWrap  key={index}>
                <PopUpTableInput
                  name="total"
                  value={item.total.toString()}
                  onChange={(e) => handleInputChange(index, "total",e.target.value)}
                 
                />
               <DelateInp onClick={() => handleRemoveItem(index)} />
               </TotalWrap>
            ))}
            </PopUpItemsTableWrap>
                    </PopUpItemsTable>

                    <AddButton onClick={handleAddItem}>+ Add New Item</AddButton>
                </PopUpItems>
                <PopupBtnCont>
                    <BtnTypeWhite>Discard</BtnTypeWhite>
                    <PopUpSaveWrap>
                        <BtnTypeBlack>
                            Save As Draft
                        </BtnTypeBlack>
                        <BtnTypePurple onClick={handleSaveInvoice}>Save & Send</BtnTypePurple>
                    </PopUpSaveWrap>
                </PopupBtnCont>
            </PopUpPaymentCont>
        </PopUpForm>
    </PopUp>
  )
}

export default NewInvoiceModal

