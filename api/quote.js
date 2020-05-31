const axios = require('axios');

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    axios.get('https://quotes.rest/qod?language=en')
        .then(json => {
            console.log(json.data)
            let quote_string = json.data.contents.quotes[0].quote
            res.status(200).send(`<h1>${quote_string}</h1>`)
        })
        .catch(e => console.log(e))
        .then(() => console.log('always run'));

    // res.status(200).json({ quote of the date: quote_string });

}