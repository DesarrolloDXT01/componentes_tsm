import logo from './logo.svg';
import './App.css';
import Button from './button/Button';
import InputText from './input/InputText';
import { useState } from 'react';
import InputDateTime from './input/InputDateTime';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const handleDateTimeChange = (newDateTime) => {
    setSelectedDateTime(newDateTime);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Button
        text="Primary Button"
        color="primary"
        onClick={handleClick}
      />

      <Button
        text="Secondary Button"
        color="warning"
        onClick={handleClick}
      />
      
      <Button
        text="Primary Outline Button"
        color="primary"
        onClick={handleClick}
        outline={true}
      />
      
      <Button
        text="Secondary Outline Button"
        color="secondary"
        onClick={handleClick}
        outline={true}
      />
      <InputText
        type="number"
        placeholder="inputt"
        value={inputValue}
        onChange={handleInputChange}
      />
      <InputText
        type="search"
        placeholder="escribe aqui"
        value={inputValue}
        onChange={handleInputChange}
        color="secondary"
        outline={true}
      />
    
      <InputDateTime
        initialDate='2024-10-01T10:09' 
        color="primary"
        onChange={handleDateTimeChange}
        showTime={true}
      />
      <InputDateTime
        initialDate="2001-10-04T10:09"
        color="secondary"
        onChange={handleDateTimeChange}
      />

      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
