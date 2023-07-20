import { Component } from 'react';
// class 문법을 이용한 컴포넌트 만들기
// Component 클래스를 반드시 상속받아야 한다.
class MyComponent extends Component{

    constructor(props){
      super(props);
      // state를 생성자 안에서 선언한다.
      this.state = {
        cnt : 0,
        value : ""
      };
      // 이벤트 핸들러 내부에서 this는 이벤트를 발생시킨 요소 자신이다.
      this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    // 일반 함수는 this가 다르다. 그래서 생성자에서 this를 bind해줘야 한다.
    onChangeHandler(e){
      this.setState((prevState)=>{
        return{value : e.target.value}
      })
    }
  
    onClickHandler = e => {
      // this.setState()를 이용하여 state 변수 값 업데이트
      this.setState((prevState)=>{
        // this.setState()의 콜백 함수는 매개 변수로 이전 state 상태값을 받을 수 있다.
        return{cnt : prevState.cnt +1};
      })
    };
    render() {
      return (
      <div>
        <header className="App-header">
          <h1>React 생명주기와 Hooks</h1>
        </header>
        <section>
          <h2>Welcome</h2>
          <input value={this.state.value} onChange={this.onChangeHandler}/>
            <button>확인</button>
          <p>Count : {this.state.cnt}</p>
          <button onClick={this.onClickHandler}>확인</button>
        </section>
        <footer>(c)Comstudy21. sice 2023.</footer>
      </div>);
    }
}

export default MyComponent;