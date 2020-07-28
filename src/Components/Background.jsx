import React from 'react'
import './All.css'
import WeatherMain from './WeatherMain'
import moment from "moment";
import WelcomeText from './WelcomeText';
import ChangeBackground from './ChangeBackground';



function Background({city,bgStyle,setearBg, humidity, feelsLike, mainClouds,temp, wind}) {



  let date = moment().format("DD-MMMM")
    return (
        <div style={bgStyle}>
          
        <div className="nameDate">
        {city ? <> <h5 className="date">{date} </h5> <p>{city} </p> </>  : 
        <div><WelcomeText />
        <ChangeBackground setearBg={setearBg}  />
        </div>}
        </div>
        <div>
        <WeatherMain
        humidity={humidity}
        feelsLike={feelsLike}
        mainClouds={mainClouds}
        temp={temp}
        wind={wind}
        />
        </div>

            
        </div>
    )
}


export default Background

