import { useState } from 'react';
import './App.css';

// 새로운 컴퍼넌트 MyList 만들기
function MyList(){

  let fishList = [
    <li key="0">오징어</li>,<li key="1">꼴뚜기</li>,<li key="2">대구</li>,
    <li key="3">명태</li>,<li key="4">거북이</li>
  ];
  let colorArr = ['red','green','blue','orange','pink'];
  // colorArr의 데이터를 이용하여 JSX 리스트로 변환하기
  let colorList = [];
  for(var i=0;i<colorArr.length; i++){
    colorList.push(<li key={i}>{colorArr[i]}</li>);
    // colorList[i] = <li key={i}>{colorArr[i]}</li>;
  }
  // map 함수를 이용하여 JSX 리스트 만들기
  let names = ['강감찬','이순신','일지매','홍길동','을지문덕'];
  let nameList = names.map((name, i)=>{
    return <li key={i}>{name}</li>
  });
  return(
    <div>
      <h2>독도는 대한민국 영토이다</h2>
      <input></input><button></button>
      <ul>
        {nameList}
      </ul>
    </div>
  );
}

function App() {
  // 전역변수는 다른 함수에서도 공통으로 사용
  let name = "Sol";
  const [number,setNumber] = useState(0);
  // const [numStyle,setNumStyle] = useState({color : 'blue'});
  const [numColor,setNumColor] = useState('numColor0');
  // function button() {
  //   return(console.log("Button Clicked!"));
  // }
  let RandomNumber = () => {
    let num;
    // 절삭 : Math.floor()
    // 반올림 : Math.round()
    num = Math.floor(Math.random()*100);
    // setNumStyle({color : 'green'})
    setNumColor('numColor0');
    if(Math.floor(Math.random()*2)) {
      // number = number * -1;
      // number *= -1;
      num = -num;
      // setNumStyle({color : 'red'})
      setNumColor('numColor1');
    }
    setNumber(num);
    console.log("number : " + num);
  }
  // 신식으로 화살표 함수를 변수에 참조하는 방법
  let clickEvent = () =>{
    console.log("버튼을 클릭했습니다!")
  }
  // 구식의 익명함수를 선언해서 변수에 참조하는 방법
  var funcName = function(){
    console.log("Button Clicked!!");
  }
  
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <p>This is a paragraph.</p>
      <p className={numColor}>Number : {number}</p>
      <MyList />
      <button onClick={RandomNumber}>Click me!</button>
    </div>
  );
}

export default App;
