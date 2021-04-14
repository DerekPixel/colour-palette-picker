import React, { useRef, useState, useEffect } from 'react'

const DropDown = ({dropDownMenuArray = Array, title = String, setDropdownArray, setColourArray, setPaletteArray}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title)

  const dropDownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  }, [])

  var dropDown = dropDownMenuArray.map((obj, i, list) => {
    return (
      <div
        className='dropdown-item-container'
        key={obj.index}
      >
        <div
          className={obj.selected ? 'dropdown-item selected' : 'dropdown-item'}
          onClick={(e) => {handleItemClick(e, obj.index, list)}}
        >
          {obj.title}
        </div>
        <button
        className='dropdown-item-delete-btn'
          onClick={() => {handleDeleteItem(obj.index, list)}}
        >X</button>
      </div>
    )
  })

  function handleDeleteItem(index, list) {
    var listcopy = list.slice();
    var newPaletteArray = [];

    listcopy.splice(index, 1);

    for(var i = 0; i < listcopy.length; i++) {
      newPaletteArray.push(listcopy[i].originalObj);
    }
    setPaletteArray(newPaletteArray);
  }

  function handleHeaderClick() {
    if(isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function handleItemClick(e, index, list = Array) {
    var newList = list.slice();

    for(var i = 0; i < newList.length; i++) {
      if(newList[i].selected === true) {
        newList[i].selected = false;
      }
    }

    newList[index].selected = true;

    var colours = newList[index].originalObj.colour;

    setColourArray(colours);

    setDropdownArray(newList);
    setIsOpen(false);
    setHeaderTitle(e.target.textContent);
  }

  function handleDocumentClick(e) {
    if(dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  return (
    <div className='dropdown' ref={dropDownRef} >

      <div 
        className='dropdown-header'
        onClick={() => {handleHeaderClick()}} 
      >
        {headerTitle}
      </div> 

      {
        isOpen &&
      <div 
        className='dropdown-list'
      >
        {dropDown}
      </div>
      }
    </div>
  )
}

export default DropDown
