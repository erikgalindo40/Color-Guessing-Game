import ColorDisplay from "./components/ColorDisplay";
import OptionContainer from "./components/OptionContainer";
import { useState, useEffect } from "react";


function App() {
  const [color, setColor] = useState('')
  const [hexCodes, setHexCodes] = useState([])

  useEffect(() => {
    let hex = getRanHex()
    setColor(hex)
    setHexCodes([hex, getRanHex(),getRanHex()])
  }, [])

  const generateNewHexCodesArray = () =>{
    let randomHex = getRanHex()
    setColor(randomHex)
    setHexCodes([randomHex, getRanHex(), getRanHex()])
  }
  

  const getRanHex = () => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    for (let n = 0; n < 6; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    let hex = result.join('');
    return `#${hex}`;
  }

  const handleOptionSelect = (optionColor) => {
    if (optionColor===color) {
      console.log(`match`)
      generateNewHexCodesArray()
    } else {
      console.log(`false`)
    }
  }

  const shuffleHexCodeArray = (hexCodeArray) =>{
    for (let i = hexCodeArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [hexCodeArray[i], hexCodeArray[j]] = [hexCodeArray[j], hexCodeArray[i]];
  }
  return hexCodeArray
  }

  return (
    <>
    <ColorDisplay color={color}/>
    <OptionContainer hexCodes={shuffleHexCodeArray(hexCodes)} color={color} onGenRanHex={getRanHex} onOptionSelect={handleOptionSelect}/>
    </>
  );
}

export default App;
