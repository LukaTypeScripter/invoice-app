import  { Fragment, useContext } from "react";
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
import { ListContext } from "../contexts";
import { DotGreen, PaidText, StatusCont, StatusWrap } from "./styles/invoices";
import Buttons from "./Reusable/Button";
import ItemsComp from "./Items";
function SpecificInvoices() {
  const navigate = useNavigate();
  const { data } = useContext(ListContext);
  const { id } = useParams();
  const specificInvoices = data.filter((invoice) => invoice.id === id);
  console.log(specificInvoices);
  if (specificInvoices.length === 0) {
    return <div>No specific invoices found.</div>; 
  }
  return (
    <Recipt>
      <ReciptCont>
        <BackCont onClick={() => navigate("/")}>
          <BackIcon src={arrowLeft} />
          <GoBackTExt>Go Back</GoBackTExt>
        </BackCont>
        <StatusBar>
          {specificInvoices.map((invoice) => (
            <Fragment key={invoice.id}>
              <StatusCont>
                <StatusBarLabel>Status</StatusBarLabel>
                <StatusWrap status={invoice.status}>
                  <DotGreen status={invoice.status} />
                  <PaidText status={invoice.status}>{invoice.status}</PaidText>
                </StatusWrap>
              </StatusCont>
              <StatusBarBtnCont>
                <Buttons
                  text={"Edit"}
                  width={73}
                  height={48}
                  bgColor={"#f9fafe"}
                  color={"#7e88c3"}
                />
                <Buttons
                  text={"Delate"}
                  width={89}
                  height={48}
                  bgColor={"#ec5757"}
                  color={"#fff"}
                />
                <Buttons
                  text={"Mark as Read"}
                  width={131}
                  height={48}
                  bgColor={"#7c5dfa"}
                  color={"#fff"}
                />
              </StatusBarBtnCont>
            </Fragment>
          ))}
        </StatusBar>
        <InfoCont>
          {specificInvoices.map((info) => (
            <Fragment key={info.id}>
              <InfoTop>
                <InfoTitleWrap>
                  <InfoTitle>{info.id}</InfoTitle>
                  <InfoText>{info.description}</InfoText>
                </InfoTitleWrap>
                <InfoAdress>
                  <InfoText>{info.clientAddress.street}</InfoText>
                  <InfoText>{info.clientAddress.city}</InfoText>
                  <InfoText>{info.clientAddress.postCode}</InfoText>
                  <InfoText>{info.clientAddress.country}</InfoText>
                </InfoAdress>
              </InfoTop>

              <InfoBottom>
                <InfoLeftCont>
                  <InfoPayvment>
                    <InfoTitleWrap>
                      <InfoText>Invoice Date</InfoText>
                      <InfoTitle>{info.createdAt}</InfoTitle>
                    </InfoTitleWrap>
                    <InfoTitleWrap>
                      <InfoText>Paymant Due</InfoText>
                      <InfoTitle>{info.paymentDue}</InfoTitle>
                    </InfoTitleWrap>
                  </InfoPayvment>
                  <InfoTitleWrap>
                    <InfoText>Bill To</InfoText>
                    <InfoTitle>{info.clientName}</InfoTitle>
                    <InfoAdress>
                      <InfoText>{info.clientAddress.street}</InfoText>
                      <InfoText>{info.clientAddress.city}</InfoText>
                      <InfoText>{info.clientAddress.country}</InfoText>
                      <InfoText>{info.clientAddress.postCode}</InfoText>
                    </InfoAdress>
                  </InfoTitleWrap>
                </InfoLeftCont>
                <InfoTitleWrap>
                  <InfoText>Sent to</InfoText>
                  <InfoTitle>{info.clientEmail}</InfoTitle>
                </InfoTitleWrap>
              </InfoBottom>

              <ItemsComp info={info} />
            </Fragment>
          ))}
        </InfoCont>
      </ReciptCont>
    </Recipt>
  );
}

export default SpecificInvoices;

