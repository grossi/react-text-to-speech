import React from 'react';
import './Speak.css';

type SpeakInput = {
  children: string
  lang?: string
}

const Speak: React.FC<SpeakInput> = ({ children, lang }) => {
  const synth = window.speechSynthesis; 
  const speak = () => {
    var utterThis = new SpeechSynthesisUtterance(children);
    if(lang) {
      synth.getVoices().find(l => {
        if(l.lang.includes(lang)) {
          utterThis.voice = l;
          return true;
        }
        return false;
      });
    }
    synth.speak(utterThis);
  }
  return (
    <div className="App">
      <button className="Speak-button" onClick={() => {speak()}}>▶️</button>
      <p>
        {children}
      </p>
    </div>
  );
}

export default Speak;
