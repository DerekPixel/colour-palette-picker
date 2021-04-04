import ColourValueText from './ColourValueText.jsx';
import {removeColour, getLightnessFromHex, handleChangeColour, HexToRGB, handleShadeChange} from '../coloursFunctions.js';

const ColoursInnerColumn = ({colours, setColourArray, colourObj}) => {

  return (
    <div>
      <div className='colour-column-inner' >
        <button
          className='
            colour-column-item
            clickable
            btn-delete
          '
          onClick={() => removeColour(colourObj.pos, colours, setColourArray)}
          style={{color: getLightnessFromHex(colourObj.colour) > 50 ? 'black' : 'white'}}
        >
          X
        </button>

        <button
          className='
            colour-column-item
            clickable
            btn-shades
          '
          onClick={() => handleShadeChange(colours, colourObj, setColourArray)}
          style={{color: getLightnessFromHex(colourObj.colour) > 50 ? 'black' : 'white'}}
        >
          <p className="iconify" data-icon="heroicons-outline:view-list" data-inline="false"></p>
        </button>

        <input
          className='
            colour-column-item
            clickable
            colour-column-item-input
          '
          type="color" value={colourObj.colour}
          onChange={(e) => {handleChangeColour(e, colourObj.pos, colours,  setColourArray)}}
        />
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
