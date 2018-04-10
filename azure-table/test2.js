var azure = require('azure-storage');
var entGen = azure.TableUtilities.entityGenerator;

var tableService = azure.createTableService('eventdatastorage', 'GAZWNYobGQH/3bwk+YuSHU8VWaZXxeP9DmUFeUuo7/E98/MqID/aPptN/23DIqRQitgqLo3z+bXJXL9U5jscDw==', 'https://eventdatastorage.table.core.windows.net');

var counter = 0;

var test = {
  "test": "event",
  PartitionKey: entGen.String(counter.toString()),
  RowKey: entGen.String("event.trdMatchID")
}

tableService.insertEntity('bitmex', test, function (error, result, response) {
  if (error) console.log(error);
  console.log(result);
});

setTimeout(() => {
  console.log('done')
}, 10000);