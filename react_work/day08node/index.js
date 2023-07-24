const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.end("<h1>Hello World!</h1>");
});

app.get("/main", (req, res)=>{
    var user = req.query.user;
    var msg = req.query.msg;
    res.end("<h1>Main Page : "+msg+","+user+" </h1>");
});
app.listen(3001,()=>{
    console.log('3001 포트로 서버 실행중')
});