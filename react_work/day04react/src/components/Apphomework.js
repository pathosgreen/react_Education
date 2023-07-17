import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState("test");
  const [fruits,setFruits] = useState(['사과','바나나','오렌지']);
  const frutisList = fruits.map((fruits,i) =>{
    return <li key={i}>{fruits}</li>
  });

  function onChangeHandler(event){
    console.log(event.target.value);
    setValue(event.target.value);
  }
  function onClickEventHandler(event){
    // let newArr = [...fruits];
    // newArr.push(value);
    setFruits([...fruits,value]);
  }
  return (
    <div className="App">
      <h1>한번에 끝내는 리액트</h1>
      <input value={value} onChange={onChangeHandler} />
      <button onClick={onClickEventHandler}>add</button>
      <ul>
        {frutisList}
      </ul>
    </div>
  );
}

export default App;
