import React, {useState} from 'react'

const NewPalette = ({colours = Array, palettes = Array, setPaletteArray}) => {

  const [showInput, setShowInput] = useState(false);
  const [paletteName, setPaletteName] = useState('');

  function handlePaletteSave() {
    if(paletteName === '') {
      return
    }

    var paletteArrayCopy = palettes.slice();
    var coloursArrayCopy = colours.slice();
    var colourArrayCopyClone = [];

    for(var i = 0; i < coloursArrayCopy.length; i++) {
      var colourObjClone = {...coloursArrayCopy[i]}

      colourArrayCopyClone.push(colourObjClone);
    }

    var paletteObj = {
      name: paletteName,
      colour: colourArrayCopyClone
    };

    paletteArrayCopy.push(paletteObj);

    setShowInput(false);
    setPaletteName('');
    setPaletteArray(paletteArrayCopy);
  }

  return (
    <div
      className='new-palette'
    >
      <button
        onClick={() => {setShowInput(true)}}
      >Make new Palette</button>
      {
        showInput &&
        <div
          className='new-palette-inputs'
        >
          <input
            onChange={(e) => {setPaletteName(e.target.value)}}
            placeholder='Palette Name'
            type="text"
            value={paletteName}
          />
          <button
            onClick={() => {handlePaletteSave()}}
          >Save</button>
        </div>
      }

    </div>
  )
}

export default NewPalette
