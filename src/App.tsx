import React from 'react';
import './App.css';

function App() {
  const [speakInput, setSpeakInput] = React.useState<string>("")
  const synth = window.speechSynthesis; 
  const speak = () => {
    var utterThis = new SpeechSynthesisUtterance(speakInput);
    synth.speak(utterThis);
  }
  const handleOnChange = (event: any) => {
    setSpeakInput(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={speakInput} onKeyDown={event => {
          if (event.key === "Enter") {
            speak()
          }
        }} onChange={handleOnChange}/>
        <button onClick={() => {speak()}}>Speak</button>
      </header>
    </div>
  );
}

export default App;
