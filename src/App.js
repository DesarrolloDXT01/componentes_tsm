import logo from './logo.svg';
import './App.css';
import Button from './button/Button';
import InputText from './input/InputText';
import { useState } from 'react';
import InputDateTime from './input/InputDateTime';
import InputFile from './input/InputFile';
import Card from './card/Card';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleDateTimeChange = (newDateTime) => {
    setSelectedDateTime(newDateTime);
  };
  const handleFileChange = (files) => {
    setSelectedFiles(files);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <section className="button-section mb-4">
          <h2>Buttons</h2>
          <Button
            text="Primary Button"
            color="primary"
            onClick={handleClick}
          />&nbsp;
          <Button
            text="Secondary Button"
            color="warning"
            onClick={handleClick}
          />&nbsp;
          <Button
            text="Primary Outline Button"
            color="primary"
            onClick={handleClick}
            outline={true}
          />&nbsp;
          <Button
            text="Secondary Outline Button"
            color="secondary"
            onClick={handleClick}
            outline={true}
          />
        </section>
        
        <section className="input-text-section">
          <h2>Text Inputs</h2>
          <InputText
            type="number"
            color='warning'
            placeholder="input"
            value={inputValue}
            onChange={handleInputChange}
          />&nbsp;
          <InputText
            type="search"
            placeholder="escribe aqui"
            value={inputValue}
            onChange={handleInputChange}
            color="secondary"
            outline={true}
          />&nbsp;
        </section>
        
        <section className="input-datetime-section">
          <h2>DateTime Inputs</h2>
          <InputDateTime
            initialDate='2024-10-01T10:09' 
            color="primary"
            onChange={handleDateTimeChange}
            showTime={true}
          />&nbsp;
          <InputDateTime
            initialDate="2001-10-04T10:09"
            color="secondary"
            onChange={handleDateTimeChange}
          />&nbsp;
        </section>
        
        <section className="input-file-section">
          <h2>File Input</h2>
          <InputFile
        onFileChange={handleFileChange}
        color="danger"
      />
        </section>
        
        <section className="card-section">
          <h2>Cards</h2>
          <Card
            title={<h2 className="text-xl font-bold">tituloo</h2>}
            content={<p>aaaaaaaaaaaaaaaaa</p>}
            footer={ <Button
              text="Primary Button"
              color="primary"
              onClick={handleClick}
            />}
            color="primary"
          />
          <Card
            title={<h2 className="text-xl font-bold">esto es un header</h2>}
            content={<p>contenidoooo</p>}
            footer={<InputText
              type="text"
              color='primary'
              placeholder="input"
              value={inputValue}
              onChange={handleInputChange}
            />}
            color="secondary"
          />
          <Card
            title={<h2 className="text-xl font-bold">aaaaaaaaaaa</h2>}
            content={<p>bbbbbbbbbb</p>}
            footer={
              <InputFile
              onFileChange={handleFileChange}
              color="secondary"/>
            }
            color="secondary"
          />
        </section>

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
};

export default App;
