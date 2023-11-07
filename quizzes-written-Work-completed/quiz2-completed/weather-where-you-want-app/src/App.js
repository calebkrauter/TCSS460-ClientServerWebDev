import './App.css';
import { useState } from "react";

// My primary sources
// https://youtu.be/_Hhg7NmmN-c?si=mdX1y7in2ll-Wvbo tutorial for learning how to
// implement a weather api using react. This was a jumping off point which
// helped me move forward using react for the rest of the project. Great video!
// https://home.openweathermap.org/api_keys for weather api
// https://api.zippopotam.us/ for zip api
// https://newsapi.org for news articles api
// https://bootswatch.com/lux/ Used for UI design

// This is a way to create an object which stores variables for acceess later.
const zipApi = {
  base: 'http://api.zippopotam.us/',
};

const weatherApi = {
  key: '27fa8a1504db1a135a4cd836a4375f76',
  base: 'https://api.openweathermap.org/data/2.5/',
};


const newsApi = {
  key: 'e6b1ead423fa4a2bb2fb8c4647bfee68',
  base: 'https://newsapi.org/v2/everything?q=keyword&apiKey=',
}

function App() {
  // Use a hooks to set and retrieve values through functional state.
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [country, setCountry] = useState("");
  const [news, setNews] = useState("");
  const [articlesLength, setLength] = useState({});


  // Handle the event when search button is pressed searching with zip.
  const zipSearched = () => {

    // Fetch data using api based on searched term and store the info in result
    fetch(`${zipApi.base}` + `${country}/` + `${zip}`)
      .then(res => res.json())
      .then(result => {
        setZip(result);
        // Use F12 to see data.
        // For debugging and testing.
        console.log(result);
        console.log(`${zipApi.base}` + `${country}/` + `${zip}`);
        console.log(result.places[0]["place name"]);

        // ->>>This is how we make two level composition<<<-
        // The zip api gets a city name using a zip code, the
        // retrieved city name is uesed to display the city name
        // and the weather info. The city name that is retrieved
        // from the zip api is passed in as a parameter to ensure
        // that two level composition is uesed when obtainig weather
        // details on the first tab on the site.
        citySearchedUsingZip(result.places[0]["place name"]);
      });
  }

  // This function takes in the city name and gets the weather details 
  // for it after a zip is input and searched. This is used
  // to ensure two level composition for our first tab on the site.
  const citySearchedUsingZip = (city) => {
    // Fetch data using api based on searched term and store the info in result.
    // ->>>This is the second layer of our composition for the first tab on the site. <<<-
    fetch(`${weatherApi.base}weather?q=${city}&units=metric&APPID=${weatherApi.key}`)
      .then(res => res.json()) // Convert the Json so that it is accessible.
      .then(result => { // Store the converted object in result.
        setWeather(result);
        // For debugging and testing.
        console.log(result);
      });
  }

  // This function gets the weather data after a city is input and searched.
  // This is single level composition. The second tab on the site corresposnds to this.
  // The city name search provides the same visual output as the first zip tab on the site
  // however this is independent of the zipcode city finder api.
  // The zip search tab is dependent on the api used in both this function and the
  // citySearchedUsingZip function.
  const citySearchedUsingName = () => {
    // Fetch data using api based on searched term and store the info in result.
    fetch(`${weatherApi.base}weather?q=${city}&units=metric&APPID=${weatherApi.key}`)
      .then(res => res.json()) // Convert the Json so that it is accessible.
      .then(result => { // Store the converted object in result.
        setWeather(result);
        // For debugging and testing.
        console.log(result);
      });
  }

  const newsSearched = () => {
    // Fetch the data using the endpoint and api key.
    fetch(`${newsApi.base}` + `${newsApi.key}`)
      .then(res => res.json()) // Convert the Json so that it is accessible.
      .then(result => { // Store the converted object in result.

        // Set the news object.
        setNews(result);
        // This is uesd for keeping a random value in bounds of the array.
        setLength(result.articles.length)
        // For debugging and testing.
        console.log(result);
      });

  }
  return (

    // Much of this HTML is modified code from Bootswatch
    <div className="App">
      <header className="App-header">
        <div className="page-name-header">
          <h1>Weather you are here or there</h1>
          <p>Whether you are travling here or there,<br/>
            you need to know what you're up against and,<br/>
            if it's raining you might get bored.<br/>
            We've got plenty of weather reports and <br/>
            news articles so stay dry and have a good time.
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
            <a className="nav-link" data-bs-toggle="tab" href="#map" aria-selected="false" role="tab" tabIndex="-1">News Readings</a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade active show" id="zipcode" role="tabpanel">
            <input type="text" placeholder="Enter a Zip"
              onChange={(e) => setZip(e.target.value)} />
            <input type="text" placeholder="Country code (e.g. US)"
              onChange={(e) => setCountry(e.target.value)} />
            <button onClick={zipSearched}>Search</button>
          </div>
          <div className="tab-pane fade" id="cityname" role="tabpanel">
            <input type="text" placeholder="City Name"
              onChange={(e) => setCity(e.target.value)} />
            <button onClick={citySearchedUsingName}>Search</button>
          </div>
          <div className="tab-pane fade" id="map" role="tabpanel">
            {/* Random news article */}
            <button onClick={newsSearched}>Find some drama...</button>
            {/* From Google's map maker */}

            <p>Here's some news! Press the button to find another article...</p>

            {typeof news.articles != "undefined" ? (
              <div>
                <p>{news.articles[Math.floor(Math.random() * (articlesLength))].url}</p>
              </div>
            ) : (
              "No article"
            )}
          </div>
          
          {/* If the object is undefined then don't display city info that DNE.*/}
          {typeof weather.main != "undefined" ? (
            <div>
              {/* Access hooks to display info.*/}
              <p>{weather.name}</p>
              <p>{weather.main.temp}°C | {weather.main.temp * 1.8000 + 32}°F</p>
              {/* <p>{weather.weather[0].main}</p> */}
              <p>{weather.weather[0].description}</p>
            </div>
          ) : (
            "No City Here"
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
