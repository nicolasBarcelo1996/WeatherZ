import React from 'react'
import './All.css'
import { WiCloud } from 'weather-icons-react';
import { WiWindy } from 'weather-icons-react';
import { WiThermometer } from 'weather-icons-react';
import { WiCelsius } from 'weather-icons-react';
import { WiHumidity } from 'weather-icons-react';



function WeatherMain({ humidity, feelsLike, mainClouds,temp, wind}) {

    return (
        <div>
            {temp ? <div className="weatherContainer">
                <ul   className="weatherList">
            {temp && feelsLike ? <li><WiThermometer size={35} color='#f5f5f5' /> {temp}&deg; <span>  <p><WiCelsius size={35} color='#f5f5f5' />  {feelsLike}&deg; </p></span> </li> : null }
            {wind ? <li><WiWindy size={35} color='#f5f5f5' />Wind <p>{wind}km/h</p> </li>: null }
            {mainClouds ? <li><WiCloud size={35} color='#f5f5f5' /> Sky <p> {mainClouds}</p></li>  : null}
            {humidity ? <li><WiHumidity size={35} color='#f5f5f5' /> Humidity <p>{humidity}%</p></li>  : null}
            </ul></div>: null  }
            
        </div>
    )
}

export default WeatherMain
