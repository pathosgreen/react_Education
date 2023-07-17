import { useState } from 'react';

export default function MyInput({title, fruits, onClickHandler}) {
    const [value, setValue] = useState("");

    function onChangeHandler(event) {
        setValue(event.target.value);
    }

    const onBtnClick = (e)=>{
        onClickHandler(value);
        setValue("");
    }
    
    return (<div>
        <h1>{title}</h1>
        <input value={value} onChange={ onChangeHandler } />
        <button onClick={onBtnClick}>Add</button>
    </div>);
}