const http = require('http');
const express = require('express');
const app = express();
// 파일 입출력
const fs = require('fs');
// 크롤링
const axios = require('axios');
const cheerio = require('cheerio');
// axios 한글 깨짐 해결 하는 모듈
const iconv = require('iconv-lite');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use('/download', express.static("download"))

const sleep = (ms) => {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

let imgList = [];

app.get('/axios_toon', (req, res) => {
    console.log("GET - /axios_toon")
    let getUrlVal = "https://comic.naver.com/webtoon";
    axios.get(getUrlVal, {responseType:"arraybuffer"}).then(async(response) => {
        // console.log(response.data); // 뭔가가 나오긴 했다.
        const htmlContent = response.data;
        let htmlCMD = iconv.decode(response.data, "UTF-8").toString();

        const $ = cheerio.load(htmlCMD);
        // #content > div.list_area.daily_all
        let webtoonData = $('div.list_area.daily_all > div > div > h4').text();
        // console.log(webtoonData.trim());        // 월요 웹툰화요 웹툰 ...
        // ,를 기준으로 자르면 될 것 같다.
        let webtoonDataSplit = webtoonData.split('웹툰');
        // console.log(webtoonDataSplit);           // ['월요 ', '화요 ', ...]
        // console.log(webtoonDataSplit[0]);
        for(var i=0;i<7;i++) {
            if(webtoonDataSplit[i] == '월요 ') {
                // #content > div.list_area.daily_all > div:nth-child(1) > div > ul > li:nth-child(1) > a
                // #content > div.list_area.daily_all > div:nth-child(1) > div > ul > li:nth-child(1) > div > a
                // let mondayWebtoon = $('#content > div.list_area.daily_all > div:nth-child(1) > div > ul > li:nth-child(2) > a').text();
                let MondayData = $('#content > div.list_area.daily_all > div:nth-child(1) > div > ul > li:nth-child(n+1) > div > a > img');
                // let mondayWebtoonReplace = mondayWebtoon.replace(/(\r\n|\n|\r|\t)/gm, "");       // 이건 웹툰 제목 뽑을려고 시도했던 것
                // console.log(MondayData);
                for(var j=0;j<MondayData.length;j++) {
                    let imgUrl = MondayData[j].attribs.src;
                    // console.log(imgUrl);     // 정상 추출 확인 완료
                    axios.get(imgUrl, {responseType: 'arraybuffer'}).then((imgRes) => {
                        // console.log(imgRes.data);        // 뭔가 버퍼가 주루룩 나온다.
                        fs.writeFile("./monday/" + j + ".jpg", imgRes.data, (err, data1) => {
                            console.log("다운로드 완료 " + j);
                        });
                    });
                    await sleep(1000);
                }
            } else if (webtoonDataSplit[i] == '화요 ') {
                let thuesdayData = $('#content > div.list_area.daily_all > div:nth-child(2) > div > ul > li:nth-child(n+1) > div > a > img');
                for(var j=0;j<thuesdayData.length;j++) {
                    let imgUrl = thuesdayData[j].attribs.src;
                    // console.log(imgUrl);     // 정상 추출 확인 완료
                    axios.get(imgUrl, {responseType: 'arraybuffer'}).then((imgRes) => {
                        // console.log(imgRes.data);        // 뭔가 버퍼가 주루룩 나온다.
                        fs.writeFile("./thuesday/" + j + ".jpg", imgRes.data, (err, data1) => {
                            console.log("다운로드 완료 " + j);
                        });
                    });
                    await sleep(1000);
                }
            } else if (webtoonDataSplit[i] == '수요 ') {
                let wednesdayData = $('#content > div.list_area.daily_all > div:nth-child(3) > div > ul > li:nth-child(n+1) > div > a > img');
                for(var j=0;j<wednesdayData.length;j++) {
                    let imgUrl = wednesdayData[j].attribs.src;
                    // console.log(imgUrl);     // 정상 추출 확인 완료
                    axios.get(imgUrl, {responseType: 'arraybuffer'}).then((imgRes) => {
                        // console.log(imgRes.data);        // 뭔가 버퍼가 주루룩 나온다.
                        fs.writeFile("./wednesday/" + j + ".jpg", imgRes.data, (err, data1) => {
                            console.log("다운로드 완료 " + j);
                        });
                    });
                    await sleep(1000);
                }
            } else if (webtoonDataSplit[i] == '목요 ') {
                let thursdayData = $('#content > div.list_area.daily_all > div:nth-child(4) > div > ul > li:nth-child(n+1) > div > a > img');
                for(var j=0;j<thursdayData.length;j++) {
                    let imgUrl = thursdayData[j].attribs.src;
                    // console.log(imgUrl);     // 정상 추출 확인 완료
                    axios.get(imgUrl, {responseType: 'arraybuffer'}).then((imgRes) => {
                        // console.log(imgRes.data);        // 뭔가 버퍼가 주루룩 나온다.
                        fs.writeFile("./thursday/" + j + ".jpg", imgRes.data, (err, data1) => {
                            console.log("다운로드 완료 " + j);
                        });
                    });
                    await sleep(1000);
                }
            } else if (webtoonDataSplit[i] == '금요 ') {
                let fridayData = $('#content > div.list_area.daily_all > div:nth-child(5) > div > ul > li:nth-child(n+1) > div > a > img');
                for(var j=0;j<fridayData.length;j++) {
                    let imgUrl = fridayData[j].attribs.src;
                    // console.log(imgUrl);     // 정상 추출 확인 완료
                    axios.get(imgUrl, {responseType: 'arraybuffer'}).then((imgRes) => {
                        // console.log(imgRes.data);        // 뭔가 버퍼가 주루룩 나온다.
                        fs.writeFile("./friday/" + j + ".jpg", imgRes.data, (err, data1) => {
                            console.log("다운로드 완료 " + j);
                        });
                    });
                    await sleep(1000);
                }
            } else if (webtoonDataSplit[i] == '토요 ') {
                let saturdayData = $('#content > div.list_area.daily_all > div:nth-child(6) > div > ul > li:nth-child(n+1) > div > a > img');
                for(var j=0;j<saturdayData.length;j++) {
                    let imgUrl = saturdayData[j].attribs.src;
                    // console.log(imgUrl);     // 정상 추출 확인 완료
                    axios.get(imgUrl, {responseType: 'arraybuffer'}).then((imgRes) => {
                        // console.log(imgRes.data);        // 뭔가 버퍼가 주루룩 나온다.
                        fs.writeFile("./saturday/" + j + ".jpg", imgRes.data, (err, data1) => {
                            console.log("다운로드 완료 " + j);
                        });
                    });
                    await sleep(1000);
                }
            } else if (webtoonDataSplit[i] == '일요 ') {
                let sundayData = $('#content > div.list_area.daily_all > div:nth-child(7) > div > ul > li:nth-child(n+1) > div > a > img');
                for(var j=0;j<sundayData.length;j++) {
                    let imgUrl = sundayData[j].attribs.src;
                    // console.log(imgUrl);     // 정상 추출 확인 완료
                    axios.get(imgUrl, {responseType: 'arraybuffer'}).then((imgRes) => {
                        // console.log(imgRes.data);        // 뭔가 버퍼가 주루룩 나온다.
                        fs.writeFile("./sunday/" + j + ".jpg", imgRes.data, (err, data1) => {
                            console.log("다운로드 완료 " + j);
                        });
                    });
                    await sleep(1000);
                }
            }
        }
    });
    res.end();
})

app.get('/axios_test2', async (req, res) => {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    imgList = [];
    for(var j=100; j<106; j++) {
        let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=" + j;
        await axios.get(getUrlVal, {responseType:"arraybuffer"}).then(async(response) => {
            const htmlContent = response.data;
            let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
            // cheerio를 이용한 DOM셀렉터
            const $ = cheerio.load(htmlCMD);
            //#main_content > div > div._persist > div:nth-child(1) > div:nth-child(4) > div.cluster_body > ul > li:nth-child(1) > div.cluster_thumb > div > a > img
            // #main_content > div > div._persist > div.section_headline > ul > li:nth-child(1) > div.sh_thumb > div > a > img
            //#main_content > div > div._persist > div.section_headline > ul > li:nth-child(1) > div.sh_thumb > div > a > img
            let imgData = $('div.section_headline div.sh_thumb > div > a > img');
            for(var i=0, cnt=0; i<imgData.length; i++) {
                if(imgData[i]) {
                    let imgUrl = imgData[i].attribs.src
                    //console.log(imgUrl.split('?')[0]);
                    let imgDataUrl = imgUrl.split('?')[0];
                    //console.log(imgDataUrl);
                    axios.get(imgDataUrl, {responseType: 'arraybuffer'}).then( (imgRes)=>{
                        //console.log(imgRes.data);
                        imgList.push("/download/"+j+"_"+cnt+".jpg");
                        fs.writeFile("./download/"+j+"_"+cnt+".jpg", imgRes.data, (err, data1)=>{
                            console.log(">>> 다운로드 완료 " + cnt++);
                        });
                    });
                    await sleep(100);
                }else {
                    break;
                }
                console.log("크롤링 중!", i);
            } // end of for
            console.log("크롤링 완료!");
            //res.end("<h1>Finished</h1>");
        });
    }
    res.redirect("/axios/img_list");
});

app.get("/axios/img_list", (req, res) => {
    req.app.render('img_list', {imgList}, (err, html) => {
        if(err) throw err;
        res.end(html);
    });
});

app.get('/axios', (req, res) => {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100";
    axios.get(getUrlVal, {responseType:"arraybuffer"})
                                            .then( (response) => {
        const htmlContent = response.data
        let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
        // cheerio를 이용한 DOM셀렉터
        const $ = cheerio.load(htmlCMD);
        //div.cluster_text > a
        let h1Data = $('div.cluster_body div.cluster_text a').text();
        console.log(h1Data.trim());
    });
    res.end();
});

app.get('/axio2', (req, res) => {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    let getUrlVal = "https://ne.attribsws.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100";
    axios.get(getUrlVal, {responseType:"arraybuffer"}).then( (response) => {
        const htmlContent = response.data
        let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
        // cheerio를 이용한 DOM셀렉터
        const $ = cheerio.load(htmlCMD);
        //div.cluster_text > a
        let h1Data = $('div.cluster_body div.cluster_text a').text();
        console.log(h1Data.trim());
    });
    res.end();
});

app.get('/readFile', (req, res) => {
    // 파일 읽기
    fs.readFile('./package.json', (err, data)=>{
        if(err) throw err;
        res.end(data);
        console.log(data);
        console.log(data.toString());
    });
});

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log('run on server - http://localhost:3000');
});