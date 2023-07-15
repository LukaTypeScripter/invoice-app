import styled from "styled-components";

export const Recipt = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 72px;
  position: relative;
`;

export const ReciptCont = styled(Recipt)`
  flex-direction: column;
  gap: 32px;
  max-width: 730px;
  @media screen and (max-width: 768px) {
    max-width: 400px;
    gap:16px;
  }
`;

export const BackCont = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
`;
export const BackIcon = styled.img`
  height: 7px;
  width: 7px;
`;

export const GoBackTExt = styled.p<{darkMode:boolean}>`
  color: ${props => props.darkMode ? "white" : "#0c0e16"};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 15px;
  margin: 0;
`;
export const StatusBar = styled.div<{darkMode:boolean}>`
  align-items: center;
  background: ${props => props.darkMode ? "#1E2139":"white"};
  border-radius: 8px;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.1);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  width: 100%;
 
`;

export const StatusBarLabel = styled.p`
  color: #888eb0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.25px;
  line-height: 15px;
  margin: 0;
`;
export const StatusBarBtnCont = styled.div<{darkMode:boolean}>`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    background: ${props => props.darkMode ? "#1E2139":"white"};
    bottom: 0;
    box-shadow: 0 10px 10px -10px rgba(72,84,159,.1);
    box-sizing: border-box;
    left: 0;
    padding: 24px;
    position: absolute;
    right: 0;
    width: 100%;
  }
`;
export const DefaultInfo = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
`;
export const InfoCont = styled(DefaultInfo)<{darkMode:boolean}>`
  background-color: ${props => props.darkMode ? "#1E2139" : " white"};
  border-radius: 8px;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.1);
  box-sizing: border-box;
  flex-direction: column;
  gap: 42px;
  justify-content: center;
  padding: 32px;
  @media screen and (max-width: 768px) {
    margin-bottom: 78px;
    padding: 24px;
  }
`;

export const InfoTop = styled(DefaultInfo)`
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }
`;
export const InfoBottom = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 98px;
  justify-content: flex-start;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 36px;
  }
`;
export const InfoLeftCont = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  gap: 98px;
`;
export const InfoPayvment = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-direction: column;
`;
export const InfoTitleWrap = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
export const InfoText = styled.div<{darkMode:boolean}>`
  color: ${props => props.darkMode ? "#DFE3FA" : "#888eb0"};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.25px;
  line-height: 15px;
  max-width: 120px;
`;
export const InfoTitle = styled.p<{darkMode:boolean}>`
  color: ${props => props.darkMode ? "white" : "#0c0e16"};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.3125px;
  line-height: 20px;
`;
export const InfoAdress = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const Items = styled.div<{darkMode:boolean}>`
  align-items: center;
  display: flex;
  width: 100%;
  background: ${props => props.darkMode ? "#252945" : "#f9fafe"};
 border-radius: 8px 8px 0 0;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 64px;
    padding: 32px;
    position: relative;
    @media screen and (max-width: 768px) {
      margin-bottom: 78px;
    padding: 24px;
    }
`;
export const ItemsTable = styled.ul`
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  display: flex;
  width: 100%;
 

`;
export const ItemsTableWrap = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  position: relative;
  &:first-child {
    align-items: flex-start;
  }
`;

export const ItemsTableTitle = styled.p`
  color: #888eb0;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.229167px;
  line-height: 18px;
`;
export const ItemsTableName = styled.p<{darkMode:boolean}>`
  color:  ${props => props.darkMode ? "white" : "#0c0e16"};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 15px;
`;

export const TotalCOnt = styled.div<{darkMode:boolean}>`
  align-items: center;
  background: ${props => props.darkMode ? "#0C0E16" : "#373b53"};
  border-radius: 0 0 8px 8px;
  bottom: -60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 24px;
  position: absolute;
  right: 0;
  width: 100%;
`;

export const TotalLabel = styled.div`
  color: #fff;
  font-style: normal;
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.229167px;
  line-height: 18px;
`;
export const ItemTOtal = styled.p`
font-size: 24px;
    font-weight: 700;
    letter-spacing: -.5px;
    line-height: 32px;
    text-align: right;
    color: #fff;
    font-style: normal;
    margin: 0;
`