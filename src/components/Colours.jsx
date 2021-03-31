import React from 'react'

const Colours = ({colour, setColour: setColourArray}) => {

  function handleChangeColour(e, pos) {
    var coloursArrayCopy = colour.slice();

    coloursArrayCopy[pos].colour = e.target.value;
    
    setColourArray(coloursArrayCopy);
  }

  function removeColour(pos) {
    var coloursArrayCopy = colour.slice();

    //escape if there is only one colour left in the colours Array
    if(coloursArrayCopy.length === 1) {
      return;
    }

    //Remove colour from array
    coloursArrayCopy.splice(pos, 1);

    //make sure each colour has correct position property
    for(var i = 0; i < coloursArrayCopy.length; i++) {
      coloursArrayCopy[i].pos = i;
    }

    setColourArray(coloursArrayCopy);
  }
  
  function hexToRGB(hex = String) {

    var r, g, b, rgb;
    r = g = b = '00';

    if(hex.length === 4) {
      r = '0x' + hex[1] + hex[1];
      g = '0x' + hex[2] + hex[2];
      b = '0x' + hex[3] + hex[3];
    }

    if(hex.length === 7) {
      r = '0x' + hex[1] + hex[2];
      g = '0x' + hex[3] + hex[4];
      b = '0x' + hex[5] + hex[6];
    }

    rgb = `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`;

    return rgb;
  }

  function clipboard(colour) {
    navigator.clipboard.writeText(`${colour}`);
  }

  var coloursDiv = colour.map((colourObj, i) => {
    return (
    <div
      className='colour-column'
      style={{backgroundColor: `${colourObj.colour}`}}
      key={colourObj.pos}
    >

      <button 
        className='colour-column-item clickable btn-delete' 
        onClick={() => removeColour(colourObj.pos)} 
      >
        X
      </button>

      <input 
        className='colour-column-item clickable colour-column-item-input' 
        type="color" value={colourObj.colour} 
        onChange={(e) => {handleChangeColour(e, colourObj.pos)}} 
      />

      <p 
        className='colour-column-item clickable' 
        onClick={() => clipboard(colourObj.colour)} 
      >
        {colourObj.colour.toUpperCase()}
      </p>

      <p 
        className='colour-column-item clickable' 
        onClick={() => clipboard(hexToRGB(colourObj.colour))} 
      >
        {hexToRGB(colourObj.colour)}
      </p>

    </div>
    )
  })

  return (
    <div className='colours'>
      {coloursDiv}
    </div>
  )
}

export default Colours
