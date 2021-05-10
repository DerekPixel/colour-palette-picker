import {useState} from 'react';
import ColoursInnerColumn from './ColoursInnerColumn.jsx';
import ColourShades from './ColourShades.jsx';
import ColourValueText from './ColourValueText.jsx';
import {getColourLightnessAndReturnBlackOrWhite, handleAddingNewColourBesideCurrent, HexToRGB} from '../coloursFunctions.js';

const Colours = ({colour: colours, setColour: setColourArray}) => {

  const [visible, setVisible] = useState(() => initializeVisibleArray());

  var coloursDiv = colours.map((colourObj, i) => {
    
    return (
    <div
      className='colour-column'
      style={{
        backgroundColor: `${colourObj.colour}`,
        color: getColourLightnessAndReturnBlackOrWhite(colourObj.colour)
      }}
      key={colourObj.pos}
      onMouseOver={() => handleSwitchingVisibility(colourObj.pos, true)}
      onMouseLeave={() => handleSwitchingVisibility(colourObj.pos, false)}
    >
      {
        visible[colourObj.pos] &&
        <>
          {
            colourObj.showShades ?
            <ColourShades colours={colours} colourObj={colourObj} setColourArray={setColourArray} />
            : 
            <>
              <ColoursInnerColumn colours={colours} colourObj={colourObj} setColourArray={setColourArray}/>
            </>
          }
        </>
      }

      {
        !colourObj.showShades &&
        <div className='colour-column-text'>
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
      }
    </div>
    )
  })

  function initializeVisibleArray() {
    var newArr = [];

    for(var i = 0; i < 7; i++) {
      if(getBrowser() === 'Firefox') {
        newArr.push(true);
      } else {
        newArr.push(false);
      }
    }

    return newArr;
  }

  function handleSwitchingVisibility(pos, boolean) {
    if(getBrowser() !== 'Firefox') {
      var visibleArrayCopy = visible.slice();

      visibleArrayCopy[pos] = boolean
  
      setVisible(visibleArrayCopy);
    }
  }

  function getBrowser() {
    if( navigator.userAgent.indexOf("Chrome") !== -1 ) {
      return "Chrome";
    } else if( navigator.userAgent.indexOf("Opera") !== -1 ) {
      return "Opera";
    } else if( navigator.userAgent.indexOf("MSIE") !== -1 ) {
      return "IE";
    } else if( navigator.userAgent.indexOf("Firefox") !== -1 ) {
      return "Firefox";
    } else {
      return "unknown";
    }
  }

  return (
    <div className='colours'>
      {coloursDiv}
    </div>
  )
}

export default Colours
