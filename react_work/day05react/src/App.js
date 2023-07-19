import { Component } from 'react';
import './App.css';

// class 문법을 이용한 컴포넌트 만들기
// Component 클래스를 반드시 상속받아야 한다.
class MyComponent extends Component{

  constructor(props){
    super(props);
    // state를 생성자 안에서 선언한다.
    this.state = {
      cnt : 0,
      value : ""
    }
  }
  render() {
    return (
    <div>
      <header className="App-header">
        <h1>React 생명주기와 Hooks</h1>
      </header>
      <section>
        <h2>Welcome</h2>
        <input value={this.state.value} onChange={(e)=>{
          this.setState((prevState)=>{
            return{state : e.target.value}
          })}}/>
          <button>확인</button>
        <p>Count : {this.state.cnt}</p>
        <button onClick={(event)=>{
          // this.setState()를 이용하여 state 변수 값 업데이트
          this.setState((prevState)=>{
            // this.setState()의 콜백 함수는 매개 변수로 이전 state 상태값을 받을 수 있다.
            return{cnt : prevState.cnt +1};
          })
          }}>확인</button>
      </section>
      <footer>(c)Comstudy21. sice 2023.</footer>
    </div>);
  }
}
function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
