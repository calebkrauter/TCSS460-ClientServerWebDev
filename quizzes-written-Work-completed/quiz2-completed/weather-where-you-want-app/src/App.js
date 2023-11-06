import './App.css';
import { useState } from "react";

const api = {
  key: '27fa8a1504db1a135a4cd836a4375f76',
  base: 'https://api.openweathermap.org/data/2.5/',
};


function App() {
  // Use a hook to set and retrieve values.
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  // Handle the event when search button is pressed
  const searchPressed = () => {

    // Fetch data using api based on searched term and store the info in result
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Where you Are</h1>
        <div>
          <input type="text" placeholder="Input a city"
            onChange={(e) => setSearch(e.target.value)}/>

          <button onClick={searchPressed}>Search</button>
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div>
        ) : (
          ""
        )}
        

      </header>
    </div>
  );
}

export default App;
