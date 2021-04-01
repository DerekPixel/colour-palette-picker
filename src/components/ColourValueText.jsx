import { useRef } from 'react';

const ColourValueText = ({className, colour, defaultText}) => {

  const colourTooltip = useRef(null);

  function clipboard(colour) {
    navigator.clipboard.writeText(colour);
  }

  function changeText(ref, text) {
    ref.current.textContent = text;
  }

  return (
    <p
      className={className}
      onMouseOut={() => {
        changeText(colourTooltip, defaultText);
      }}
      onClick={() => {
        clipboard(colour);
        changeText(colourTooltip, `COPIED: ${colour}`);
      }}
    >
      <span className='tooltiptext' ref={colourTooltip} >{defaultText}</span>
      {colour.toUpperCase()}
    </p>
  )
}

export default ColourValueText
