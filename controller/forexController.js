const fetch = require('node-fetch');
const fs = require('fs');
const forex=require('../shineData/forex.json');
const keys = require('../config/keys');

exports.getForex = function (req, res, next) {
  const country = req.params.country;
  // console.log(country)
  // console.log(req.query.date)
  const url = `${keys.nrb_api}?_token=${keys.token}&page=1&per_page=20&from=${req.query.date}&to=${req.query.date}`
  if(new Date(forex.forexDate) < new Date(req.query.date) || !forex.forexDate || !forex.forexDate.length){
    // console.log('condition satisfied');
    function fetchRates(url){
      return fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        return data
      })
    }
    fetchRates(url)
    .then(data => {
      // console.log(data.data.payload)
      const items = data.data.payload[0]
      const forexData = {
        forexDate: items.date,
        rates: items.rates
      }
      // console.log(forexData);
      fs.writeFileSync(`./shineData/forex.json`, JSON.stringify(forexData));
      const result = forexData.rates.filter(e => {
        return e.currency.iso3.toLowerCase() == country.toLowerCase();
      })
      let returnData = renderForex(result, forexData.forexDate);
      // console.log(returnData)
      res.status(200).json(returnData);
    })
  }
  else{
    // console.log('condition not satisfied');
    const rates = forex.rates;
    // console.log(rates);
    const forexData = rates.filter(e => {
      return e.currency.iso3.toLowerCase() == country.toLowerCase();
    })
    let returnData = renderForex(forexData,forex.forexDate)
    res.status(200).json(returnData);
  }

  function renderForex(forexData, date){
    let forex = {
      type: 'forextable',
      title: `Exchange rate for the ${forexData[0].currency.name}`,
      country: forexData[0].currency.name,
      forexdate: date,
      data: [{
        unit: forexData[0].currency.unit,
        buying: forexData[0].buy,
        selling: forexData[0].sell,
      }]
    };
    return (forex);
  }
}