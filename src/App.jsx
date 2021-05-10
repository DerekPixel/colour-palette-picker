import './App.css';
import { useState, useEffect } from 'react';
import Colours from './components/Colours';
import NewPalette from './components/NewPalette';
import DropDown from './components/DropDown';

function App() {

  const [coloursArray, setColourArray] = useState(() => makeColoursArray());
  const [paletteArray, setPaletteArray] = useState(returnDataObjectIfExistsOrCreateDataObjectIfNot());
  const [dropDownArray, setDropDownArray] = useState(convertArrayToDropDownCompatible(paletteArray));

  useEffect(() => {
    savePalettesToLocalStorage();
    setDropDownArray(convertArrayToDropDownCompatible(paletteArray));
    return () => {

    }
  }, [paletteArray])

  function makeColoursArray() {
    return [makeColourObject(0), makeColourObject(1), makeColourObject(2)];
  }

  function makeColourObject(pos) {
    var newColour = {
      colour: randomColourInHex(),
      pos: pos,
      showShades: false
    };
    return newColour;
  }

  function randomColourInHex() {
    var newColour = '#';
    const colourHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    for(var i = 0; i < 6; i++) {
      newColour += colourHex[Math.floor(Math.random() * colourHex.length)];
    }
    return newColour;
  }

  function makeNewlocalStorageObject() {
    var Data = []
    return JSON.stringify(Data);
  };

  function returnDataObjectIfExistsOrCreateDataObjectIfNot() {
    if(window.localStorage.getItem('user-colour-palettes') === null) {
      window.localStorage.setItem('user-colour-palettes', makeNewlocalStorageObject());
    } else {
      return JSON.parse(window.localStorage.getItem('user-colour-palettes'));
    }
    return JSON.parse(window.localStorage.getItem('user-colour-palettes'));
  };

  function savePalettesToLocalStorage() {
    var paletteArrayCopy = paletteArray.slice();

    // console.log(paletteArrayCopy);

    window.localStorage.setItem('user-colour-palettes', JSON.stringify(paletteArrayCopy));
  }

  function convertArrayToDropDownCompatible(array = Array) {

    var arrayCopy = array.slice();

    var newArray = [];

    for(var i = 0; i < arrayCopy.length; i++) {
      var obj = {
        title: arrayCopy[i].name,
        index: i,
        selected: false,
        originalObj: arrayCopy[i]
      };

      newArray.push(obj);

    }

    return newArray;

  }

  return (
    <div className="app">
      <header>
        <h1>Colour Palette Picker</h1>

        <div className="header-rows">
          <div
            className="header-top-row"
          >
            <div className="creds-div">
              <p className="cred">Made by Derek Price</p>
              <a
                // style={{color: coloursArray[0].colour}}
                className="cred github-link"
                href="https://github.com/DerekPixel/colour-palette-picker"
              >GitHub</a>
            </div>
          </div>
          <hr/>
          <div
            className="header-bottom-row"
          >
            <div className="header-bottom-row-item">
              <NewPalette
                colours={coloursArray}
                palettes={paletteArray}
                setPaletteArray={(array) => {setPaletteArray(array)}}
              />
            </div>
            <div className="header-bottom-row-item">
              <DropDown
                dropDownMenuArray={dropDownArray}
                title='Saved Palettes'
                setDropdownArray={(array) => {setDropDownArray(array)}}
                setColourArray={(array) => {setColourArray(array)}}
                setPaletteArray={(array) => {setPaletteArray(array)}}
              />
            </div>
          </div>
        </div>
      </header>

      <Colours colour={coloursArray} setColour={(coloursObject) => {setColourArray(coloursObject)}} />
    </div>
  );
}

export default App;
