import {
  getLightnessFromHex, 
  fillColourShadesArrayWithDarkShades, 
  fillColourShadesArrayWithLightShades,
  handleColourChangeAndShowShades
} from '../coloursFunctions.js';

const ColourShades = ({colours , colourObj, setColourArray}) => {

  var colourShades = [colourObj.colour];

  fillColourShadesArrayWithLightShades(colourObj.colour, colourShades);
  fillColourShadesArrayWithDarkShades(colourObj.colour, colourShades);

  var colourShadesDiv = colourShades.map((shade) => {

    return (
      <div
        className='shade'
        onClick={() => handleColourChangeAndShowShades(colours, colourObj, setColourArray, shade)}
        key={shade}
        style={{
          backgroundColor: shade,
          color: getLightnessFromHex(shade) > 50 ? 'black' : 'white'
        }}
      >
        <p
          className={shade === colourObj.colour ? 'main-shade-text' : 'shade-text'}
        >
          {shade.toUpperCase()}
        </p>
      </div>
    )
  })


  return (
    <div className='shades'>
      {colourShadesDiv}
    </div>
  )
}

export default ColourShades
