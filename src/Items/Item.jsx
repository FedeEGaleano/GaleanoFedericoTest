import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

function Item({id, nombre, precio, image}) {
    return (
    <Card className='card' key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body >
            <Card.Title> {nombre} </Card.Title>
        <Card.Text>
            {precio}
        </Card.Text>
        <ItemCount stock={7} />
        </Card.Body>
    </Card>
    )
}

export default Item