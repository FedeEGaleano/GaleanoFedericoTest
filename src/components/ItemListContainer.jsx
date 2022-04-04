import React, { useState } from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer(){
    function onAdd(cuanto){
        alert(cuanto);
    }

    return(
        <>
        <br />
        <br />
        <ItemCount onAdd={onAdd}/>
        </>
    )
}