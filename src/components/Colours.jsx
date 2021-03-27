import React from 'react'

const Colours = ({colour, setColour}) => {

  function handleChangeColour(e, pos) {
    var coloursObjectCopy = colour.slice();

    coloursObjectCopy[pos].colour = e.target.value;
    
    setColour(coloursObjectCopy);
  }

  var colourDiv = colour.map((colourObj, i) => {
    return (
    <div
      style={{backgroundColor: `${colourObj.colour}`}}
      key={colourObj.pos + colourObj.colour}
    >
      {colourObj.pos}
      <input type="color" value={colourObj.colour} onChange={(e) => {handleChangeColour(e, colourObj.pos)}} />
    </div>
    )
  })

  return (
    <div>
      {colourDiv}
    </div>
  )
}

export default Colours
