
import Country from './Country'
import CardColumns from "react-bootstrap/CardColumns";


export default function CountryList(props) {
    return (
      <div className="myCountryList" style={{ width: `${props.widthOfContainer}vw` }}>
        <CardColumns style={{ columnCount: props.nbCountries }}>
          {props.countries.map((elem) => {
            return <Country country={elem} />;
          })}
        </CardColumns>
      </div>
    );

}