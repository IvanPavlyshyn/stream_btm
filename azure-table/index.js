const azure = require('azure-storage'),
    uuid = require('uuid/v4'),
    entGen = azure.TableUtilities.entityGenerator;

var tableSvc = null;



exports.createTableSvc = () => {
    tableSvc = azure.createTableService('eventdatastorage', 'GAZWNYobGQH/3bwk+YuSHU8VWaZXxeP9DmUFeUuo7/E98/MqID/aPptN/23DIqRQitgqLo3z+bXJXL9U5jscDw==', 'https://eventdatastorage.table.core.windows.net');
};

exports.insertEntities = (eventsArray) => {
    eventsArray.forEach(event => {    
       
        
        event.PartitionKey = entGen.String(event.timestamp.slice(14, 16));
        event.RowKey = entGen.String(event.trdMatchID);

        delete event.foreignNotional;
        delete event.grossValue;
        delete event.homeNotional;
        delete event.trdMatchID;
        delete event.tickDirection;
        event.ordertime = event.timestamp;
        delete event.timestamp;       
        counter++;
        //console.log(event.PartitionKey);
        console.log(event);      
        /*
        tableSvc.insertEntity('bitmex', event, function (error, result, response) {
            if (error) console.log(error);
        }); */
    });
};




