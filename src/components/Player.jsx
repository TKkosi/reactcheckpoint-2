import Card from 'react-bootstrap/Card';


const Player = ({name="yung", club, image ,number ,position, age ,country}) => {
    return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Team: {club} <br/>
            Number: {number} <br/>
            Position: {position} <br/>
            Age: {age} <br/>
            Country: {country}
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Player