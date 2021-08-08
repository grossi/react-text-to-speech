import React from 'react';
import './App.css';
import Speak from './Speak';

function App() {
  const [speakInput, setSpeakInput] = React.useState<string>("")
  const handleOnChange = (event: any) => {
    setSpeakInput(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={speakInput}onChange={handleOnChange}/>
        <Speak lang="it">
          {speakInput}
        </Speak>
      </header>
    </div>
  );
}

export default App;
