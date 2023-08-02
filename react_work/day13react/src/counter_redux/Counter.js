import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  // 리덕스 스토어의 상태 값을 가져옵니다.
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // 인크리먼트 액션을 디스패치합니다.
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  // 디크리먼트 액션을 디스패치합니다.
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
};

export default Counter;