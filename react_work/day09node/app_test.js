const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3001;

// 정적 파일 제공 설정
app.use(express.static('public'));

// 요청 데이터 파싱 미들웨어 설정
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 라우트 설정 - GET 메소드 요청
// GET 방식으로 요청 - req.param.변수
// -------------------------------
// 일반적인 쿼리스트링 방식 : req.query.변수
// 쿼리스트링 : localhost:3001/hello?name=HONG&age=25
app.get('/hello', (req, res) => {
    var obj = {
        name: req.query.name,
        age : req.query.age
    }
    res.send(obj);
});
// Path param (우아한 URL) GET방식으로 요청 - req.param.변수
// GET방식에서 Path param (우아한 URL) : localhost:3001/hello/hong/25
// Express 서버에서 Path : localhost:3001/hello/:name/:age
app.get('/hello/:name/:age', (req, res) => {
    var obj = {
        name: req.params.name,
        age : req.params.age
    }
    res.send(obj);
});

// 라우트 설정 - POST 메소드 요청
// req.body.변수
// body를 사용하기 위해서 body/Parser 미들웨어 설정을 해야한다.
// bodyParser 모듈 설치 : npm install body-parser

app.post('/hello', (req, res)=>{
    var obj = {
        method: 'POST',
        name: req.body.name,
        age : req.body.age
    }
    res.send(obj);
});


// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});