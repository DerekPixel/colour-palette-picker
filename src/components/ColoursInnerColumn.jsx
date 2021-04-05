import ColourValueText from './ColourValueText.jsx';
import {removeColour, getLightnessFromHex, handleChangeColour, HexToRGB, handleShadeChange} from '../coloursFunctions.js';

const ColoursInnerColumn = ({colours, setColourArray, colourObj}) => {

  return (
      <div className='colour-column-inner' >
        <div className='colour-column-inner-btns'>
          <button
            className='
              colour-column-item
              clickable
              tooltip
              btn-delete
            '
            onClick={() => removeColour(colourObj.pos, colours, setColourArray)}
            style={{color: getLightnessFromHex(colourObj.colour) > 50 ? 'black' : 'white'}}
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
            onClick={() => handleShadeChange(colours, colourObj, setColourArray)}
            style={{color: getLightnessFromHex(colourObj.colour) > 50 ? 'black' : 'white'}}
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
              onChange={(e) => {handleChangeColour(e, colourObj.pos, colours,  setColourArray)}}
            />
            <span className='tooltiptext' >Change Colour</span>
          </div>
        </div>
        <div className='colour-column-inner-text'>
          <ColourValueText
            className='
              colour-column-item
              clickable
              tooltip
              hex-text
            '
            colour={colourObj.colour}
            defaultText='COPY HEX'
          />
          < ColourValueText
            className='
              colour-column-item
              clickable
              tooltip
              rgb-text
            '
            colour={HexToRGB(colourObj.colour)}
            defaultText='COPY RGB'
          />
        </div>
      </div>
  )
}

export default ColoursInnerColumn