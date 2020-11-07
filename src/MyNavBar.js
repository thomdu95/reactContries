import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useEffect, useState } from "react"

export default function MyNavBar(props) {
    const [continents, setContinents] = useState([])

    useEffect(() => {
        props.countries.forEach(elem => {
            if (!continents.includes(elem.region)) {
                console.log("Je passe dans le if");
                setContinents([...continents, elem.region])
            }
        })
        console.log(continents)
    })

    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Countries</Navbar.Brand>
        <Nav className="mr-auto">
            {continents.length && continents.map(elem => {
                return <Nav.Link key={elem} onClick={props.filterContinent.bind(this, elem)}>{elem}</Nav.Link>;
            })}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Filter" className="mr-sm-2" onChange={props.filterChange.bind(this)} />
          {/* <Button variant="outline-primary">Filter</Button> */}
        </Form>
      </Navbar>
    );
}