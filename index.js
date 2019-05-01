const express = require('express')
const helmet = require('helmet')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

var data = "loading...";
axios.get({ url: 'https://www.globo.com' })
.then(response => {
  data = cheerio.load(response.data)('h1').text();
})
.catch(error => {
  data = error;
  console.log('err:' + error);
});

// add some security-related headers to the response
app.use(helmet())

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`${data}`)
})

module.exports = app
