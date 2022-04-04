import React, {useState} from "react";
import ItemCount from "./ItemCount";

export default function Item({stockInitial}){
     
    const initial = 0;
    stockInitial = Math.trunc(stockInitial/15);

const [stock, stockMinus] = useState(stockInitial);

function onAdd(amount, resetCounter){
    stockMinus(stock-amount);
    resetCounter();
}


    return(
        <>
            <div >
                <ItemCount onAdd={onAdd} initial={initial} stock={stock}/>           
            </div>
            
        </>
    )
}