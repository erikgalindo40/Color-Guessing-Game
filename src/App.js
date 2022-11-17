import ColorDisplay from "./components/ColorDisplay";
import OptionContainer from "./components/OptionContainer";
import { useState, useEffect } from "react";
import AnswerConfirmation from "./components/AnswerConfirmation";
import ScoreContainer from "./components/ScoreContainer";


function App() {
  const [color, setColor] = useState('')
  const [hexCodes, setHexCodes] = useState([])
  const [isCorrect, setIsCorrect] = useState('start')
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    setInitialHexCodes()
  }, [])

  const setInitialHexCodes = () => {
    let randomHex = getRandomHex()
      setColor(randomHex)
      setHexCodes(shuffleHexCodeArray([randomHex, getRandomHex(), getRandomHex()]))
  }

  const generateNewHexCodesArray = () =>{
      let randomHex = getRandomHex()
      setColor(randomHex)
      setHexCodes(shuffleHexCodeArray([randomHex, getRandomHex(), getRandomHex()]))
  }
  
  const getRandomHex = () => {
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
      setIsCorrect(true)
      generateNewHexCodesArray()
      increaseCurrentScore()
    } else {
      setIsCorrect(false)
      resetCurrentScore()
    }
  }

  const shuffleHexCodeArray = (hexCodeArray) =>{
    for (let i = hexCodeArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [hexCodeArray[i], hexCodeArray[j]] = [hexCodeArray[j], hexCodeArray[i]];
  }
  return hexCodeArray
  }

  const increaseCurrentScore = () => {
    setCurrentScore(currentScore+1)
    currentScore+1>highScore&&setHighScore(highScore+1)
  }

  const resetCurrentScore = () =>{
    setCurrentScore(0)
  }

  return (
    <>
    <ScoreContainer currentScore={currentScore} highScore={highScore} />
    <ColorDisplay color={color}/>
    <OptionContainer hexCodes={hexCodes} color={color} onGenRanHex={getRandomHex} onOptionSelect={handleOptionSelect}/>
    {isCorrect=='start'?
    <AnswerConfirmation styleColor='black' text={'Guess The Hex Code!'}/>
    :isCorrect?
    <AnswerConfirmation styleColor='green' text={'Correct!'}/>
    :
    <AnswerConfirmation styleColor='red' text={'Try Again'}/>
    }
    </>
  );
}

export default App;
