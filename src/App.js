import logo from './logo.svg';
import './App.css';
import Button from './button/Button';
import InputText from './input/InputText';
import { useRef, useState, useEffect } from 'react';
import InputDateTime from './input/InputDateTime';
import InputFile from './input/InputFile';
import Card from './card/Card';
import RichText from './richText/RichText';
import Modal from './modal/Modal';


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

  const [richTextObject, setRichTextObject] = useState(null);

  const handleFinalObjectChange = (newRichTextObject) => {
    setRichTextObject(newRichTextObject);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);




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

        <section >
          <h2>Rich Text</h2>
          <RichText onFinalObjectChange={handleFinalObjectChange} />
          {richTextObject && <div>Rich Text Object: {JSON.stringify(richTextObject)}</div>}
        </section>

        <section className="p-4 text-black">
          <Button
            onClick={openModal}
            color="secondary"
            text="Abrir Modal"
          >

          </Button>
          <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Test">
            <p>Modal</p>
            <RichText onFinalObjectChange={handleFinalObjectChange} />
            {richTextObject && <div>Rich Text Object: {JSON.stringify(richTextObject)}</div>}
            <InputFile
              onFileChange={handleFileChange}
              color="primary"
            />
            <Button
              onClick={closeModal}
              color="secondary"
              text="cerrar"
            >
            </Button>
          </Modal>
        </section>

      </header>
    </div>
  );
};

export default App;
