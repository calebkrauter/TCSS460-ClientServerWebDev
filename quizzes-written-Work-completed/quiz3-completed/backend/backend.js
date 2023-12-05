
const axios = require("axios");
const express = require("express");
// use this library for parsing HTTP body requests

var app = express(express.json); 
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("express server is running and listening");
}); 


app.post('/twsi/cv/detect/url', async (request, response) => { // POST request.
    try {
            const visualFeatures = request.headers.Color;
            
            const azureResponse = axios.post(
                `https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze?visualFeatures=Color`,
                // IMAGE from frontend body bodyParser.raw,
                request.body,
                {
                    params: {
                    "visualFeatures": "Color",
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

