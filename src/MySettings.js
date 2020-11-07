import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Col from "react-bootstrap/Col";

export default function MySettings(props) {
  return (
    <Form style={{ width: `${props.widthOfContainer}vw` }}>
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
    </Form>
  );
}
