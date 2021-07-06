import React from 'react';

const Card = (props) => {
    // const country = props.country; ou alors en destructuring ->
    const { country } = props;

    const numberFormat = (x) => {
        //regex, tous les 3 caractère, tu me met "un espace vide"
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    } 

    return (
        
            <li className="card">
                <img src={country.flag} alt="flag" />
                <div className="data-container">
                    <ul>
                    <li>{country.name}</li>
                    <li>Capitale : {country.capital}</li>
                    <li>Popu : {numberFormat(country.population)}</li>
                    </ul>
                </div>
            </li>
        
    );
};

export default Card;