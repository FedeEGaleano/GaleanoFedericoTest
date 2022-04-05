import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";


const useCounter = () =>{
    const [ counter, setCounter ] = useState(1);
    const increase = () => { setCounter(counter+1) };
    const decrement = () => { setCounter(counter-1) };
    const reset = () => { setCounter(0) };
    const stock = 15;

    return{
        counter, increase, decrement, reset, stock
    }
}

    export default function ItemCount(){
        const { counter, increase, decrement, reset, stock } = useCounter(0);
        

        return(
            <>
                <div className= "conatiner">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./remera1.png" />
                    <Card.Body>
                        <Card.Title>Remera "Social Distance"</Card.Title>
                        <Card.Text>
                            Stock: {stock}
                        </Card.Text>
                        <Button className='masmenos' variant="warning" size="lg" onClick = { counter>stock-1?null:(stock>0?increase:null) } > + </Button>
                            <a className='contador'> {counter} </a>
                        <Button className='masmenos' variant="warning" size="lg" onClick = { counter>0?decrement:null } > - </Button>
                        <br/>
                        <br/>
                        <Button variant="outline-warning" size="lg" onClick= { reset }> Agregar al carrito </Button>
                    </Card.Body>
                    </Card>
                </div>
                
            </>
        )
    }

