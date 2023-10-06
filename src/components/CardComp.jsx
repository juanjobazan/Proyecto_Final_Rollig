import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardComp = () => {
  return (
    <div>
        <Card className='mx-2 mt-2' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Queen</Card.Title>
        <Card.Text>
          1 cama de 1,40 x 2,00 metros
        </Card.Text>
        <Link to='/product' className='btn btn-outline-danger'>Reservar</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardComp