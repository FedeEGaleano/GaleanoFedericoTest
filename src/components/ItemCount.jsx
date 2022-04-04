import React, { useState } from "react";


const useCounter = () =>{
    const [ counter, setCounter ] = useState(0);
    const increase = () => { setCounter(counter+1) };
    const decrement = () => { setCounter(counter-1) };
    const reset = () => { setCounter(0) };
    const stock = () => { setCounter (15) }

    return{
        counter, increase, decrement, reset, stock
    }
}

    export default function ItemCount(){
        const { counter, increase, decrement, reset } = useCounter(0);

        return(
            <>
            <div className="container">
                <div>
                    <div>Stock: </div>
                    <br />
                    <button onClick = { increase }> + </button>
                    {counter}
                    <button onClick = { decrement }> - </button>
                </div>
                
                <br/>
                <button onClick = { reset }> Agregar al carrito </button>
            </div>
            </>
        )
    }

