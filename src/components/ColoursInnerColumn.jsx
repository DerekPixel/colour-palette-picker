import {
  removeColour, 
  getColourLightnessAndReturnBlackOrWhite, 
  handleChangeColour, 
  handleShadeChange,
  handleAddingNewColourBesideCurrent
} from '../coloursFunctions.js';

const ColoursInnerColumn = ({colours, setColourArray, colourObj}) => {

  return (
      <div className='colour-column-inner' >

        <div
          className='btn-new-colour'
          onClick={() => handleAddingNewColourBesideCurrent(colourObj.pos, colourObj.pos - 1, colours, setColourArray)}
        >+</div>

        <div className='colour-column-inner-btns'>
          <button
            className='
              colour-column-item
              clickable
              tooltip
              btn-delete
            '
            onClick={() => removeColour(colourObj.pos, colours, setColourArray)}
            style={{color: getColourLightnessAndReturnBlackOrWhite(colourObj.colour)}}
          >
            X
            <span className='tooltiptext' >Remove Colour</span>
          </button>
          <button
            className='
              colour-column-item
              clickable
              tooltip
              btn-shades
            '
            onClick={() => handleShadeChange(colours, colourObj, setColourArray, true)}
            style={{color: getColourLightnessAndReturnBlackOrWhite(colourObj.colour)}}
          >
            <p className="iconify" data-icon="heroicons-outline:view-list" data-inline="false"></p>
            <span className='tooltiptext' >Colour Shades</span>
          </button>
          <div
            className='
            colour-column-item
            clickable
            tooltip
            colour-column-item-input
          '
          >
            <input
              type="color" 
              value={colourObj.colour}
              onInput={(e) => handleChangeColour(e, colourObj.pos, colours,  setColourArray)}
            />
            <span className='tooltiptext' >Change Colour</span>
          </div>
        </div>

        <div
          className='btn-new-colour'
          onClick={() => handleAddingNewColourBesideCurrent(colourObj.pos, colourObj.pos + 1, colours, setColourArray)}
        >+</div>

      </div>
  )
}

export default ColoursInnerColumn
