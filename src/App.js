import React, { useEffect, useState } from 'react';

import Text from './Text.js';

import './App.css';

function App() {
  let [month, setMonth] = useState(1);
  let [day, setDay] = useState(1);
  let [date, setDate] = useState(['월', '화', '수', '목', '금', '토', '일']);
  let [text, setText] = useState(['오늘도 화이팅 👊']);
  let [input, setInput] = useState('');

  const nextDay = () => {
    if (date.length != 1) {
      let changeDate = [...date];      
      changeDate.shift();
      setDate(changeDate);
    } else {
      setDate(['월', '화', '수', '목', '금', '토', '일']);
    }
  }

  const onClick = () => {
    let textCopy = [...text];
    textCopy.push(input);
    setText(textCopy);
    setInput('');
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }
  
  const onChange = (e) => {
    setInput(e.target.value);
  }

  const onClear = () => {
    let deleteText = [...text];
    deleteText.shift();
    setText(deleteText);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="containerHeader">
          <h5 className="title">심플 일정용 노트패드 🚀 </h5>
          <span className="titleWarning">(메모장은 최대 700 ~ 1000px 사이에서만 보여집니다!)</span>
          <h1>
            <span>2022년</span>
            <span>
              {
                 month  < 13
                  ? <span> {month}월</span>
                  : setMonth(month=1)
              }
            </span>
            <span>
              {
                 day  < 32
                  ? <span> {day}일</span>
                  : setDay(day=1)
              }
            </span>
          </h1>
          <div className="containerHeaderButton">
            <button onClick={() => { setMonth(month + 1) }}>Month</button>
            <button onClick={() => { setDay(day + 1) }}>Day</button>
          </div>
          <div className="dateCheck">
            <h3>{date[0]}요일</h3>
            <div className="dayChange">
              <span>( 버튼을 눌러 요일을 넘기세요                
                <button onClick={nextDay}> → </button>  )</span>
              <button className="clearBtn" onClick={onClear}>완료</button>
            </div>
          </div>
        </div>
        <div className="containerMain">
          <div className="containerMainNav">
          </div>
          <div className="containerMainResult">
            <Text text={text} setText={setText} />
          </div>
          <div className="containerMainInput">
            <input  placeholder="메모 입력" type="text" value={input} onChange={onChange} onKeyPress={onEnter} />
            <button onClick={onClick}>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;