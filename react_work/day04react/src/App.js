import { useState } from 'react';
import './App.css';
import MyList from './components/MyList';
import MyInput from './components/MyInput';

function App() {
  const [fruits, setFruits] = useState(['사과','바나나','오랜지']);
  const [title, setTitle] = useState("한번에 끝내는 리액트");

  function onClickHandler(value) {
    setFruits([...fruits, value]);
  }

  return (
    <div className="App">
      <MyInput title={title} fruits={fruits} onClickHandler={onClickHandler} />
      <MyList fruits={fruits} setTitle={setTitle} setFruits={setFruits} />
    </div>
  );
}

export default App;
