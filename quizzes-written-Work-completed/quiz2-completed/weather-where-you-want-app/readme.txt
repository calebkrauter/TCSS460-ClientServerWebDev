Web service 1 -> Obtain city name and weather details from a zip code and country code. Utalizes the api from
Web service 2 to gain weather details based on the name obtained from the zip code on the first api.
----
I used this link https://api.zippopotam.us/, an actual key was not required in this case. The api allowed endpoints
consisting of country code and zip code. For example http://api.zippopotam.us/US/98042. The site has a list of country
codes that are avaliable and a range of zip codes that are avaliable. Any zip code associated directly with a city will
provide valid input otherwise you will be prompted to try another. Do not enter anything other than a zip code or country code
that are valid.

Examples to try:
zip: 98042 country code: US
zip: A0A country code: CA // Produces a prompt to try again. Do not press search again without inputing new values or refreshing page.
zip: 98038 country code: US


Web service 2 -> Obtain weather details based on input city name. The city name is also returned. Although the functionality of the first
two web services appear identical, web service two is independent functionally from web service 1 and web service 1 relies on web service 2 to
output weather details.

Examples to try:
Hong Kong
Boston
Seattle
Maple Valley
----
I used an api key from https://home.openweathermap.org/api_keys for implementing weather details like
city name, temperature and weather description. The base endpoint is "https://api.openweathermap.org/data/2.5/".

Web service 3 -> Obtain a randomly chosen link to a news article to keep the user busy during travel after checking the weather of their destination.
----
I used https://newsapi.org to implement an api that can share news articles. The base I have is https://newsapi.org/v2/everything?q=keyword&apiKey=
and the key I have is e6b1ead423fa4a2bb2fb8c4647bfee68.


NOTE:
For web services 1 and 2 do not search the same field without clearing it first. If you enter data in service 1 and search, and enter data in service 2 and search,
that is fine. Before doing any further searches empty the field in use before searching.

Primary Sources
// https://youtu.be/_Hhg7NmmN-c?si=mdX1y7in2ll-Wvbo tutorial for learning how to
// implement a weather api using react. This was a jumping off point which
// helped me move forward using react for the rest of the project. Great video!
// https://home.openweathermap.org/api_keys for weather api
// https://api.zippopotam.us/ for zip api
// https://newsapi.org for news articles api
// https://bootswatch.com/lux/ Used for UI design