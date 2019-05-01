const express = require('express')
const helmet = require('helmet')
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()

var data = "loading...";
console.log(data);

superagent
.get('https://www.globo.com')
.then(response => {
  data = cheerio.load(response.text)('h1').text();
})
.catch(error => {
  data = error;
});

// add some security-related headers to the response
app.use(helmet())

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.set('Cache-Control', 's-maxage=0, max-age=0')
    res.status(200).send(`${data}`)
})

module.exports = app
