import React, { useContext, useEffect, useState } from "react";
import {
  DarkModeContext,
  InvoicesModalContext,
  ListContext,
} from "../contexts";
import { Invoice, Item } from "../contexts/interfaces/List";
import {
  AdressInput,
  Calendars,
  CalendarIcon,
  CurrentDate,
  PopUpAdressCont,
  PopUpBillCOnt,
  PopUpBillLabel,
  PopUpBillLabelError,
  PopUpBillLabels,
  PopUpForm,
  PopUpInputWrap,
  PopUpLabelWrap,
  PopUpPaymentCont,
  PaymentItem,
  PaymentList,
  ArrowDown,
  PopUpItems,
  PopUpItemsTable,
  PopUpItemsTableWrap,
  PopUpTableInput,
  DelateInp,
  TotalWrap,
  AddButton,
  BtnTypeWhite,
  BtnTypePurple,
} from "./styles/newInvoice";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

interface EditInvoiceModalProps {
  invoice: Invoice;
  onClose: () => void;
}

function EditInvoiceModal({ invoice, onClose }: EditInvoiceModalProps) {
  const { data, setData } = useContext(ListContext);
  const { setIsOpenNewInvoice } = useContext(InvoicesModalContext);
  const { darkMode } = useContext(DarkModeContext);

  const [value, onChange] = useState(new Date());
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [paymentList, setPaymentList] = useState(false);

  useEffect(() => {
    setFormData({
      streetAddress: invoice.senderAddress.street,
      city: invoice.senderAddress.city,
      postCode: invoice.senderAddress.postCode,
      country: invoice.senderAddress.country,
      clientName: invoice.clientName,
      clientEmail: invoice.clientEmail,
      clientAddress: invoice.clientAddress?.street || "",
      clientCity: invoice.clientAddress?.city || "",
      clientPostCode: invoice.clientAddress?.postCode || "",
      clientCountry: invoice.clientAddress?.country || "",
      description: invoice.description,
      paymentTerms: invoice.paymentTerms.toString(),
    });
    setItems(invoice.items);
    onChange(new Date(invoice.paymentDue));
  }, [invoice]);

  const handleCalendarChange = (date: any) => {
    onChange(date);
    setIsOpenCalendar(false);
  };

  const [items, setItems] = useState<Item[]>([]);

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
        total: total,
      };
    } else {
      updatedItems[index] = {
        ...updatedItems[index],
        [name]: value,
      };
    }
    setItems(updatedItems);
  };

  const handleAddItem = (e: React.MouseEvent) => {
    e.preventDefault();
    setItems([...items, { name: "", quantity: 0, price: 0, total: 0 }]);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    description: "",
    paymentTerms: "",
  });

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: keyof typeof formData
  ) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveInvoice = (e: React.FormEvent, statusType: string) => {
    e.preventDefault();

    const updatedInvoice: Invoice = {
      ...invoice,
      paymentDue: value.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
      description: formData.description,
      paymentTerms: parseInt(formData.paymentTerms, 10),
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      status: statusType,
      senderAddress: {
        street: formData.streetAddress,
        city: formData.city,
        postCode: formData.postCode,
        country: formData.country,
      },
      clientAddress: {
        street: formData.clientAddress,
        city: formData.clientCity,
        postCode: formData.clientPostCode,
        country: formData.clientCountry,
      },
      items: items,
      total: 0,
    };

    const updatedIndex = data.findIndex((item) => item.id === invoice.id);

    if (updatedIndex !== -1) {
      const updatedData = [...data];
      updatedData[updatedIndex] = updatedInvoice;
      setData(updatedData);
    }

    onClose();
  };

  return (
    <>
      <PopUps>
        <PopUpForm darkMode={darkMode}>
          <PopUpBillCOnt>
            <PopUpBillLabel>Bill Form</PopUpBillLabel>
            <PopUpInputWrap>
              <PopUpLabelWrap>
                <PopUpBillLabels>Street Adress</PopUpBillLabels>
                <PopUpBillLabelError></PopUpBillLabelError>
              </PopUpLabelWrap>
              <AdressInput
                name="streetAddress"
                value={formData.streetAddress}
                onChange={(e) => handleInputChanges(e, "streetAddress")}
                darkmode={darkMode}
              />
            </PopUpInputWrap>
            <PopUpAdressCont>
              <PopUpInputWrap>
                <PopUpBillLabels>City</PopUpBillLabels>
                <AdressInput
                  name="clientCity"
                  value={formData.clientCity}
                  onChange={(e) => handleInputChanges(e, "clientCity")}
                  darkmode={darkMode}
                />
              </PopUpInputWrap>
              <PopUpInputWrap>
                <PopUpBillLabels>Post Code</PopUpBillLabels>
                <AdressInput
                  name="postCode"
                  value={formData.clientPostCode}
                  onChange={(e) => handleInputChanges(e, "clientPostCode")}
                  darkmode={darkMode}
                />
              </PopUpInputWrap>
              <PopUpInputWrap>
                <PopUpBillLabels>Country</PopUpBillLabels>
                <AdressInput
                  name="clientCountry"
                  value={formData.clientCountry}
                  onChange={(e) => handleInputChanges(e, "clientCountry")}
                  darkmode={darkMode}
                />
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
              <AdressInput
                name="clientName"
                value={formData.clientName}
                onChange={(e) => handleInputChanges(e, "clientName")}
                darkmode={darkMode}
              />
            </PopUpInputWrap>
            <PopUpInputWrap>
              <PopUpLabelWrap>
                <PopUpBillLabels>Client's Email</PopUpBillLabels>
                <PopUpBillLabelError></PopUpBillLabelError>
              </PopUpLabelWrap>
              <AdressInput
                name="clientName"
                value={formData.clientEmail}
                onChange={(e) => handleInputChanges(e, "clientEmail")}
                darkmode={darkMode}
              />
            </PopUpInputWrap>
            <PopUpInputWrap>
              <PopUpLabelWrap>
                <PopUpBillLabels>Client's Adress</PopUpBillLabels>
                <PopUpBillLabelError></PopUpBillLabelError>
              </PopUpLabelWrap>
              <AdressInput
                name="clientAddress"
                value={formData.clientAddress}
                onChange={(e) => handleInputChanges(e, "clientAddress")}
                darkmode={darkMode}
              />
            </PopUpInputWrap>
            <PopUpAdressCont>
              <PopUpInputWrap>
                <PopUpBillLabels>City</PopUpBillLabels>
                <AdressInput
                  name="city"
                  value={formData.city}
                  onChange={(e) => handleInputChanges(e, "city")}
                  darkmode={darkMode}
                />
              </PopUpInputWrap>
              <PopUpInputWrap>
                <PopUpBillLabels>Post Code</PopUpBillLabels>
                <AdressInput
                  name="postCode"
                  value={formData.postCode}
                  onChange={(e) => handleInputChanges(e, "postCode")}
                  darkmode={darkMode}
                />
              </PopUpInputWrap>
              <PopUpInputWrap>
                <PopUpBillLabels>Country</PopUpBillLabels>
                <AdressInput
                  name="country"
                  value={formData.country}
                  onChange={(e) => handleInputChanges(e, "country")}
                  darkmode={darkMode}
                />
              </PopUpInputWrap>
            </PopUpAdressCont>
          </PopUpBillCOnt>
          <PopUpPaymentCont>
            <PopUpInputWrap>
              <PopUpBillLabels>Calendar</PopUpBillLabels>
              <Calendars
                onClick={() => setIsOpenCalendar(!isOpenCalendar)}
                darkmode={darkMode}
              >
                <CurrentDate darkmode={darkMode}>
                  {value.toLocaleDateString()}{" "}
                </CurrentDate>
                <CalendarIcon></CalendarIcon>
              </Calendars>
            </PopUpInputWrap>
            {/**callendar */}
            {isOpenCalendar && (
              <Calendar onChange={handleCalendarChange} value={value} />
            )}
            <PopUpInputWrap onClick={() => setPaymentList(!paymentList)}>
              <PopUpBillLabels>Payment Terms</PopUpBillLabels>
              <Calendars darkmode={darkMode}>
                <CurrentDate darkmode={darkMode}>1</CurrentDate>
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
              <AdressInput
                name="description"
                value={formData.description}
                onChange={(e) => handleInputChanges(e, "description")}
                darkmode={darkMode}
              />
            </PopUpInputWrap>

            <PopUpItems>
              <PopUpBillLabels>Items List</PopUpBillLabels>
              <PopUpItemsTable>
                <PopUpItemsTableWrap>
                  <PopUpBillLabels>name</PopUpBillLabels>

                  {items.map((item, index) => (
                    <PopUpTableInput
                      key={index}
                      name="name"
                      value={item.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                      darkmode={darkMode}
                    />
                  ))}
                </PopUpItemsTableWrap>

                <PopUpItemsTableWrap>
                  <PopUpBillLabels>qti</PopUpBillLabels>
                  {items.map((item, index) => (
                    <PopUpTableInput
                      name="quantity"
                      value={item.quantity.toString()}
                      onChange={(e) =>
                        handleInputChange(index, "quantity", e.target.value)
                      }
                      key={index}
                      darkmode={darkMode}
                    />
                  ))}
                </PopUpItemsTableWrap>

                <PopUpItemsTableWrap>
                  <PopUpBillLabels>price</PopUpBillLabels>
                  {items.map((item, index) => (
                    <PopUpTableInput
                      name="price"
                      value={item.price.toString()}
                      onChange={(e) =>
                        handleInputChange(index, "price", e.target.value)
                      }
                      key={index}
                      darkmode={darkMode}
                    />
                  ))}
                </PopUpItemsTableWrap>

                <PopUpItemsTableWrap>
                  <PopUpBillLabels>total</PopUpBillLabels>
                  {items.map((item, index) => (
                    <TotalWrap key={index}>
                      <PopUpTableInput
                        name="total"
                        value={item.total.toString()}
                        onChange={(e) =>
                          handleInputChange(index, "total", e.target.value)
                        }
                        darkmode={darkMode}
                      />
                      <DelateInp onClick={() => handleRemoveItem(index)} />
                    </TotalWrap>
                  ))}
                </PopUpItemsTableWrap>
              </PopUpItemsTable>

              <AddButton onClick={handleAddItem}>+ Add New Item</AddButton>
            </PopUpItems>
            <PopupBtnConts>
              <BtnTypeWhite onClick={() => setIsOpenNewInvoice(false)}>
                cancel
              </BtnTypeWhite>
              <BtnTypePurple onClick={(e) => handleSaveInvoice(e, "pending")}>
                Save & Send
              </BtnTypePurple>
            </PopupBtnConts>
          </PopUpPaymentCont>
        </PopUpForm>
      </PopUps>
    </>
  );
}
export const PopupBtnConts = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;
export const PopUps = styled.div`
  opacity: 1;
  visibility: visible;
  height: 100%;
  left: 103px;
  position: fixed;
  top: 0;
  transition: all 0.2s ease-out;
  width: 100%;
  &::before {
    background: #000;
    bottom: 0;
    content: "";
    left: 0;
    mix-blend-mode: normal;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  @media screen and (max-width: 1024px) {
    left: 0;
    overflow: hidden;
    z-index: 22222;
  }
`;
export default EditInvoiceModal;
