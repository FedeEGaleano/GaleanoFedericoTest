import React, { useState } from 'react'
import { Container } from 'react-bootstrap';


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
        <button className='masmenos botonm' onClick={adding} variant="warning" size="lg" > + </button>
        <a className='contador'> {count} </a>
        <button className='masmenos botonm' onClick={subs} variant="warning" size="lg" > - </button>
        </div>
        
        <br/>
        <button onClick={onAdd} variant="outline-warning" size="lg" className='boton'> Agregar al carrito </button>
        
    </Container>
    );
};

export default ItemCount;