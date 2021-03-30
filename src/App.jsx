import './App.css';
import { useState } from 'react';
import Colours from './components/Colours';

function App() {


  const [coloursArray, setColourArray] = useState(() => makeColoursArray());

  function makeColoursArray() {
    return [makeColourObject(0)];
  }

  function addColourNewToColoursArray() {
    var coloursArrayCopy = coloursArray.slice();

    var newColour = makeColourObject(coloursArrayCopy.length);

    coloursArrayCopy.push(newColour);

    setColourArray(coloursArrayCopy);

  }

  function makeColourObject(pos) {
    var newColour = {
      colour: randomColourInHex(),
      pos: pos
    };
    return newColour;
  }

  function randomColourInHex() {
    var newColour = '#';
    const colourHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    for(var i = 0; i < 6; i++) {
      var num = Math.floor(Math.random() * colourHex.length);
      newColour += colourHex[num]
    }
    return newColour;
  }

  function clipboard() {
    navigator.clipboard.writeText('BIG TITTY BITCHES');
  }

  return (
    <div className="app">
      <Colours colour={coloursArray} setColour={(coloursObject) => {setColourArray(coloursObject)}} />
      <button onClick={() => addColourNewToColoursArray()} >new colour</button>
      <button onClick={() => clipboard()} >women</button>
    </div>
  );
}

export default App;
