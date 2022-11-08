// import React from 'react'

function ColorOption({ onOptionSelect, color }) {
  return (
    <div>
        <button onClick={()=>onOptionSelect()} className="color-button">{color}</button>
    </div>
  )
}

export default ColorOption