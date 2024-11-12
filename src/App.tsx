import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { countryName } from "./types";
import Card from "./components/Card";
import axios from "axios";
import FlagDisplay from "./components/FlagDisplay";

function App() {
  const [countriesData, setCountriesData] = useState<countryName[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [flagUrl, setFlagUrl] = useState<string>();

  // to get the Data from Rest API we will use two methods 1. using fetch and 2. using axios

  const getDataFromRestAPIUsingFetch = () => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data && data?.length > 0 && setCountriesData(data);
      });  
  };

  const getDataFromRestAPIForFlagUsingAxios =  async () =>{       
     const response = await axios.get("https://restcountries.com/v3.1/name/"+ selectedCountry);
     console.log(response);
     if(response.data[0].flags.png){
      setFlagUrl(response.data[0].flags.png);
     }
  }

  const selectCountry = (name:string)=>{    
    setSelectedCountry(name);
  }

  useEffect(() => {
    getDataFromRestAPIUsingFetch();
  }, []);

  useEffect(()=>{
   if(selectedCountry){
    getDataFromRestAPIForFlagUsingAxios();
   }
  },[selectedCountry])

  return (
    <div className="App">   
      <div style={{width:"100%", height:"300px", alignItems:"center", textAlign:"center"}}>
        <p>{selectedCountry}</p>
      {flagUrl &&  <FlagDisplay url={flagUrl} />}
      </div>

      {countriesData.length > 0 &&
        countriesData.map((country: countryName, index: number) => {
          return <Card key={index} onSelectCard={selectCountry} country={country} selected={selectedCountry === country.name.official}/>
        })}
    </div>
  );
}

export default App;
