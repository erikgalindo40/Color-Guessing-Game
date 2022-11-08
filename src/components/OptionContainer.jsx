import React from 'react'
import ColorOption from './ColorOption'

function OptionContainer({ onOptionSelect, color, onGenRanHex }) {


  return (
    <div className='color-option-container'>
        <ColorOption color={color} onOptionSelect={onOptionSelect}/>
        <ColorOption color={onGenRanHex()} onOptionSelect={onOptionSelect}/>
        <ColorOption color={onGenRanHex()} onOptionSelect={onOptionSelect}/>
    </div>
  )
}

export default OptionContainer