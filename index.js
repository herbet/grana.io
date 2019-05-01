const express = require('express')
const helmet = require('helmet')
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()

var data = "loading...";
console.log(data);

// add some security-related headers to the response
app.use(helmet())

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.set('Cache-Control', 'no-cache')

    superagent
    .get('https://www.globo.com')
    .then(response => {
      data = cheerio.load(response.text)('h1').text();
      res.status(200).send(`${data}`)
    })
    .catch(error => {
      console.log('wtf2');
      data = error;
      res.status(200).send(`${data}`)
      console.log('err:' + error);
    });
})

module.exports = app
