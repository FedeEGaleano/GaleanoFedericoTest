import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';


function ItemCount( {stock} ) {
    const [count, setCount] =useState(0);

    function adding (){
        if(count < stock){
        setCount(count + 1)}
    }
    function subs (){
        if(count > 0){
        setCount(count - 1)}
    }
    function onAdd (){
        
        alert('Agregaste' + ' ' + count + ' ' + 'productos al carrito');
    }

    return (
    <Container>
        <div className='botonesContador a'>
        <Button className='masmenos' onClick={adding} variant="warning" size="lg" > + </Button>
        <a className='contador'> {count} </a>
        <Button className='masmenos' onClick={subs} variant="warning" size="lg" > - </Button>
        </div>
        
        <br/>
        <Button onClick={onAdd} variant="outline-warning" size="lg" > Agregar al carrito </Button>
        
    </Container>
    );
};

export default ItemCount;