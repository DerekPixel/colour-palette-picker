import ColoursInnerColumn from './ColoursInnerColumn.jsx';
import ColourShades from './ColourShades.jsx';
import {getLightnessFromHex, handleAddingNewColourBesideCurrent} from '../coloursFunctions.js';

const Colours = ({colour: colours, setColour: setColourArray}) => {

  var coloursDiv = colours.map((colourObj, i) => {
    
    return (
    <div
      className='colour-column'
      style={{
        backgroundColor: `${colourObj.colour}`,
        color: getLightnessFromHex(colourObj.colour) > 50 ? 'black' : 'white'
      }}
      key={colourObj.pos}
    >

        {
          !colourObj.showShades ?
          <div
            className='btn-new-colour'
            onClick={() => handleAddingNewColourBesideCurrent(colourObj.pos, colourObj.pos - 1, colours, setColourArray)}
          >+</div> : ''
        }
        {
          colourObj.showShades ?
          <ColourShades colours={colours} colourObj={colourObj} setColourArray={setColourArray} /> :
          <ColoursInnerColumn colours={colours} colourObj={colourObj} setColourArray={setColourArray} />
        }
        {
          !colourObj.showShades ?
          <div
            className='btn-new-colour'
            onClick={() => handleAddingNewColourBesideCurrent(colourObj.pos, colourObj.pos + 1, colours, setColourArray)}
          >+</div> : ''
        }

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
