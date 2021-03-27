import './App.css';
import { useState } from 'react';
import Colours from './components/Colours';

function App() {

  const [coloursObject, setColour] = useState([]);

  function addColourNewToColoursObject() {
    var coloursObjectCopy = coloursObject.slice();

    var newColour = {
      colour: '#000000',
      pos: coloursObjectCopy.length
    };

    coloursObjectCopy.push(newColour);

    setColour(coloursObjectCopy);

  }

  return (
    <div className="app">
      <Colours colour={coloursObject} setColour={(coloursObject) => {setColour(coloursObject)}} />
      <button onClick={() => addColourNewToColoursObject()} >new colour</button>
    </div>
  );
}

export default App;
