const http = require('http');
const express = require('express');
const app = express();

// Express에서 몽고디비 사용-몽고디비 모듈 사용
const MongoClient = require('mongodb').MongoClient;
// 데이터베이스 객체를 위한 변수 선언
let db;
//데이터베이스에 연결
function connectDB() {
    // 데이터베이스 연결 정보
    var databaseUrl = 'mongodb://127.0.0.1:27017';
    // 데이터베이스 연결
    MongoClient.connect(databaseUrl,{useUnifiedTopology: true}, function(err, database) {
            if (err)  { throw err; }
            console.log('데이터베이스에 연결되었습니다. : ' + databaseUrl);
            // database 변수에 할당할때
            // 몽고디비3 이상에서는 db명을 지정해 주어야 한다.
             db = database.db('vehicle');
    });
}

var authUser = function(database, callback) {
    var car = database.collection('car');   
    car.find({"name": "BMW"}).toArray(function(err, docs){
        console.log(docs);
    });
}


app.set('port', 3001);
app.set('views', __dirname + "/views");
app.set('view engine', "ejs");

app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.send({user:'Kim', message:'Hello World!'});
})

app.get("/car/list", (req,res) =>{
    if(db){
        db.collection('car').find({}).toArray(function (findErr, result) { 
            if (findErr) throw findErr; 
            // console.log(result);
            req.app.render("car/list",{carList:result},(err,html) =>{
                if(err) throw err;
                res.end(html);
            })
        }); 
    }
    
})

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('Run Server at http:/localhost:'+app.get('port'));
    connectDB(); // 몽고DB 연결 함수 호출
});