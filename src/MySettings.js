import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

export default function MySettings(props) {
    const [continents, setContinents] = useState([]);
    const [subContinents, setSubContinents] = useState([]);

    useEffect(() => {
    props.countries.forEach((elem) => {
        if (!continents.includes(elem.region)) {
        setContinents([...continents, elem.region]);
        }
        if (!subContinents.includes(elem.subregion)) {
            setSubContinents([...subContinents, elem.subregion]);
        }
    });
    });
  return (
    // <Form style={{ width: `${props.widthOfContainer}vw` }}>
    <Form style={{ width: "60vw", marginTop: "2vh" }}>
      <Form.Row>
        <Col>
          <Form.Group controlId="nbCountries">
            <Form.Label>Numbers of columns per rows</Form.Label>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom">
                  <strong>{props.nbCountries}</strong>
                </Tooltip>
              }
            >
              <Form.Control
                type="range"
                min={1}
                max={6}
                value={props.nbCountries}
                name="range"
                onChange={props.changeRange.bind(this)}
              />
            </OverlayTrigger>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="widthOfContainer">
            <Form.Label>Width of the container (in %)</Form.Label>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom">
                  <strong>{props.widthOfContainer}</strong>
                </Tooltip>
              }
            >
              <Form.Control
                type="range"
                min={30}
                max={100}
                value={props.widthOfContainer}
                name="rangeWidth"
                onChange={props.changeRangeWidth.bind(this)}
              />
            </OverlayTrigger>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group controlId="sortAlpha">
            <Form.Label>Sort Coutries By ...</Form.Label>
            <Form.Control as="select" onChange={props.changeSelect.bind(this)}>
              <option>alphabeticalAsc</option>
              <option>alphabeticalDesc</option>
              <option>populationAsc</option>
              <option>populationDesc</option>
              <option>territoryAsc</option>
              <option>territoryDesc</option>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="sortRegion">
            <Form.Label>Or By Region</Form.Label>
            <Form.Control as="select" onChange={props.changeRegion.bind(this)}>
              <option>Region</option>
              {continents.map((elem) => {
                return <option key={elem}>{elem}</option>;
              })}
            </Form.Control>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="sortSub">
            <Form.Label>Or By SubRegion</Form.Label>
            <Form.Control
              as="select"
              onChange={props.changeSubRegion.bind(this)}
            >
              <option>SubRegion</option>
              {subContinents.map((elem) => {
                return <option key={elem}>{elem}</option>;
              })}
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  );
}
