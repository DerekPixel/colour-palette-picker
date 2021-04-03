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
  
  function HexToRGB(hex = String) {

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

  function RGBToHex(rgb = String) {

    var arr = rgb.split(' ');

    var r = parseInt(arr[0], 10),
        g = parseInt(arr[1], 10),
        b = parseInt(arr[2], 10);

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length === 1) {
      r = "0" + r;
    }
    if (g.length === 1) {
      g = "0" + g;
    }
    if (b.length === 1) {
      b = "0" + b;
    }
  
    return `#${r}${g}${b}`
  }

  function RGBToHSL(rgb = String) {

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
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return `${h} ${s} ${l}`;

  }

  function HSLToRGB(hsl = String) {
    
    var hslArray = hsl.split(' ');

    var h = parseInt(hslArray[0], 10),
        s = parseInt(hslArray[1], 10),
        l = parseInt(hslArray[2], 10);

    // Must be fractions of 1
    s /= 100;
    l /= 100;

    var c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;  
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return `${r} ${g} ${b}`;

  }

  function getLightnessFromHex(colour) {

    var hsl = RGBToHSL(HexToRGB(colour));
    var arr = hsl.split(' ');

    return arr[2];
  }

  function averageColours(colour1, colour2) {

    var rgb1 = HexToRGB(colour1).split(' ');
    var rgb2 = HexToRGB(colour2).split(' ');

    var r = Math.round((parseInt(rgb1[0], 10) + parseInt(rgb2[0], 10)) / 2);
    var g = Math.round((parseInt(rgb1[1], 10) + parseInt(rgb2[1], 10)) / 2);
    var b = Math.round((parseInt(rgb1[2], 10) + parseInt(rgb2[2], 10)) / 2);

    return `${r} ${g} ${b}`;
  }

  function makeColourLighter(colour1) {

    var hsl = RGBToHSL(HexToRGB(colour1));

    var arr = hsl.split(' ');

    var h = parseInt(arr[0], 10);
    var s = parseInt(arr[1], 10);
    var l = parseInt(arr[2], 10);

    if(l >= 95) {
      l = 100;
    } else {
      l += 5;
    }

    return RGBToHex(HSLToRGB(`${h} ${s} ${l}`));

  }

  function makeColourDarker(colour1) {

    var hsl = RGBToHSL(HexToRGB(colour1));

    var arr = hsl.split(' ');

    var h = parseInt(arr[0], 10);
    var s = parseInt(arr[1], 10);
    var l = parseInt(arr[2], 10);

    if(l <= 5) {
      l = 0;
    } else {
      l -= 5;
    }

    return RGBToHex(HSLToRGB(`${h} ${s} ${l}`));
  }

  function handleAddingNewColourBesideCurrent(thisPos, otherPos) {

    var coloursArrayCopy = colour.slice();

    if(coloursArrayCopy.length >= 7) {
      return;
    }

    var colour1, colour2, newAverageColour;

    if(otherPos < 0 || otherPos > coloursArrayCopy.length - 1) {

      if(coloursArrayCopy.length === 1) {
        
        if(otherPos < 0) {
          newAverageColour = makeColourDarker(coloursArrayCopy[thisPos].colour);
        } else if(otherPos > 0) {
          newAverageColour = makeColourLighter(coloursArrayCopy[thisPos].colour);
        }
      } else {
        if(thisPos === 0) {
          newAverageColour = makeColourDarker(coloursArrayCopy[thisPos].colour);
        } else if(thisPos === coloursArrayCopy.length - 1) {
          newAverageColour = makeColourLighter(coloursArrayCopy[thisPos].colour);
        }
      }
      
    } else {
      colour1 = coloursArrayCopy[thisPos].colour;
      colour2 = coloursArrayCopy[otherPos].colour;

      newAverageColour = RGBToHex(averageColours(colour1, colour2));
    }

    var newColour = {
      colour: newAverageColour,
      pos: 0
    }

    if(thisPos > otherPos) {
      coloursArrayCopy.splice(thisPos, 0, newColour);
    } else {
      coloursArrayCopy.splice(otherPos, 0, newColour);
    }

    //make sure each colour has correct position property
    for(var i = 0; i < coloursArrayCopy.length; i++) {
      coloursArrayCopy[i].pos = i;
    }

    setColourArray(coloursArrayCopy);

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

      <button onClick={() => handleAddingNewColourBesideCurrent(colourObj.pos, colourObj.pos - 1)} >+</button>

      <div className='colour-column-inner' >
        <button
          className='
            colour-column-item
            clickable
            btn-delete
          '
          onClick={() => removeColour(colourObj.pos)}
          style={{color: getLightnessFromHex(colourObj.colour) > 50 ? 'black' : 'white'}}
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
          colour={HexToRGB(colourObj.colour)}
          defaultText='COPY RGB'
        />
      </div>

      <button onClick={() => handleAddingNewColourBesideCurrent(colourObj.pos, colourObj.pos + 1)} >+</button>

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
