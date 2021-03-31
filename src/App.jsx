import './App.css';
import { useState } from 'react';
import Colours from './components/Colours';

function App() {


  const [coloursArray, setColourArray] = useState(() => makeColoursArray());

  function makeColoursArray() {
    return [makeColourObject(0)];
  }

  function addNewColourToColoursArray() {
    var coloursArrayCopy = coloursArray.slice();

    if(coloursArrayCopy.length >= 8) {
      return;
    }

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

  return (
    <div className="app">
      <header>
        <h1>Colour Palette Picker</h1>
        <button onClick={() => addNewColourToColoursArray()} >new colour</button>

        <div className="creds-div">
          <p className="cred">Made by Derek Price</p>
          <a className="cred" href="https://github.com/DerekPixel/colour-palette-picker">GitHub</a>
        </div>
      </header>
      <Colours colour={coloursArray} setColour={(coloursObject) => {setColourArray(coloursObject)}} />
    </div>
  );
}

export default App;
