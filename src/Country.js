import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import NumberFormat from "react-number-format"

export default function Country(props) {
    return (
      <Card>
        <Card.Img variant="top" src={props.country.flag} />
        <Card.Body>
          <Card.Title>{props.country.name}</Card.Title>
          <Card.Text>
            <p>
              This country has{" "}
              <strong>
                <NumberFormat
                  value={props.country.population}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  displayType="text"
                />
                {/* {props.country.population} */}
              </strong>{" "}
              peoples living there.
            </p>
            <p>
              It's capital is <strong>{props.country.capital || "Unknown"}</strong> and it's
              located in <strong>{props.country.region}</strong>
            </p>
          </Card.Text>
          <Button
            variant="outline-secondary"
            block
            href={`https://fr.wikipedia.org/wiki/${props.country.translations.fr}`}
            target="_blank"
          >
            Visit
          </Button>
        </Card.Body>
      </Card>
    );
}