// code that fetches data from a REST API and returns it as a promise

const axios = require('axios');

axios.get('https://api.example.com/data')
    .then(response => {
        // handle success
        console.log(response.data);
    })
    .catch(error => {
        // handle error
        console.log(error);
    })
    .then(() => {
        // always executed
    });

