import logo from './logo.svg';
import './App.css';
import Button from './button/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
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
        color="secondary"
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
