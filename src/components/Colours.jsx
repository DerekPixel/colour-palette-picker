import React from 'react'

const Colours = ({colour, setColour: setColourArray}) => {

  function handleChangeColour(e, pos) {
    var coloursArrayCopy = colour.slice();

    coloursArrayCopy[pos].colour = e.target.value;
    
    setColourArray(coloursArrayCopy);
  }

  function removeColour(pos) {

    //Remove colour from array
    var coloursArrayCopy = colour.slice();
    coloursArrayCopy.splice(pos, 1);

    //make sure each colour has correct position property
    for(var i = 0; i < coloursArrayCopy.length; i++) {
      coloursArrayCopy[i].pos = i;
    }

    setColourArray(coloursArrayCopy);
  }

  var colourDiv = colour.map((colourObj, i) => {
    return (
    <div
      className='colour-column'
      style={{backgroundColor: `${colourObj.colour}`}}
      key={colourObj.pos}
    >
      {colourObj.pos}
      <input className='colour-column-item' type="color" value={colourObj.colour} onChange={(e) => {handleChangeColour(e, colourObj.pos)}} />
      <button className='colour-column-item' onClick={() => removeColour(colourObj.pos)} >delete</button>
    </div>
    )
  })

  return (
    <div className='colours'>
      {colourDiv}
    </div>
  )
}

export default Colours
