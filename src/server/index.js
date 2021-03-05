// Setup empty JS object to act as endpoint for all routes
projectData = {};

const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const meaningCloud = require('meaning-cloud')
const FormData = require('form-data');
const fetch = require("node-fetch");

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// grab private api key from .env file
const meaning = new meaningCloud({
  key: process.env.API_KEY
});

console.log(`Your API key is ${process.env.API_KEY}`);

// GET route to load home page
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// POST route to mediate between MeaningCloud API and our site
app.post('/language', async function(req, res) {
  let data = req.body;

  const requestOptions = {
    method: 'POST',
  };

  const apiKey = process.env.API_KEY;
  const userInput = data.formText;
  console.log(userInput);

  const result = await fetch("https://api.meaningcloud.com/sentiment-2.1?key="+apiKey+"&of=json&txt="+userInput+"&lang=en", requestOptions)
  try {
    const response = await result.json();
    console.log(response);
    newEntry = {
        sentence: userInput,
        feeling: response.score_tag,
        confidence: response.confidence,
        irony: response.irony
    };
    projectData["entry"] = newEntry;
  }
  catch (error) {
    console.log("error", error);
  }
  console.log(projectData);
  res.send(projectData);
});

// GET route to send updated projectData object client-side and change the UI
app.get('/updatePage', function(req, res) {
  res.send(projectData);
  console.log(projectData);
})
