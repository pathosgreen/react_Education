var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) { 
    if (err) throw err; 
    var db = client.db('vehicle'); 
    db.collection('car').find({}).toArray(function (findErr, result) { 
        if (findErr) throw findErr; 
        console.log(result); 
        client.close(); 
    }); 
});