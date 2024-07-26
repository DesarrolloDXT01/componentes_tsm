import logo from './logo.svg';
import './App.css';
import Button from './button/Button';
import InputText from './input/InputText';
import { useRef, useState, useEffect } from 'react';
import InputDateTime from './input/InputDateTime';
import InputFile from './input/InputFile';
import Card from './card/Card';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Editor from './quill/Editor';
import Delta from 'quill-delta';

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
  const [value, setValue] = useState('');

  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const [base64Images, setBase64Images] = useState([]);

  const extractBase64Images = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const images = doc.querySelectorAll('img');
    const base64Images = Array.from(images)
      .map(img => img.src)
      .filter(src => src.startsWith('data:image'))
      .map(src => src.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''));

    return base64Images;
  };
  const base64ToArrayBuffer = (base64) => {
    try {
      // Verifica que la cadena base64 tenga un formato válido

      // Decodifica la base64 a una cadena binaria
      const binaryString = atob(`${base64[1]}`);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      return bytes.buffer;
    } catch (error) {
      console.error('Failed to decode base64:', error);
      return null;
    }
  };

  const base64ToBlob = (base64, mime) => {
    const arrayBuffer = base64ToArrayBuffer(base64);
    return new Blob([arrayBuffer], { type: mime });
  };

  const quillRef = useRef();

  const handleButtonClick = () => {
    const content = quillRef.current.root.innerHTML;
    //const jsonString = JSON.stringify(content);
    const extractedBase64Images = extractBase64Images(content);
    console.log('Extracted Base64 Images:', extractedBase64Images);
    console.log( base64ToBlob(extractedBase64Images, 'image/png'));
  };


  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <section >
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

        <section >
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

        <section >
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

        <section>
          <h2>File Input</h2>
          <InputFile
            onFileChange={handleFileChange}
            color="danger"
          />
        </section>

        <section >
          <h2>Cards</h2>
          <Card
            header={<h2 className="text-2xl font-bold">tituloo</h2>}
            content={<p>aaaaaaaaaaaaaaaaa</p>}
            footer={<Button
              text="Primary Button"
              color="primary"
              onClick={handleClick}
            />}
            color="primary"
          /><br />
          <Card
            header={<h2 className="text-2xl font-bold">esto es un header</h2>}
            content={<p>contenidoooo</p>}
            footer={<InputText
              type="text"
              color='primary'
              placeholder="input"
              value={inputValue}
              onChange={handleInputChange}
            />}
            color="secondary"
          /><br />
          <Card
            header={<h2 className="text-2xl font-bold">aaaaaaaaaaa</h2>}
            content={<p>bbbbbbbbbb</p>}
            footer={
              <InputFile
                onFileChange={handleFileChange}
                color="secondary" />
            }
            color="secondary"
          /><br />
        </section>
        <section className='bg-white text-black'>
      <Editor
        ref={quillRef}
        readOnly={readOnly}
        defaultValue={new Delta()
          .insert('Hello')
          .insert('\n', { header: 1 })
          .insert('Some ')
          .insert('initial', { bold: true })
          .insert(' ')
          .insert('content', { underline: true })
          .insert('\n')}
        onChangeSelection={setRange}
        onChange={setLastChange}
      />
      <div className="my-4">
            <Button
            text="Enviar"
            color="primary"
            onClick={handleButtonClick}
          />
      </div>
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
