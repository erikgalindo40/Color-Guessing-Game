import ColorDisplay from "./components/ColorDisplay";
import OptionContainer from "./components/OptionContainer";
import { useState, useEffect } from "react";


function App() {
  const [color, setColor] = useState('aqua')
  const [hexcodes, setHexCodes] = useState([])

  return (
    <>
    <ColorDisplay color={color}/>
    <OptionContainer/>
    </>
  );
}

export default App;
