// import React from 'react'

function ColorOption({ onOptionSelect }) {
  return (
    <div>
        <button onClick={()=>onOptionSelect()} className="color-button">#7c33a7</button>
    </div>
  )
}

export default ColorOption