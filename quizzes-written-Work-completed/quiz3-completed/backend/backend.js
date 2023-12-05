
const axios = require("axios");
const express = require("express");
// use this library for parsing HTTP body requests

var app = express(express.json); 
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("express server is running and listening");
}); 

// Returns  a  general  purpose  JSON  message  containing  items  like 
// (a)  company  name,  (b) address, (c) email, and (d) telephone number (this can be arbitrarily data). 
app.get('/twsi', async (request, response) => { // POST request.
    try {            
            const azureResponse = axios.get(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?` + request.headers, // Get details from here
                request.body, // Get json details
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en", // Only language and model-version will actually be used here.
                        "model-version": "latest",
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});

// Returns  a  general  purpose  JSON  message  containing  a  phrase  like 
// "TWSI  Computer Vision 1.0"
app.get('/twsi/cv', async (request, response) => { // POST request.
    try {
            const azureResponse = axios.get(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?` + request.headers,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en", // Only language and model-version will actually be used here.
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});

// Returns a general purpose JSON message containing a phrase like "TWSI Image 
// Detection" 
app.get('/twsi/cv/detect/', async (request, response) => { // POST request.
    try {         
            const azureResponse = axios.get(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?` + request.headers,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en", // Only language and model-version will actually be used here.
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});

// Processes  an  image  at  a  given  URL  string.  The  URL  string  must  be  passed  through  a 
// HTTP header attribute called 'url'. 
app.post('/twsi/cv/detect/url', async (request, response) => { // POST request.
    try {           
            const azureResponse = axios.post(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?`,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en",
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});

// Processes  an  image  at  a  given  URL  string.  The  URL  string  must  be  passed  through  a 
// HTTP header attribute called 'url'. 
app.post('/twsi/cv/detect/url/{features}', async (request, response) => { // POST request.
    try {            
            const azureResponse = axios.post(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?visualFeatures=Color`,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en",
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});

// Processes  an  image  at  a  given  URL  string.  The  URL  string  must  be  passed  through  a 
// HTTP header attribute called 'url'.
app.post('/twsi/cv/detect/url/features/{feature}', async (request, response) => { // POST request.
    try {
            const azureResponse = axios.post(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?visualFeatures=Color`,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en",
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});

// Processes  an  image  at  a  given  URL  string.  The  URL  string  must  be  passed  through  a 
// HTTP header attribute called 'url'.
app.post('/twsi/cv/detect/url/details', async (request, response) => { // POST request.
    try {
            const azureResponse = axios.post(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?visualFeatures=Color`,
                // IMAGE from frontend body bodyParser.raw,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en",
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});

// Processes  an  image  at  a  given  URL  string.  The  URL  string  must  be  passed  through  a 
// HTTP header attribute called 'url'.
app.post('/twsi/cv/detect/url/details/{detail}', async (request, response) => { // POST request.
    try {
            const azureResponse = axios.post(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?visualFeatures=Color`,
                // IMAGE from frontend body bodyParser.raw,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en",
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});
// Processes an image as binary file in the HTTP body using application/octet-stream. This 
// URL should be used with clients that have a form element to browse for a local file. Since 
// the  binary  data will  be  in  the  body,  pass the values  for  visualFeatures,  details, language 
// and model-version in the HTTP header instead. There are no restrictions on what values 
// to use for features (one, some or all), and language.  
// In Thunder Client, you can test for binary file upload in the HTTP body using the Binary 
// option as shown below.  
app.post('/twsi/cv/detect/stream', async (request, response) => { // POST request.
    try {
            const azureResponse = axios.post(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?visualFeatures=Color`,
                // IMAGE from frontend body bodyParser.raw,
                request.body,
                {
                    params: {
                        "visualFeatures": "Categories,Color,description,Faces,Objects,Tags",
                        "details": "Landmarks",
                        "language": "en",
                        "model-version": "latest",
            
                    },
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': "2331bb53cf474edf8b956d2192c2b2d0",
                    },
                }
            );
            response.json(azureResponse.data)
    } catch (error) {
        console.log(error);
    }
});