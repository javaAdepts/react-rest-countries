
import { useEffect } from "react"
import { countryName } from "../types"
import "./card.css"
import Display from "./Display"

const Card = ({country, onSelectCard, selected}:{country:countryName, onSelectCard:Function, selected:boolean})=>{

    const onSelect =()=>{
        onSelectCard(country.name.official);
    }


    return <div className={selected ? "card selected" : "card"} onClick={onSelect}>
      <div>
        <h5>Name</h5>
        <p> Official :{" "}{ country && country.name && <Display name={country.name.official} />} </p>
        <p> Common :{" "} <Display name={country?.name?.common} /> </p>
      </div>  
      <div>
      <h5>Native Name</h5>
      <p> Official : {" "}<Display name={country.name.nativeName?.eng?.official}/> </p>
      <p> Common : {" "}<Display name={country.name.nativeName?.eng?.common} /> </p>
     </div>   
    
    </div>
}

export default Card;