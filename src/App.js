import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import CountryList from "./CountryList";
import MyNavBar from "./MyNavBar";
import MySettings from "./MySettings";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState([]);
  const [error, setError] = useState(false);
  const [nbCountries, setNbCountries] = useState(3);
  const [widthOfContainer, setWidthOfContainer] = useState(55);
  const [alphabeticalAsc, setAlphabeticalAsc] = useState(false);
  const [alphabeticalDesc, setAlphabeticalDesc] = useState(false);
  const [populationAsc, setPopulationAsc] = useState(false);
  const [populationDesc, setPopulationDesc] = useState(false); 
  const [territoryAsc, setTerritoryAsc] = useState(false);
  const [territoryDesc, setTerritoryDesc] = useState(false);  

  // const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      setCountries(response.data)
      setCountriesToDisplay(response.data);
    })
    .catch(error => {
      setError(true)
    })
  }, [])

  function filterChange(e) {
    setCountriesToDisplay(countries.filter(elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  function filterContinentChange(continent) {
    setCountriesToDisplay(countries.filter(elem => elem.region.toLowerCase().includes(continent.toLowerCase())))
  }

  function changeRange(range) {
    setNbCountries(range.target.value)
  }

  function changeRangeWidth(range) {
    setWidthOfContainer(range.target.value)
  }

  function changealphabeticalAsc(sorting) {
    setAlphabeticalAsc(sorting)
  }

  function changealphabeticalDesc(sorting) {
    setAlphabeticalDesc(sorting);
  }

  function changepopulationAsc(sorting) {
    console.log(sorting.target.checked)
    if (sorting.target.checked === true) {
      setCountriesToDisplay([...countries.sort((a, b) => {
        return a.population - b.population;
      })])
      setPopulationAsc(!sorting.target.checked);
    } else {
      setPopulationAsc(sorting.target.checked);
    }

  }

  function changepopulationDesc(sorting) {
    setPopulationDesc(sorting);
  }
  
  function changeterritoryAsc(sorting) {
    setTerritoryAsc(sorting);
  }

  function changeterritoryDesc(sorting) {
    setTerritoryDesc(sorting);
  }

  if (error) {
    return <div>Erreur</div>;
  } else if (countries === []) {
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
            changealphabeticalAsc={changealphabeticalAsc}
            alphabeticalAsc={alphabeticalAsc}
            changealphabeticalDesc={changealphabeticalDesc}
            alphabeticalDesc={alphabeticalDesc}
            changepopulationAsc={changepopulationAsc}
            populationAsc={populationAsc}
            changepopulationDesc={changepopulationDesc}
            populationDesc={populationDesc}
            changeterritoryAsc={changeterritoryAsc}
            territoryAsc={territoryAsc}
            changeterritoryDesc={changeterritoryDesc}
            territoryDesc={territoryDesc}
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
