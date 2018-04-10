var azure = require('azure-storage');


var tableService = azure.createTableService('eventdatastorage', 'GAZWNYobGQH/3bwk+YuSHU8VWaZXxeP9DmUFeUuo7/E98/MqID/aPptN/23DIqRQitgqLo3z+bXJXL9U5jscDw==', 'https://eventdatastorage.table.core.windows.net');
var query = new azure.TableQuery()
  .top(5);  
 
tableService.queryEntities('bitmex', query, null, function(error, result, response) {
  if (!error) {
    // result.entries contains entities matching the query
    console.log(result);
  } else console.log(error);
});

setTimeout(() => {
    console.log('done')
}, 51000);