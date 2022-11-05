import React from 'react'

function ColorDisplay({ color }) {
  // const genrandomhex = () => {
  //   let randomhex = Math.floor(Math.random()*1_000_000)
  //   console.log(randomhex)
  // }
  // genrandomhex() WIP to 
  return (
    <div 
    style={{background:`${color}`}}
    className="color-display"
    ></div>
  )
}

export default ColorDisplay