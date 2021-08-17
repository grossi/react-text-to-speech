import React from 'react';
import './App.css';
import Speak from './Speak';

function App() {
  const [speakInput, setSpeakInput] = React.useState<string>("")
  const [language, setLanguage] = React.useState<string>("en")
  const handleOnChange = (event: any) => {
    setSpeakInput(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={speakInput}onChange={handleOnChange}/>
        <div>
          <input type="radio" id="jp" value="ja" onChange={(e) =>setLanguage(e.target.value)} checked={language === "ja"}/>
          <label htmlFor="jp">JP</label>
        </div>

        <div>
          <input type="radio" id="en" value="en" onChange={(e) => setLanguage(e.target.value)} checked={language === "en"}/>
          <label htmlFor="en">EN</label>
        </div>
        <Speak lang={language}>
          {speakInput}
        </Speak>
      </header>
    </div>
  );
}

export default App;
