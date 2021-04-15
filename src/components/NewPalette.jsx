import React, {useState, useRef, useEffect} from 'react'

const NewPalette = ({colours = Array, palettes = Array, setPaletteArray}) => {

  const [showInput, setShowInput] = useState(false);
  const [paletteName, setPaletteName] = useState('');

  const paletteInput = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  }, [])

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

  function handleDocumentClick(e) {
    if(paletteInput.current && !paletteInput.current.contains(e.target)) {
      setShowInput(true);
    } else {
      setShowInput(false)
    }
  }

  return (
    <div
      className='new-palette'
    >
      <button
        onClick={() => {setShowInput(true)}}
      >Save</button>
      {
        showInput &&
        <>
        <div 
          className='overlay'
          ref={paletteInput}
        ></div>
        <div
          className='new-palette-inputs'
        >
          <h2
            className='new-palette-title'
          >Save Palette</h2>
          <input
            autoFocus
            onChange={(e) => {setPaletteName(e.target.value)}}
            placeholder='Palette Name'
            type="text"
            value={paletteName}
          />
          <div
            className='new-palette-input-btn'
          >
            <button
              onClick={() => {handlePaletteSave()}}
            >Save</button>
            <button
              onClick={() => {setShowInput(false)}}
            >Cancel</button>
          </div>
        </div>
        </>

      }

    </div>
  )
}

export default NewPalette
