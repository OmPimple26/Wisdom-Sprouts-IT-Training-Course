import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardex({name,image}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} style={{height:'200px',objectFit:'cover'}} />
            <Card.Body>
                <Card.Title className='text-center'>{name}</Card.Title>

                <div className='d-flex justify-content-evenly'>
                    <Button variant="outline-info">Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default Cardex;