import React, {Component}  from 'react';
import './App.css';

import stormy from './img/stormy.jpg'
import sunny from './img/sunny.jpg'
import cloudy from './img/cloudy.jpg'
import stormyy from './img/stormyy.jpg'
import one from './img/1.jpg'
import two from './img/2.jpg'
import three from './img/3.jpg'
import four from './img/4.jpg'
import five from './img/5.jpg'
import six from './img/6.jpg'
import seven from './img/7.jpg'
import eight from './img/8.jpg'



import Background from './Components/Background'
import SearchBar from './Components/SearchBar';


//api key: '92853ff15814db6aa2d9ee90ec82a19d'
const key = '92853ff15814db6aa2d9ee90ec82a19d';


export default class App extends Component {
  constructor(){
    super();
 
    this.state={
      bgStyle: {
        backgroundImage:`url(${sunny})` ,
        height: '150vh',
        width: '100%',
        backgroundSize: 'cover'
      },
      city: undefined,
      humidity: undefined,
      feelsLike: undefined,
      wind: undefined,
      temp: undefined,
      mainClouds: undefined,
      error: false,
    };
  


}
centigrados(temp){
  let celk = Math.floor(temp -273.15);
  return celk;
}



  getClima = async(e) =>{
  
      e.preventDefault();
      const place = e.target.elements.city.value;


      if(place){
        const apiClima = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`);
        const response = await apiClima.json();
    
        this.setState({
          city: `${response.name}`,
          humidity: response.main.humidity,
          feelsLike: this.centigrados(response.main.feels_like),
          wind: response.wind.speed,
          temp: this.centigrados(response.main.temp),
          mainClouds: response.weather[0].main
        })
        

      }else{
        this.setState({error: true})
      }

 
  }



  setearBg = (e) =>{
    e.preventDefault();
    const myBg = [stormy, cloudy, stormyy, sunny, one, two ,three,four,five,six,seven,eight];
    const randomBg = Math.floor(Math.random() * myBg.length);
    const defaultBg = myBg[randomBg];

    this.setState({
      bgStyle: {
        backgroundColor: 'black',
        backgroundImage: `url(${defaultBg})`,
        height: "120vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    })

  }



  



  render() {
    return (
      <div>
          <SearchBar getCity={this.getClima} />
          <Background 
          setearBg={this.setearBg}
          bgStyle={this.state.bgStyle}
          stormyy={this.state.stormyy}
          city={this.state.city}
          humidity={this.state.humidity}
          feelsLike={this.state.feelsLike}
          wind={this.state.wind}
          temp={this.state.temp}
          mainClouds={this.state.mainClouds}
          />
      </div>
    )
  }
}
