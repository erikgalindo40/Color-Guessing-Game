// import React from 'react'

function ColorOption({ onOptionSelect, color }) {
  return (
    <div>
        <button onClick={()=>onOptionSelect(color)} className="color-button">{color}</button>
    </div>
  )
}

export default ColorOption