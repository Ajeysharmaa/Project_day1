import { useState } from "react";
import "./App.css";

function App() {

  const [backgroundColor, setBackGroundColor] = useState('');
  const [inputBoxItem, setInputBoxItem] = useState('');

  const clrChangeOnclick = () =>{
    setBackGroundColor(inputBoxItem);
  }

  return (
    <div className="App col-12 col-md-6 col-sm-3">
      <header className="App-header">
        <h1>Type your color code or name below.</h1>
        <div style={{backgroundColor, minHeight:'100vh', transition:'background-color 0.8s'}}>
          <input 
            type="text"
            onChange={(e)=>setInputBoxItem(e.target.value)}
          />
          <button onClick={clrChangeOnclick}>Change color</button>
        </div>
      </header>
    </div>
  );
}

export default App;
