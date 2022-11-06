import ColorDisplay from "./components/ColorDisplay";
import OptionContainer from "./components/OptionContainer";
import { useState, useEffect } from "react";


function App() {
  const [color, setColor] = useState('')
  const [hexcodes, setHexCodes] = useState([])

  useEffect(() => {
    let hex = getRanHex()
    setColor(`#${hex}`)
    console.log(hex)
  }, [])
  

  const getRanHex = () => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    for (let n = 0; n < 6; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }

  const handleOptionSelect = () => {
    let hex = getRanHex()
    setColor(`#${hex}`)
  }

  return (
    <>
    <ColorDisplay color={color}/>
    <OptionContainer onOptionSelect={handleOptionSelect}/>
    </>
  );
}

export default App;
