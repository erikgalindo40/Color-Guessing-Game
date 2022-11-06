import React from 'react'
import ColorOption from './ColorOption'

function OptionContainer({ onOptionSelect }) {
  return (
    <div className='color-option-container'>
        <ColorOption onOptionSelect={onOptionSelect}/>
        <ColorOption/>
        <ColorOption/>
    </div>
  )
}

export default OptionContainer