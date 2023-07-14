import { useState } from 'react';
import './App.css';


function MyList() {
  let [names, setNames] = useState(['강감찬','이순신','일지매','홍길동','을지문덕']);
  let nameList = names.map(function (name, i) {
    return <li key={i}>{name}</li>;
  });

  return (
    <div>
      <input ></input><button>추가</button>
      <ul>
        {names.map(function (name, i) {
          return <li key={i}>{name}</li>;
        })}
      </ul>
  </div>
  );
}

function Homework() {
  return (
    <div className="App">
      <MyList />
    </div>
  );
}

export default Homework;