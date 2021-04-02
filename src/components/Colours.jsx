import ColourValueText from './ColourValueText';

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

    rgb = `${parseInt(r, 16)} ${parseInt(g, 16)} ${parseInt(b, 16)}`;

    return rgb;
  }

  function rgbToHSL(rgb = String) {

    var arr = rgb.split(' ');
    var r = arr[0];
    var g = arr[1];
    var b = arr[2];

    // Make r, g and b fractionsof 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find the greatest and smallest channel values
    var cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if(delta === 0) {
      h = 0;
    } else if(cmax === r) {       // Red is max
      h = ((g - b) / delta) % 6;
    } else if(cmax === g) {       // Green is max
      h = (b - r) / delta + 2;
    } else {                      // Blue is max
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    // Make negative hues positive behind 360degrees
    if(h < 0) {
      h += 360;
    }

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * 1 -1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return `${h} ${s} ${l}`;

  }

  function getLightnessFromHex(colour) {

    var hsl = rgbToHSL(hexToRGB(colour));
    var arr = hsl.split(' ');

    return arr[2];
  }

  function averageColours(colour1, colour2) {

    var rgb1 = hexToRGB(colour1).split(' ');
    var rgb2 = hexToRGB(colour2).split(' ');

    var r = Math.round((parseInt(rgb1[0], 10) + parseInt(rgb2[0], 10)) / 2);
    var g = Math.round((parseInt(rgb1[1], 10) + parseInt(rgb2[1], 10)) / 2);
    var b = Math.round((parseInt(rgb1[2], 10) + parseInt(rgb2[2], 10)) / 2);

    console.log(`${r} ${g} ${b}`);

  }

  var coloursDiv = colour.map((colourObj, i) => {
    

    return (
    <div
      className='colour-column'
      style={{
        backgroundColor: `${colourObj.colour}`,
        color: getLightnessFromHex(colourObj.colour) > 50 ? 'black' : 'white'
      }}
      key={colourObj.pos}
    >

      <button 
        className='
          colour-column-item 
          clickable 
          btn-delete
        ' 
        onClick={() => removeColour(colourObj.pos)} 
      >
        X
      </button>

      <input 
        className='
          colour-column-item
          clickable 
          colour-column-item-input
        ' 
        type="color" value={colourObj.colour} 
        onChange={(e) => {handleChangeColour(e, colourObj.pos)}} 
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

        colour={hexToRGB(colourObj.colour)}
        defaultText='COPY RGB'
      />

    </div>
    )
  })

  return (
    <div className='colours'>
      {coloursDiv}
      <button onClick={() => {averageColours('#e54f17', '#8352AC')}} ></button>
    </div>
  )
}

export default Colours
