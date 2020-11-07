import Card from "react-bootstrap/Card"
export default function Country(props) {
    return (
      <Card>
        <Card.Img variant="top" src={props.country.flag} />
        <Card.Body>
          <Card.Title>{props.country.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <p>{props.country.name}</p>
      </Card>
    );
}