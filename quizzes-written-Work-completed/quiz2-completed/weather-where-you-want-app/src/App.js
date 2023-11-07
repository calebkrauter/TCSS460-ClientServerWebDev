import './App.css';
import { useState } from "react";

// https://home.openweathermap.org/api_keys for weather api
// https://api.zippopotam.us/ for zip api
    const weatherApi = {
  key: '27fa8a1504db1a135a4cd836a4375f76',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const zipApi = {
  // key: '27fa8a1504db1a135a4cd836a4375f76',
  // Assumes US is the contry. It could be adapted for other countries based on input.
  base: 'http://api.zippopotam.us/',
};


function App() {
  // Use a hook to set and retrieve values.
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [country, setCountry] = useState("");
  // Handle the event when search button is pressed
  const zipSearched = () => {

    //https://api.zippopotam.us/ for zip api

    // Fetch data using api based on searched term and store the info in result
    fetch(`${zipApi.base}` + `${country}/` + `${zip}`)
    .then(res => res.json())
    .then(result => {
      setZip(result);
      // Use F12 to see data.
  
      console.log(result);
      console.log(`${zipApi.base}` + `${country}/` + `${zip}`);
      console.log(result.places[0]["place name"]);
      // setCity(result.places[0]["place name"]);
      citySearchedUsingZip(result.places[0]["place name"]);
    });
  }

  // This function takes in the city name and gets the weather details for it after a zip is input and searched.
  const citySearchedUsingZip = (city) => {
    // Fetch data using api based on searched term and store the info in result
    fetch(`${weatherApi.base}weather?q=${city}&units=metric&APPID=${weatherApi.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      // Use F12 to see data.
      console.log(result);
    });
  }

  // This function gets the weather data after a city is input and searched
  const citySearchedUsingName = () => {
    // Fetch data using api based on searched term and store the info in result
    
    fetch(`${weatherApi.base}weather?q=${city}&units=metric&APPID=${weatherApi.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      // Use F12 to see data.
      console.log(result);
    });
  }
  return (

    
    <div className="App">
      <header className="App-header">   
        <div  className="page-name-header">
          <h1>Weather Where you Are</h1>
          <p>Use WWYA to check the weather wherever you are and <br/>get a birds eye view of the surounding cities
            that you could find yourself in!
          </p>
        </div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" data-bs-toggle="tab" href="#zipcode" aria-selected="true" role="tab">Using Zip</a>
          </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#cityname" aria-selected="false" role="tab" tabIndex="-1">Using City</a>
            </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" href="#map" aria-selected="false" role="tab" tabIndex="-1">Map</a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade active show" id="zipcode" role="tabpanel">
          <input type="text" placeholder="Enter a Zip"
              onChange={(e) => setZip(e.target.value)}/>
            <input type="text" placeholder="Country code (e.g. US)"
              onChange={(e) => setCountry(e.target.value)}/>
            <button onClick={zipSearched}>Search</button>
          </div>
          <div className="tab-pane fade" id="cityname" role="tabpanel">
          <input type="text" placeholder="City Name"
              onChange={(e) => setCity(e.target.value)}/>
            <button onClick={citySearchedUsingName}>Search</button>
          </div>
          <div className="tab-pane fade" id="map" role="tabpanel">
            {/* Map goes here */}
          </div>
        
        {typeof weather.main != "undefined" ? (
          <div>
            {/* Access hooks to display info.*/}
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C | {weather.main.temp*1.8000 + 32}°F</p>
            {/* <p>{weather.weather[0].main}</p> */}
            <p>{weather.weather[0].description}</p>
          </div>
        ) : (
          "No City found at this zip code. Try another!"
        )}
      </div>
      </header>
    </div>
  );
}

export default App;
