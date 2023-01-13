var express = require('express');
var router = express.Router();
const api_helper = require('./thirdparty_api')
const config = require('./config');

router.get('/coins/markets', function (req, res) {
  let page = req.query.page || 1;
  let per_page = req.query.per_page || 100;
  let url = config.coingecko.api_url + `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=false`;

  api_helper.REMOTE_API_call(url)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      console.log("error: ", error);
      res.send(error);
    })
})


router.get('/count', function (req, res) {
  let url = config.coingecko.api_url + '/global';

  api_helper.REMOTE_API_call(url)
    .then(response => {
      res.json({'count': response.data.active_cryptocurrencies});
    })
    .catch(error => {
      console.log("error: ", error);
      res.send(error);
    })
})


router.get('/coin/:id', function (req, res) {
  let id = req.params['id'];
  let url = config.coingecko.api_url + '/coins/' + id;

  api_helper.REMOTE_API_call(url)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      console.log("error: ", error);
      res.send(error);
    })
})

router.get('/coin/:id/chart/:days?', function (req, res) {
  let id = req.params['id'];
  let days = req.params['days'] || 'max';
  let url = config.coingecko.api_url + '/coins/' + id + '/market_chart?vs_currency=usd&days=' + days;

  console.log("chart url:", url)
  api_helper.REMOTE_API_call(url)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      console.log("error: ", error);
      res.send(error);
    })
})

router.get('/global', function (req, res) {
  let url = config.coingecko.api_url + '/global';

  api_helper.REMOTE_API_call(url)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log("error: ", error);
      res.send(error);
    })
})




module.exports = router;
