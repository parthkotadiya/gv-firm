import React,{ useState } from 'react';
import style from '../Style/Notepad.module.css'

const saveTextToSessionStorage = (text) => {
  sessionStorage.setItem('noteText', text);
};

const getTextFromSessionStorage = () => {
  return sessionStorage.getItem('noteText') || ''; 
};

const YourComponent = () => {
  const [text, setText] = useState(getTextFromSessionStorage());

  const handler = (e) => {
    const newText = e.target.value;
    setText(newText);
    saveTextToSessionStorage(newText); 
  };

  return (
    <div className={style.note}>
      <div className={style.note}>
        <textarea
          className={style.note}
          value={text}  
          onChange={handler}
          placeholder="Write your notes here..."
        />
      </div>
    </div>
  );
};

export default YourComponent;
