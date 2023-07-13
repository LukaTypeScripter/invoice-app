import {
  Items,
  ItemsTable,
  ItemsTableName,
  ItemsTableTitle,
  ItemsTableWrap,
  TotalCOnt,
  TotalLabel,
} from "./styles/specific";

import { ItemProps } from "./interfaces";
import { DarkModeContext } from "../contexts";
import { useContext } from "react";

function ItemsComp({ info }: ItemProps) {
    const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Items key={info.id} darkMode={darkMode}>
        <ItemsTable>
          <ItemsTableWrap>
            <ItemsTableTitle >Item Name</ItemsTableTitle>

            {info.items?.map((item) => (
              
                <ItemsTableName darkMode={darkMode} key={item.name}>{item.name}</ItemsTableName>
              
            ))}
          </ItemsTableWrap>
          <ItemsTableWrap>
            <ItemsTableTitle>QTI</ItemsTableTitle>
            {info.items?.map((item) => (
              
                <ItemsTableName darkMode={darkMode} key={item.quantity}>
                  {item.quantity}
                </ItemsTableName>
              
            ))}
          </ItemsTableWrap>
          <ItemsTableWrap>
            <ItemsTableTitle>Item price</ItemsTableTitle>
            {info.items?.map((item) => (
              
                <ItemsTableName darkMode={darkMode} key={item.price}>{item.price}</ItemsTableName>
              
            ))}
          </ItemsTableWrap>
          <ItemsTableWrap>
            <ItemsTableTitle>Item total</ItemsTableTitle>
            {info.items?.map((item) => (
              
                <ItemsTableName darkMode={darkMode} key={item.total}>{item.total}</ItemsTableName>
              
            ))}
          </ItemsTableWrap>
        </ItemsTable>
        <TotalCOnt darkMode={darkMode}>
          <TotalLabel>Amount Due</TotalLabel>
          <TotalLabel>
            ${" "}
            {info.items
              ?.reduce((total, item) => total + item.total, 0)
              .toFixed(2)}
          </TotalLabel>
        </TotalCOnt>
      </Items>
    </>
  );
}

export default ItemsComp;
