import  { Fragment, useContext, useState } from "react";
import {
  BackCont,
  BackIcon,
  GoBackTExt,
  InfoAdress,
  InfoBottom,
  InfoCont,
  InfoLeftCont,
  InfoPayvment,
  InfoText,
  InfoTitle,
  InfoTitleWrap,
  InfoTop,
  Recipt,
  ReciptCont,
  StatusBar,
  StatusBarBtnCont,
  StatusBarLabel,
 
} from "./styles/specific";
import { useNavigate, useParams } from "react-router-dom";
import { arrowLeft } from "../images";
import { DarkModeContext, ListContext } from "../contexts";
import { DotGreen, PaidText, StatusCont, StatusWrap } from "./styles/invoices";
import Buttons from "./Reusable/Button";
import ItemsComp from "./Items";
import Delate from "./Delate";
import EditInvoiceModal from "./Edit";
function SpecificInvoices() {
  const navigate = useNavigate();
  const { data,setDelate,handleDelete,delate,setData } = useContext(ListContext);
  const { darkMode } = useContext(DarkModeContext);
  const { id } = useParams();
  const specificInvoices = data.filter((invoice) => invoice.id === id);
  console.log(specificInvoices);
  if (specificInvoices.length === 0) {
    return <div>No specific invoices found.</div>; 
  }
  const [edit,setEdit] = useState(false)
  
  return (
    <>
    <Recipt>
      <ReciptCont>
        <BackCont onClick={() => navigate("/")}>
          <BackIcon src={arrowLeft} />
          <GoBackTExt darkMode={darkMode}>Go Back</GoBackTExt>
        </BackCont>
        <StatusBar darkMode={darkMode}>
          {specificInvoices.map((invoice) => (
            <Fragment key={invoice.id}>
              <StatusCont >
                <StatusBarLabel>Status</StatusBarLabel>
                <StatusWrap status={invoice.status}>
                  <DotGreen status={invoice.status} />
                  <PaidText status={invoice.status}>{invoice.status}</PaidText>
                </StatusWrap>
              </StatusCont>
              <StatusBarBtnCont darkMode={darkMode}>
                <Buttons
                  text={"Edit"}
                  width={73 }
                  height={48 }
                  bgColor={"#f9fafe"}
                  color={"#7e88c3"}
                  onCLick={() => setEdit(true)}
                />
                <Buttons
                  text={"Delate"}
                  width={89 }
                  height={48}
                  bgColor={"#ec5757"}
                  color={"#fff"}
                  onCLick={() => setDelate(true)}
                />
                <Buttons
                  text={"Mark as Read"}
                  width={131}
                  height={48}
                  bgColor={"#7c5dfa"}
                  color={"#fff"}
                  onCLick={() => {
                    const updatedData = data.map((invoice) => {
                      if (invoice.id === id) {
                        return { ...invoice, status: "paid" };
                      }
                      return invoice;
                    });
                    setData(updatedData);
                  }}
                  
                  status={invoice.status}
                />
              </StatusBarBtnCont>
            </Fragment>
          ))}
        </StatusBar>
        <InfoCont darkMode={darkMode}>
          {specificInvoices.map((info) => (
            <Fragment key={info.id}>
              <InfoTop>
                <InfoTitleWrap>
                  <InfoTitle darkMode={darkMode}>{info.id}</InfoTitle>
                  <InfoText darkMode={darkMode}>{info.description}</InfoText>
                </InfoTitleWrap>
                <InfoAdress>
                  <InfoText darkMode={darkMode}>{info.clientAddress?.street}</InfoText>
                  <InfoText darkMode={darkMode}>{info.clientAddress?.city}</InfoText>
                  <InfoText darkMode={darkMode}>{info.clientAddress?.postCode}</InfoText>
                  <InfoText darkMode={darkMode}>{info.clientAddress?.country}</InfoText>
                </InfoAdress>
              </InfoTop>

              <InfoBottom>
                <InfoLeftCont>
                  <InfoPayvment>
                    <InfoTitleWrap>
                      <InfoText darkMode={darkMode}>Invoice Date</InfoText>
                      <InfoTitle darkMode={darkMode}>{info.createdAt}</InfoTitle>
                    </InfoTitleWrap>
                    <InfoTitleWrap>
                      <InfoText darkMode={darkMode}>Paymant Due</InfoText>
                      <InfoTitle darkMode={darkMode}>{info.paymentDue}</InfoTitle>
                    </InfoTitleWrap>
                  </InfoPayvment>
                  <InfoTitleWrap>
                    <InfoText darkMode={darkMode}>Bill To</InfoText>
                    <InfoTitle darkMode={darkMode}>{info.clientName}</InfoTitle>
                    <InfoAdress>
                      <InfoText darkMode={darkMode}>{info.clientAddress?.street}</InfoText>
                      <InfoText darkMode={darkMode}>{info.clientAddress?.city}</InfoText>
                      <InfoText darkMode={darkMode}>{info.clientAddress?.country}</InfoText>
                      <InfoText darkMode={darkMode}>{info.clientAddress?.postCode}</InfoText>
                    </InfoAdress>
                  </InfoTitleWrap>
                </InfoLeftCont>
                <InfoTitleWrap>
                  <InfoText darkMode={darkMode}>Sent to</InfoText>
                  <InfoTitle darkMode={darkMode}>{info.clientEmail}</InfoTitle>
                </InfoTitleWrap>
              </InfoBottom>

              <ItemsComp info={info} />
              {delate && (
                <Delate onDelate={() => handleDelete(info.id)}
              onCancel={() => setDelate(false)}
              id={info.id}
              />
              )}
              {edit && (
  <EditInvoiceModal invoice={info} onClose={() => setEdit(false) } />
              )}
            
            </Fragment>
          ))}
        </InfoCont>
      </ReciptCont>
    </Recipt>
    
    </>
  );
}

export default SpecificInvoices;

