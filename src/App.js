import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import CountryList from "./CountryList";
import MyNavBar from "./MyNavBar";
import MySettings from "./MySettings";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState([]);
  // const [error, setError] = useState(false);
  const [nbCountries, setNbCountries] = useState(3);
  const [widthOfContainer, setWidthOfContainer] = useState(55);

  // const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!countries.length) {
      const fetchCountries = async () => {
        let result = await axios
          .get("https://restcountries.eu/rest/v2/all")
        result.data.forEach((elem) => {
          if (!elem.borders.length) {
            elem.borders[0] = "Inexistantes";
          } else {
            elem.borders.forEach((b, id) => {
              let paysCorrespondant = result.data.filter(
                (pays) => b === pays["alpha3Code"]
              );
              if (
                paysCorrespondant.length &&
                paysCorrespondant.length === 1
              ) {
                elem.borders[id] = paysCorrespondant[0].name;
              }
            });
          }
        });
        setCountries(result.data);
        setCountriesToDisplay(result.data);
      }
      fetchCountries()
    }
  }, [countries])

  function filterChange(e) {
    setCountriesToDisplay(countries.filter(elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  function filterContinentChange(continent) {
    console.log(continent)
    if (continent.target) {
      setCountriesToDisplay(
        countries.filter((elem) =>
          elem.region.toLowerCase().includes(continent.target.value.toLowerCase())
        )
      )
    } else {
      setCountriesToDisplay(countries.filter(elem => elem.region.toLowerCase().includes(continent.toLowerCase())))
    }
  }

  function filterSubContinentChange(sub) {
    setCountriesToDisplay(countries.filter(elem => elem.subregion.toLowerCase().includes(sub.toLowerCase())))
  }
  function changeRange(range) {
    setNbCountries(range.target.value)
  }

  function changeRangeWidth(range) {
    setWidthOfContainer(range.target.value)
  }

  function changeSelect(elem) {
    console.log(elem.target.value)
    switch (elem.target.value) {
      case "alphabeticalAsc":
        console.log("Ici");
        setCountriesToDisplay(
          [...countries].sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          )
        );
        break;
      case "alphabeticalDesc":
        setCountriesToDisplay(
          [...countries].sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
          )
        );
        break;
      case "populationAsc":
        setCountriesToDisplay(
          [...countries].sort((a, b) => a.population - b.population)
        );
        break;
      case "populationDesc":
        setCountriesToDisplay(
          [...countries].sort((a, b) => b.population - a.population)
        );
        break;
      case "territoryAsc":
        setCountriesToDisplay(
          [...countries].sort((a, b) => a.area - b.area)
        );
        break;
      case "territoryDesc":
        setCountriesToDisplay(
          [...countries].sort((a, b) => b.area - a.area)
        );
        break;
      default:
        break;
    }
  }


  // if (error) {
  //   return <div>Erreur</div>;
  // } else 
  if (countries === []) {
    return (
      <div className="App">
        <p>...Loading</p>
      </div>
    );
  } else {
    return (
      <>
        <MyNavBar
          filterChange={filterChange}
          countries={countries}
          filterContinent={filterContinentChange}
        />
        <div className="myContainer">
          <MySettings
            changeRange={changeRange}
            nbCountries={nbCountries}
            changeRangeWidth={changeRangeWidth}
            widthOfContainer={widthOfContainer}
            changeSelect={changeSelect}
            changeRegion={filterContinentChange}
            changeSubRegion={filterSubContinentChange}
            countries={countries}
          />
          <CountryList
            countries={countriesToDisplay}
            nbCountries={nbCountries}
            widthOfContainer={widthOfContainer}
          />
        </div>
      </>
    );
  }
}

export default App;
