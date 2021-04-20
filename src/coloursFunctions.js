export function handleChangeColour(e, pos, colours, setColourArray) {
  var coloursArrayCopy = colours.slice();

  var colourArrayClone = [];

  for(var i = 0; i < coloursArrayCopy.length; i++) {
    var colourObjClone = {...coloursArrayCopy[i]}

    colourArrayClone.push(colourObjClone);
  }

  colourArrayClone[pos].colour = e.target.value;
  
  setColourArray(colourArrayClone);
}

export function handleShadeChange(colours, colourObj, setColourArray, on) {

  var coloursArrayCopy = colours.slice();

  var colourArrayClone = [];

  for(var i = 0; i < coloursArrayCopy.length; i++) {
    var colourObjClone = {...coloursArrayCopy[i]}

    colourArrayClone.push(colourObjClone);
  }

  colourArrayClone[colourObj.pos].showShades = on;

  setColourArray(colourArrayClone);
}

export function handleColourChangeAndShowShades(colours, colourObj, setColourArray, shade) {
  var coloursArrayCopy = colours.slice();

  var colourArrayClone = [];

  for(var i = 0; i < coloursArrayCopy.length; i++) {
    var colourObjClone = {...coloursArrayCopy[i]}

    colourArrayClone.push(colourObjClone);
  }

  colourArrayClone[colourObj.pos].showShades = false;
  colourArrayClone[colourObj.pos].colour = shade;

  setColourArray(colourArrayClone);
}

export function removeColour(pos, colours, setColourArray) {
  var coloursArrayCopy = colours.slice();

  var colourArrayClone = [];

  for(var i = 0; i < coloursArrayCopy.length; i++) {
    var colourObjClone = {...coloursArrayCopy[i]}

    colourArrayClone.push(colourObjClone);
  }

  //escape if there is only one colour left in the colours Array
  if(colourArrayClone.length === 1) {
    return;
  }

  //Remove colour from array
  colourArrayClone.splice(pos, 1);

  //make sure each colour has correct position property
  for(var j = 0; j < colourArrayClone.length; j++) {
    colourArrayClone[j].pos = j;
  }

  setColourArray(colourArrayClone);
}

export function HexToRGB(hex = String) {

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

export function RGBToHex(rgb = String) {

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

export function RGBToHSL(rgb = String) {

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

export function HSLToRGB(hsl = String) {
  
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

export function getLightnessFromHex(colour) {

  var hsl = RGBToHSL(HexToRGB(colour));
  var arr = hsl.split(' ');

  return arr[2];
}

export function averageColours(colour1, colour2) {

  var rgb1 = HexToRGB(colour1).split(' ');
  var rgb2 = HexToRGB(colour2).split(' ');

  var r = Math.round((parseInt(rgb1[0], 10) + parseInt(rgb2[0], 10)) / 2);
  var g = Math.round((parseInt(rgb1[1], 10) + parseInt(rgb2[1], 10)) / 2);
  var b = Math.round((parseInt(rgb1[2], 10) + parseInt(rgb2[2], 10)) / 2);

  return `${r} ${g} ${b}`;
}

export function makeColourLighter(colour1) {

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

export function makeColourDarker(colour1) {

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

export function handleAddingNewColourBesideCurrent(thisPos, otherPos, colours, setColourArray) {

  var coloursArrayCopy = colours.slice();

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
    pos: 0,
    showShades: false
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

export function fillColourShadesArrayWithLightShades(colourToMakeLighter, colourArray) {

  if(colourToMakeLighter.toLowerCase() === '#ffffff') {
    return;
  }

  var lighterShade = makeColourLighter(colourToMakeLighter);

  colourArray.unshift(lighterShade);

  fillColourShadesArrayWithLightShades(lighterShade, colourArray);

}

export function fillColourShadesArrayWithDarkShades(colourToMakeDarker, colourArray) {

  if(colourToMakeDarker.toLowerCase() === '#000000') {
    return;
  }

  var darkerShade = makeColourDarker(colourToMakeDarker);

  colourArray.push(darkerShade);

  fillColourShadesArrayWithDarkShades(darkerShade, colourArray);

}

export function getColourLightnessAndReturnBlackOrWhite(colour) {
  return getLightnessFromHex(colour) > 40 ? 'black' : 'white'; 
}

var pimp = () => {
  console.log('pimp');
  return 'What is up pimp?';
}

export default pimp;