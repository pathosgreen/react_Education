import React, { useState } from 'react';
import './App.css';

const MyComponent = () => {
  const [cnt, setCnt] = useState(120);
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <header className="App-header">
        <h1>React 생명주기와 Hooks</h1>
      </header>
      <section>
        <h2>Welcome</h2>
        <input value={value} onChange={onChangeHandler}></input>
        <button onClick={e => {
          console.log(value);
        }}>확인</button>
        <p>Count : {cnt}</p>
        <button onClick={() => {
          setCnt(prevCnt => prevCnt + 1);
        }}>확인</button>
      </section>
      <footer>(c)Comstudy21. since 2023.</footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;