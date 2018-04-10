'use strict';

const express= require('express');
const server = express();
const BitMEXClient = require('bitmex-realtime-api');
// See 'options' reference below
const client = new BitMEXClient({
    testnet: true
});


server.get('/', (req, res) => {
    res.end('application runnin on port: ' + process.env.port);
});

server.get('/start', (req, res) => {
    client.addStream('XBTUSD', 'trade', function (data, symbol, tableName) {
        client._data = {};
    }); 
    res.end('started parsing data');
});

server.listen(process.env.port || 8000, () => {
    console.log('application started ' + new Date());
})

/*
setInterval(() => {
    //console.log(client._data);
}, 5000); */
/*
client.addStream('XBTUSD', 'quote', function (data, symbol, tableName) {
    if (!data.length) return;
    const quote = data[data.length - 1];  // the last data element is the newest quote
    // Do something with the quote (.bidPrice, .bidSize, .askPrice, .askSize)
    console.log(quote);
  });*/