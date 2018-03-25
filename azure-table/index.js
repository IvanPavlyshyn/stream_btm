const azure = require('azure-storage'),
    uuid = require('uuid/v4'),
    entGen = azure.TableUtilities.entityGenerator;

var tableSvc = null;
var counter = 1;


exports.createTableSvc = () => {
    tableSvc = azure.createTableService('cryptotable', '0sHmxW9joeNf2laH436feepjrhCCHwtcmUzzVnDUX8wfFGZyznqBWGM5LQrdlTdowFEtmy5UplYHQ2ba4XaCaA==', 'https://cryptotable.table.cosmosdb.azure.com:443/');
};


exports.insertEntities = (eventsArray) => {
    eventsArray.forEach(event => {    
        if(counter > 5) counter = 1;
        
        event.PartitionKey = entGen.String(counter.toString());
        event.RowKey = entGen.String(event.trdMatchID);

        delete event.foreignNotional;
        delete event.grossValue;
        delete event.homeNotional;
        delete event.trdMatchID;
        delete event.tickDirection;
        event.ordertime = event.timestamp;
        delete event.timestamp;
        console.log(event);
        counter++;
        //console.log(event.PartitionKey);
        
        tableSvc.insertEntity('bitmex', event, function (error, result, response) {
            if (error) console.log(error);
        }); 
    });
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}