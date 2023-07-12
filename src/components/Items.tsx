
import { Items, ItemsTable, ItemsTableName, ItemsTableTitle, ItemsTableWrap, TotalCOnt, TotalLabel } from './styles/specific'

import { ItemProps } from './interfaces'

function ItemsComp({info}:ItemProps) {
  return (
    <>
    <Items key={info.id}>
    
    <ItemsTable>
    <ItemsTableWrap >
    
<ItemsTableTitle>Item Name</ItemsTableTitle>

    {info.items?.map(item =>(
        <>
<ItemsTableName key={item.name}>{item.name}</ItemsTableName>
        </>
))}
</ItemsTableWrap>
<ItemsTableWrap>
<ItemsTableTitle>QTI</ItemsTableTitle>
    {info.items?.map(item =>(
        <>
<ItemsTableName key={item.quantity}>{item.quantity}</ItemsTableName>
        </>
))}
</ItemsTableWrap>
<ItemsTableWrap>
<ItemsTableTitle>Item price</ItemsTableTitle>
    {info.items?.map(item =>(
        <>
<ItemsTableName key={item.price}>{item.price}</ItemsTableName>
        </>
))}
</ItemsTableWrap>
<ItemsTableWrap>
<ItemsTableTitle>Item total</ItemsTableTitle>
    {info.items?.map(item =>(
        <>
<ItemsTableName key={item.total}>{item.total}</ItemsTableName>
        </>
))}
</ItemsTableWrap>
</ItemsTable>
<TotalCOnt>
<TotalLabel>Amount Due</TotalLabel>
    <TotalLabel>$ {info.items?.reduce((total, item) => total + item.total, 0).toFixed(2)}</TotalLabel>
</TotalCOnt>
</Items>
    </>
  )
}

export default ItemsComp