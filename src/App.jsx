import './App.css';
import { useState } from 'react';
import Colours from './components/Colours';

function App() {


  const [coloursArray, setColourArray] = useState([]);

  function addColourNewToColoursObject() {
    var coloursArrayCopy = coloursArray.slice();

    var newColour = {
      colour: `#${rH()}${rH()}${rH()}${rH()}${rH()}${rH()}`,
      pos: coloursArrayCopy.length
    };

    coloursArrayCopy.push(newColour);

    setColourArray(coloursArrayCopy);

  }

  const rH = () => {
    //random Hex value
    const colourHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var num = Math.floor(Math.random() * colourHex.length);
    return colourHex[num];
  }

  return (
    <div className="app">
      <Colours colour={coloursArray} setColour={(coloursObject) => {setColourArray(coloursObject)}} />
      <button onClick={() => addColourNewToColoursObject()} >new colour</button>
    </div>
  );
}

export default App;
