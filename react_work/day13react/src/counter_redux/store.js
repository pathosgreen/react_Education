import { createStore } from 'redux';

// 초기 상태를 정의합니다.
const initialState = { count: 0 };

// 리듀서 함수를 정의합니다.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// 리덕스 스토어를 생성합니다.
const store = createStore(counterReducer);

export default store;