import React from 'react'
import ColorOption from './ColorOption'

function OptionContainer({ onOptionSelect, hexCodes }) {
  return (
    <div className='color-option-container'>
    {hexCodes.map((hexcode, index)=>(
      <ColorOption key={index} color={hexcode} onOptionSelect={onOptionSelect} />
    ))}
    </div>
  )
}

export default OptionContainer